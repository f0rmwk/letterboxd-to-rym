# letterboxd-to-rym

Small browser console script to step through a Letterboxd CSV and open RateYourMusic film searches.

Files:
- `rym-queue.js` — paste CSV into the script.
- `rym-queue-with-data.js` — CSV embedded from `letterboxd.csv`.
- `letterboxd.csv` — Letterboxd export (Date,Name,Year,Letterboxd URI,Rating).

Usage:
1. Open RateYourMusic in your browser.
2. Open DevTools Console.
3. Paste the script and run it.
4. Use the toolbar to open search, copy title + year, and step through films.

Notes:
- Search uses the title only; the year is shown in the overlay for confirmation.
- Works best with the standard Letterboxd CSV export.
