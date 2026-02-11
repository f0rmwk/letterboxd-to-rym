(() => {
  // CSV embedded from ratings.example.csv
  const csvText = `Date,Name,Year,Letterboxd URI,Rating
2024-01-01,Example Film A,2001,https://boxd.it/abcd,4
2024-01-02,Example Film B,1997,https://boxd.it/efgh,3.5
2024-01-03,Example Film C,2010,https://boxd.it/ijkl,5
`;

  if (!csvText.trim()) {
    alert('CSV is empty.');
    return;
  }

  // Robust CSV parser (handles quoted fields + commas inside quotes)
  function parseCSV(text) {
    const rows = [];
    let row = [];
    let field = '';
    let inQuotes = false;

    const pushField = () => {
      row.push(field);
      field = '';
    };
    const pushRow = () => {
      // ignore completely empty trailing lines
      if (row.length === 1 && row[0] === '') return;
      rows.push(row);
      row = [];
    };

    // Normalize line endings but keep parsing char-by-char
    const s = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    for (let i = 0; i < s.length; i++) {
      const c = s[i];

      if (inQuotes) {
        if (c === '"') {
          // Escaped quote: ""
          if (s[i + 1] === '"') {
            field += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          field += c;
        }
        continue;
      }

      if (c === '"') {
        inQuotes = true;
      } else if (c === ',') {
        pushField();
      } else if (c === '\n') {
        pushField();
        pushRow();
      } else {
        field += c;
      }
    }

    // Final field/row
    pushField();
    pushRow();

    const headers = (rows.shift() || []).map(h => (h ?? '').trim());
    const out = [];
    for (const r of rows) {
      if (!r || r.length === 0) continue;
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = (r[idx] ?? '').toString().trim();
      });
      out.push(obj);
    }
    return out;
  }

  const items = parseCSV(csvText).filter(x => (x.Name || '').trim());

  if (!items.length) {
    alert('No rows parsed. Double-check that your CSV has a header row and data rows.');
    return;
  }

  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.right = '0';
  div.style.zIndex = '99999';
  div.style.padding = '12px';
  div.style.background = '#111';
  div.style.color = '#fff';
  div.style.fontFamily = 'system-ui, sans-serif';
  div.style.boxShadow = '0 2px 6px rgba(0,0,0,.6)';
  div.innerHTML = `
    <div style="display:flex; gap:10px; align-items:baseline; flex-wrap:wrap;">
      <div><b>RYM film rating queue</b> <span id="pos"></span></div>
      <div style="font-size:12px; color:#bbb;">(Search opens in a new tab)</div>
    </div>
    <div style="margin-top:8px" id="content"></div>
    <div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
      <button id="prev">Prev</button>
      <button id="open">Open film search</button>
      <button id="copy">Copy title + year</button>
      <button id="next">Next</button>
      <button id="close">Close</button>
    </div>
    <div style="margin-top:6px; font-size:12px; color:#bbb;">
      Tip: rate it on the film page, then click <b>Next</b>.
    </div>
  `;
  document.body.appendChild(div);

  const posEl = div.querySelector('#pos');
  const contentEl = div.querySelector('#content');

  let i = 0;

  // ✅ Forces the Film category (uppercase F)
  const searchBase = 'https://rateyourmusic.com/search?searchtype=F&searchterm=';

  function safeStr(v) {
    return (v ?? '').toString().trim();
  }

  function render() {
    const item = items[i];
    const name = safeStr(item.Name);
    const year = safeStr(item.Year);
    const rating = safeStr(item.Rating);

    posEl.textContent = `(${i + 1} / ${items.length})`;
    contentEl.innerHTML = `
      <div style="font-size:14px;"><b>${name || '(missing title)'}</b>${year ? ` (${year})` : ''}</div>
      <div style="margin-top:4px;">Rating: ${rating || '(missing rating)'}</div>
    `;
  }

  div.querySelector('#prev').onclick = () => { i = (i - 1 + items.length) % items.length; render(); };
  div.querySelector('#next').onclick = () => { i = (i + 1) % items.length; render(); };
  div.querySelector('#close').onclick = () => div.remove();

  div.querySelector('#open').onclick = () => {
    const item = items[i];
    const name = safeStr(item.Name);
    const q = `${name}`.trim();
    window.open(searchBase + encodeURIComponent(q), '_blank');
  };

  div.querySelector('#copy').onclick = async () => {
    const item = items[i];
    const name = safeStr(item.Name);
    const year = safeStr(item.Year);
    const q = `${name}${year ? ` (${year})` : ''}`.trim();
    try {
      await navigator.clipboard.writeText(q);
      div.querySelector('#copy').textContent = 'Copied!';
      setTimeout(() => (div.querySelector('#copy').textContent = 'Copy title + year'), 900);
    } catch {
      alert(q);
    }
  };

  render();
})();
