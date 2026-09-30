# Subclass reference review — 2026-09-29

Dungeon Mister remains the preferred rules and strategy reference. `subclassSources` in `progression.mjs` records a direct guide for every catalog path, discovered through its [2024 index](https://dungeonmister.com/guides/classes-subclasses-in-dnd-2024/). Original short summaries preserve the app's offline operation; source pages are not embedded or fetched by the app.

The core review corrected edition drift in Shadow and Open Hand Monks, Dance and Lore Bards, Gloom Stalker and Hunter Rangers, Battle Master and Eldritch Knight Fighters, Assassin and Arcane Trickster Rogues, Draconic Sorcerers, Archfey and Great Old One Warlocks, and Abjurer and Illusionist Wizards. Examples: Gloom Stalker gets Umbral Sight at 3 and Iron Mind at 7; Abjurer gets Spell Breaker at 10 and Spell Resistance at 14; Dance gets Tandem Footwork at 6 and Leading Evasion at 14.

## Source comparison

The requested [DND 5th Edition Moon Druid page](https://dnd5e.wikidot.com/druid:moon) describes legacy rules: subclass entry at 2, Elemental Wild Shape at 10, and Thousand Forms at 14. These conflict with [Dungeon Mister's 2024 Moon Druid guide](https://dungeonmister.com/guides/circle-of-the-moon-druid-dnd-2024-guide/). The app retains the preferred guide's level-3 entry, Moonlight Step, Lunar Form, and circle-spell progression. Legacy spell effects such as commanded Conjure Animals creatures were also removed from tooltips.

Where Dungeon Mister discusses a feature without enumerating its spell list, the edition-specific `dnd2024.wikidot.com` pages supplement the guide. `subclassSecondarySources` records those exact pages. Their source labels were checked: Eberron: Forge of the Artificer for the revised Artificer paths, Heroes of Faerûn for Knowledge, Noble Genies, Winter Walker, Spellfire, Banneret and Scion, Ravenloft for Phantom, and Arcana Unleashed for Reanimator, Arcane Archer, Necromancer and Transmuter. These supplements fill omissions; they do not override a conflicting preferred guide.

## What the data means

- `subclassSpells`: named subclass grants by character-class level, including feature-limited castings when explicitly explained by `subclassSpellNotes`.
- `subclassSpellChoices`: alternatives, such as one Land terrain, one Vestige list, one Arcane Archer cantrip, or one Scion allegiance. They must not be presented as cumulative grants.
- `subclassSpellcasting`: chosen spell access, including the three third-caster paths and Lore's Magical Discoveries; these are not fixed bonus lists.
- `subclassCastingProgression`: source-checked rows for every level from 3 through 20 for Eldritch Knight, Arcane Trickster, and Warrior of the Mystic Arts. Each row contains prepared spells, cantrips, spell slots, maximum spell rank, and a new-rank marker. Mystic Arts uses the Sorcerer list with Wisdom; the other two use the Wizard list with Intelligence. Its Focus conversion remains in its own subclass note.
- `spellNotes`: short selection aids, not complete spell text. Full range, components, duration, exceptions, material costs, and resource limits remain in the rules source.

Alchemist's Lesser Restoration and Tasha's Bubbling Cauldron, Phantom's Augury and Speak with Dead, Banneret and Wild Heart's ritual spells, Psi Warrior's Telekinesis, and Transmuter's Raise Dead are conditional feature castings. Necromancer's Find Familiar is added to the spellbook; it is not automatically prepared. No optional feat suggestions are represented as subclass-granted feats.

## Validation

`node test.mjs` verifies named-grant tooltips, valid levels, exact catalog lookup keys, alternative spell lists, source links, and regression checks for corrected 2024 milestones. `node scan-guides.mjs --refresh` checks expansion feature-level coverage against live guide headings; it is not semantic rules verification. This remains a concise planning reference rather than a complete character sheet or a reproduction of the rulebooks.
