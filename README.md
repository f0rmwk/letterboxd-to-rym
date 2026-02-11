# letterboxd-to-rym

Small browser console script to step through a Letterboxd CSV and open RateYourMusic film searches.

Files:
- `rym-queue.js` — paste CSV into the script.
- `rym-queue-with-data.js` — CSV embedded from `ratings.example.csv`.
- `ratings.example.csv` — example Letterboxd export format.
- `ratings.csv` — your real export (ignored by git).

Usage:
1. Export your Letterboxd ratings as `ratings.csv`.
2. Open RateYourMusic in your browser.
3. Open DevTools Console.
4. Paste the script and run it.
5. Use the toolbar to open search, copy title + year, and step through films.

Notes:
- Search uses the title only; the year is shown in the overlay for confirmation.
- Works best with the standard Letterboxd CSV export.
