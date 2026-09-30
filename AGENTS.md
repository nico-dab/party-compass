# Party Compass agent instructions

Read [README.md](README.md) and [STEP_2_PLAN.md](STEP_2_PLAN.md) before changing the picker. The product is a subscription-free, rules-based D&D character and party advisor. Keep the web app usable without an account or network connection after its first load.

## Current project

- `catalog.mjs` holds class and subclass summaries, `advisor.mjs` holds pure recommendation functions, and `app.mjs` owns browser state and the three-screen UI. `styles.css` is the visual design; `sw.js` and `manifest.webmanifest` support offline installation.
- Catalog subclass tuples are `[name, summary, roleBonuses, expansionFlag?, sourceUrl?, book?]`. The catalog covers all 76 subclasses on the Dungeon Mister index as checked on 2026-09-27. Its AU label means Arcana Unleashed; HoF means Forgotten Realms: Heroes of Faerûn. Keep sourcebook labels and guide links accurate.
- Run `node test.mjs` after changing the catalog or recommendation behavior, and `node audit-catalog.mjs` to compare all subclass names, book labels, and direct links with the live index. Serve the folder over HTTP for browser checks; ES modules may not load from `file://`. Bump the `sw.js` cache version when changing cached files.
- Choices are saved in browser `localStorage`. Preserve or migrate saved data when changing the format. Browser data is per device; native app data will need an explicit transfer route later.

## Rules for future changes

- Use the [Dungeon Mister 2024 class index](https://dungeonmister.com/guides/classes-subclasses-in-dnd-2024/) and [species index](https://dungeonmister.com/guides/races-and-species-in-dnd-2024/) as discovery references. Link the specific guide for a feature when available. Mark expansion content and its sourcebook; the DM decides what is allowed.
- Do not invent class features, levels, species traits, or rules. Keep original summaries short and link sources. Distinguish a verified mechanic from a suggested play strategy.
- Make recommendations with deterministic data and pure functions. Show reasons and uncertainty. A class outside the shortlist must still receive ranked subclasses.
- Keep the interface focused: party entry, class choice, then subclass and level path. Hide detail until requested and keep mobile and keyboard use working.
- Keep dependencies minimal. Do not add a live AI API, account system, or subscription. Android APK and native iPhone distribution are planning-only for now. Revisit Expo when native distribution is actually requested; keep the pure catalog and advisor reusable.
- Update this file and `STEP_2_PLAN.md` when a product rule, data source, build command, or acceptance gate changes.
`progression.mjs` holds hand-authored, source-linked subclass milestones, build decisions, optional feat ideas, and spell summaries. All 28 expansion paths were checked against their individual guides on 2026-09-28. Keep spell picks labelled as examples unless verified as granted; these are selection aids, not complete character sheets. Run `node scan-guides.mjs --refresh` to fetch every expansion guide and compare its feature-level headings with local timelines. This detects level gaps, not rules accuracy: feature text and suggestions still need editorial review. The selected path belongs in the wide main reading panel, with a compact desktop selector and native mobile select. Bump the service-worker cache name when cached files change.

## Class reference and play companion

- Party members have stable IDs; the current player ID controls the You label and personalized advisor view. Keep class and subclass editable from every roster card. Keep the current player's card first and use the Make mine action to switch focus. This is local-only personalization, not an account or sync service.

- `class-progression.mjs` owns shared class levels 1–20, resources, spell capacity, and class spell options. `spell-glossary.mjs` owns source-checked spell explanations. Keep shared features and spells in the class view; subclass panels show path additions. Spell choices follow allowed-book toggles and do not imply automatic grants.
- `strategy.mjs` owns class and subclass play suggestions. Show the companion beside the reading panel on desktop and below it on mobile. Label advice and optional feats separately from granted features.
- Dungeon Mister remains the preferred reference when sources disagree. Supplement gaps with official 2024 rules. Wikidot requires an edition check; legacy 2014 mechanics must not replace 2024 data. RPGBOT provides secondary strategy context, not rules authority or a universal subclass ranking.
- Spell explanations work with click, tap, and keyboard and stay available offline. Preserve saved choices. Include every runtime data module in both `sw.js` and `publish.mjs`, and bump the service-worker cache when cached files change.
- Website only for this iteration. Validate all 13 class references and 76 subclass paths, desktop/mobile layout, keyboard access, saved selections, and offline reload. Live catalog and guide scans verify source structure, not exhaustive rules accuracy.


Reference screen data lives in reference-catalog.mjs, reference-equipment.mjs, reference-creatures.mjs, reference-feats.mjs, and reference-spell-notes.mjs. Keep entries brief and source checked against 2024 rules. Show useful statistics and summaries within the app; source links are optional follow-up reading. Run `node reference-check.mjs` after changing reference data. Include every runtime data module in publish.mjs and the service-worker precache. The Reference screen is a starter index, not a complete compendium.
