# Shared class reference — checked 2026-09-29

`class-progression.mjs` holds all 20 class levels for the 13 supported classes. Feature names, resource counts, cantrip/prepared-spell counts, spell slots and class spell-list names come from the linked tables. Descriptions are short original selection aids, not full rules text. Class levels are not multiclass character levels.

Dungeon Mister remains the preferred discovery and interpretation source. Its class optimisation guides do not reproduce every progression table; the official [2024 Free Rules class chapter](https://www.dndbeyond.com/sources/dnd/br-2024/character-classes) fills those omissions for the twelve PHB classes. Its spell lists are a Free Rules subset, not the complete PHB list: for example, the Wizard list omits Chromatic Orb and Witch Bolt. The source-linked spell metadata supplies rank, school, concentration and ritual flags, not invented effect summaries.

The class spell menus therefore use the complete tables currently indexed by **dnd2024.wikidot.com**, including its additional PHB and expansion entries. All official Free Rules names were compared against these tables, accounting for apostrophe/capitalization differences; official metadata and links win where present. Added names retain direct 2024 Wikidot spell links. These are the 2024 site, not the incompatible legacy class lists on dnd5e.wikidot.com. Source labels were then fetched from 101 individual supplementary spell pages, allowing reliable per-spell book filtering rather than silently classifying additions as core.

The 456 distinct listed spells comprise 391 PHB, 33 Arcana Unleashed, 19 Heroes of Faerun, one Eberron, and twelve D&D Beyond Drops spells. Each metadata entry carries `book` (matching existing allowed-book keys) and a full `bookLabel`. Beyond Drops has no existing book toggle: those twelve are marked `reviewRequired: true` and must be separated from normal allowed choices for explicit DM review. Its source label includes the May, June, or September 2026 release. No source was left unknown. Supplementary concentration/ritual flags were also checked against each spell page.

| Class | Named options | Secondary list |
| --- | ---: | --- |
| Artificer | 88 | [2024 list](https://dnd2024.wikidot.com/artificer:spell-list) |
| Bard | 165 | [2024 list](https://dnd2024.wikidot.com/bard:spell-list) |
| Cleric | 130 | [2024 list](https://dnd2024.wikidot.com/cleric:spell-list) |
| Druid | 149 | [2024 list](https://dnd2024.wikidot.com/druid:spell-list) |
| Paladin | 55 | [2024 list](https://dnd2024.wikidot.com/paladin:spell-list) |
| Ranger | 68 | [2024 list](https://dnd2024.wikidot.com/ranger:spell-list) |
| Sorcerer | 180 | [2024 list](https://dnd2024.wikidot.com/sorcerer:spell-list) |
| Warlock | 119 | [2024 list](https://dnd2024.wikidot.com/warlock:spell-list) |
| Wizard | 297 | [2024 list](https://dnd2024.wikidot.com/wizard:spell-list) |

Artificer uses the published *Eberron: Forge of the Artificer* revision, not the 2014 class or an Unearthed Arcana playtest. Dungeon Mister's revision guide confirms the new Replicate Magic Item, Magic Item Tinker, revised Flash of Genius, and rank-3 Spell-Storing Item changes. The [2024 Wikidot class table](https://dnd2024.wikidot.com/artificer:main) and [spell list](https://dnd2024.wikidot.com/artificer:spell-list) supply the complete supplemental table. This is explicitly a secondary source; the older dnd5e.wikidot.com Artificer should not overwrite this revision.

## Primary class guides fetched

- [Artificer](https://dungeonmister.com/guides/classes-in-dungeons-dragons/artificer-dnd-2024-guide/)
- [Barbarian](https://dungeonmister.com/guides/classes-in-dungeons-dragons/barbarian-dnd-5e-2024-class-guide/)
- [Bard](https://dungeonmister.com/guides/classes-in-dungeons-dragons/bard-dd-2024-class-optimisation-guide/)
- [Cleric](https://dungeonmister.com/guides/classes-in-dungeons-dragons/cleric-dnd-2024-class-guide/)
- [Druid](https://dungeonmister.com/guides/classes-in-dungeons-dragons/druid-dnd-2024-class-guide/)
- [Fighter](https://dungeonmister.com/guides/classes-in-dungeons-dragons/fighter-dnd-2024-class-guide/)
- [Monk](https://dungeonmister.com/guides/classes-in-dungeons-dragons/monk-dnd-2024-class-guide/)
- [Paladin](https://dungeonmister.com/guides/paladin-dnd-2024-class-guide/)
- [Ranger](https://dungeonmister.com/guides/classes-in-dungeons-dragons/ranger-dnd-2024-class-optimisation-guide/)
- [Rogue](https://dungeonmister.com/guides/classes-in-dungeons-dragons/rogue-dnd-2024-class-guide/)
- [Sorcerer](https://dungeonmister.com/guides/classes-in-dungeons-dragons/sorcerer-dnd-2024-optimisation-guide/)
- [Warlock](https://dungeonmister.com/guides/classes-in-dungeons-dragons/warlock-dnd-2024-class-guide/)
- [Wizard](https://dungeonmister.com/guides/wizard-dnd-2024-guide/)

## Interpretation and limits

- Spell lists are available choices, not automatic grants. New-rank groups use their earliest normal single-class unlock level. Warlock ranks 6–9 are choices for Mystic Arcanum, not Pact Magic slots.
- Class-granted access appears separately: Mending, Speak with Animals, Wild Companion's conditional Find Familiar, Divine Smite, Find Steed, Hunter's Mark, Contact Other Plane, and the two Words of Creation spells. The feature description controls how that access works; these are not all ordinary prepared spells.
- Cantrip/prepared counts are the base table, before features such as Divine Order, Primal Order, fighting-style cantrips or subclass additions. Slots are per spell rank. Subclass-only spellcasting remains on the subclass page.
- Spell menus cover the complete fetched 2024 Wikidot class tables, including expansions, rather than asserting that the secondary index covers every published book. The UI can filter normal spell options by the metadata's `book` and show `reviewRequired` additions separately. The DM decides availability.
- The class summary does not reproduce every invocation, magic-item plan, Metamagic option, feat prerequisite, equipment price, or spell's complete rules. Follow the source links for those choice menus and exact limitations.
- Checked data invariants: thirteen classes, twenty sequential levels each, descriptions for every shared feature, correct single-class rank unlocks, and matching rank metadata for every listed spell (456 distinct listed names; metadata also retains punctuation aliases).
