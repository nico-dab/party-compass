# Party Compass

A free, offline-capable D&D 2024 party planner. [Open the live app](https://party-compass.netlify.app/) · [View the source on GitHub](https://github.com/nico-dab/party-compass).

A free, rules-based D&D 2024 party and character planner. Enter the party, compare class suggestions, and choose a subclass with a short current/next/later strategy path. No account or AI API is needed.

## Run and check

From this directory, run `python -m http.server 8765 --bind 127.0.0.1` and open `http://127.0.0.1:8765/`. Run `node test.mjs` for the recommendation checks and `node audit-catalog.mjs` to compare every subclass and book label with the live Dungeon Mister index. The audit needs internet access; the app does not. Serve over HTTP or HTTPS because the app uses JavaScript modules and a service worker. On Nico's Codex shell, prefix shell commands with `rtk` as directed by `C:\Users\Nico\.codex\RTK.md`.

## Where things live

- `catalog.mjs`: 2024 class/subclass names, original summaries, sourcebook labels, and capability tags. `audit-catalog.mjs` checks the live index against it.
- `advisor.mjs`: deterministic party scenarios, role coverage, and class/subclass ranking. It is importable in Node without a browser.
- `app.mjs`, `index.html`, `styles.css`: saved state and the three focused screens.
- `manifest.webmanifest`, `sw.js`, `icon.svg`: installable web-app shell and offline file cache. Increase the cache name in `sw.js` when releasing changed files.
- `AGENTS.md`: short instructions for coding agents. `STEP_2_PLAN.md`: scope, acceptance checks, and deferred native distribution plan.

The app uses browser `localStorage`; each device has its own data. A native app or different browser will need an explicit export/import step to carry choices across.

## Rules and sources

The catalog matches all 76 subclasses on the [Dungeon Mister 2024 class index](https://dungeonmister.com/guides/classes-subclasses-in-dnd-2024/) as checked on 2026-09-27, plus the [species index](https://dungeonmister.com/guides/races-and-species-in-dnd-2024/). The index abbreviates Arcana Unleashed as **AU** and Forgotten Realms: Heroes of Faerûn as **HoF**; AU does not mean Unearthed Arcana. The [D&D Beyond 2024 Free Rules](https://www.dndbeyond.com/sources/dnd/br-2024/character-classes) support common class milestones. Expansion choices are labeled and controlled by book toggles. Strategy text is original guidance; follow the linked source for exact feature text and timing. The DM decides which books are allowed.

## Install and future native builds

Once hosted over HTTPS, the web app can be added to an iPhone Home Screen through Safari or installed from a compatible Android browser. It caches the app files after the first load. A downloadable APK and independent iPhone build are planned in `STEP_2_PLAN.md`; neither has been built yet.
The subclass screen puts the selected path in the main reading panel: features by level, build decisions, feat planning, spell notes, and play strategy. A compact desktop list or native mobile selector switches paths. All 28 expansion subclasses have source-checked milestones and optional feat guidance as of 2026-09-28. Granted spell lists are distinguished from optional examples; these are selection aids, not exhaustive rules. Role bonuses remain advisor estimates, not official rules.

Run `node scan-guides.mjs --refresh` to fetch all 28 individual expansion guides and check feature-level headings against `progression.mjs`. Without `--refresh`, the scan reuses HTML in the system temporary directory. Different heading ranks and nested markup are supported. The scan fails on missing or changed levels; it does not automatically import prose or verify every rule. Keep summaries hand-reviewed, original, and linked to their guide. This research command is not shipped with the offline app.

## Publish the web app

Run `node publish.mjs` to copy only the app assets into `dist/`, then deploy that folder with `netlify deploy --prod --dir dist --site aae67801-70e1-4ac8-8a5e-43d9a3999b40`. Project notes and source instructions stay out of the published folder.

## Native APK plan (later)

The first Android install package will wrap this existing web app with Capacitor and be built locally on Windows with the Android SDK. The resulting APK installs on Android only. iPhone needs its own signed iOS build from the shared Capacitor app, with Apple provisioning; use a Mac/Xcode or a cloud build service. TestFlight or direct-device distribution has Apple account and signing requirements. Do not start native packaging until after the Netlify web preview is accepted.
