// Short, offline 2024 rules references. Sources are optional follow-up reading.
const play = 'https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game';
const equipment = 'https://www.dndbeyond.com/sources/dnd/br-2024/equipment';
const glossary = 'https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary/';
const spells = 'https://www.dndbeyond.com/sources/dnd/br-2024/spells';

const skillRows = [
  ['Acrobatics', 'Dexterity', 'Keep your footing in a tricky spot or perform a nimble stunt.'],
  ['Animal Handling', 'Wisdom', 'Calm or train an animal, or guide its behavior.'],
  ['Arcana', 'Intelligence', 'Recall lore about spells, magic items, or other planes.'],
  ['Athletics', 'Strength', 'Jump farther, stay afloat in rough water, or break an object.'],
  ['Deception', 'Charisma', 'Lie convincingly or make a disguise believable.'],
  ['History', 'Intelligence', 'Recall past events, people, nations, or cultures.'],
  ['Insight', 'Wisdom', 'Read someone’s mood or intentions.'],
  ['Intimidation', 'Charisma', 'Pressure someone with a threat or imposing presence.'],
  ['Investigation', 'Intelligence', 'Find obscure information or work out how something functions.'],
  ['Medicine', 'Wisdom', 'Identify an illness or determine a recent cause of death.'],
  ['Nature', 'Intelligence', 'Recall facts about terrain, plants, animals, or weather.'],
  ['Perception', 'Wisdom', 'Notice a detail that is easy to miss with your senses.'],
  ['Performance', 'Charisma', 'Act, tell stories, play music, or dance for others.'],
  ['Persuasion', 'Charisma', 'Convince someone honestly and with tact.'],
  ['Religion', 'Intelligence', 'Recall lore about gods, rituals, or holy symbols.'],
  ['Sleight of Hand', 'Dexterity', 'Pick a pocket, hide a small object, or perform a hand trick.'],
  ['Stealth', 'Dexterity', 'Avoid notice by moving quietly and using cover.'],
  ['Survival', 'Wisdom', 'Follow tracks, forage, find a trail, or avoid wilderness hazards.'],
];

export const skillEntries = skillRows.map(([name, ability, example]) => ({
  name, category: 'Skills',
  summary: example,
  facts: [['Usual ability', ability], ['Example uses', example], ['Proficiency', 'Add your Proficiency Bonus when this skill applies to the check and you are proficient.']],
  source: play,
}));

const abilityRows = [
  ['Strength', 'Physical force', 'Lift, shove, pull, or break something.', 'Resist a direct physical force.', 'Athletics'],
  ['Dexterity', 'Agility and quick movement', 'Move nimbly, quickly, or quietly.', 'Dodge out of danger.', 'Acrobatics, Sleight of Hand, Stealth'],
  ['Constitution', 'Endurance', 'Push your body beyond its usual limit.', 'Withstand poison or another bodily hazard.', 'No skill normally uses Constitution'],
  ['Intelligence', 'Reason and memory', 'Solve a problem or recall information.', 'Recognize an illusion as false.', 'Arcana, History, Investigation, Nature, Religion'],
  ['Wisdom', 'Awareness and intuition', 'Notice your surroundings or behavior.', 'Resist a mental assault.', 'Animal Handling, Insight, Medicine, Perception, Survival'],
  ['Charisma', 'Force of personality', 'Influence, entertain, or deceive.', 'Assert your identity.', 'Deception, Intimidation, Performance, Persuasion'],
];

export const ruleTerms = [
  ...abilityRows.map(([name, summary, check, save, skills]) => ({
    name, category: 'Abilities', summary,
    facts: [['Example check', check], ['Example save', save], ['Usually linked skills', skills], ['Modifier', 'Your score sets the modifier added to relevant d20 rolls; 10–11 gives +0, and each 2 points changes it by 1.']],
    source: play,
  })),
  {
    name: 'Skills', category: 'Rules',
    summary: 'The skill list shows each proficiency’s usual ability and practical examples of when it helps. The DM decides which skill fits a check.',
    facts: [['How proficiency helps', 'Add your Proficiency Bonus to an ability check when the skill is relevant and you are proficient.'], ['Without proficiency', 'You may still make the check, without that bonus.'], ['Different abilities', 'The DM may pair a skill with another ability when the situation calls for it.']], source: play,
  },
  {
    name: 'Ability Check', category: 'Rules',
    summary: 'A d20 roll used when a creature tries something uncertain that could meaningfully fail.',
    facts: [['Roll', '1d20 + relevant ability modifier + applicable Proficiency Bonus and other modifiers'], ['Success', 'Meet or exceed the Difficulty Class (DC).'], ['Typical DCs', 'Easy 10; medium 15; hard 20. The DM sets the DC.']], source: play,
  },
  {
    name: 'Proficiency Bonus', category: 'Rules',
    summary: 'A level-based bonus added when training applies to a check, save, weapon attack, or spell attack.',
    facts: [['Levels 1–4', '+2'], ['5–8', '+3'], ['9–12', '+4'], ['13–16', '+5'], ['17–20', '+6'], ['Same roll', 'The bonus does not stack with itself.']], source: play,
  },
  {
    name: 'Saving Throw', category: 'Rules',
    summary: 'A d20 roll to resist a danger or harmful effect, using the ability named by that effect.',
    facts: [['Roll', '1d20 + named ability modifier + Proficiency Bonus if proficient in that save'], ['Success', 'Meet or exceed the effect’s DC.'], ['Typical trigger', 'A spell, trap, or monster ability calls for the save.']], source: play,
  },
  {
    name: 'Armor Class', category: 'Rules',
    summary: 'The number an attack roll must meet or exceed to hit you.',
    facts: [['Unarmored base', '10 + Dexterity modifier'], ['Armor', 'Armor and class features can give another AC calculation; use only one base calculation at a time.'], ['Shield', 'A trained Shield adds +2 AC.']], source: glossary,
  },
  {
    name: 'Spellcasting', category: 'Rules',
    summary: 'Casting a spell follows its level, casting time, range, components, duration, and effect.',
    facts: [['Spell attack', 'Spellcasting ability modifier + Proficiency Bonus'], ['Save DC', '8 + spellcasting ability modifier + Proficiency Bonus'], ['Spell slot', 'Most level 1+ spells expend a slot of the spell’s level or higher.']], source: spells,
  },
  {
    name: 'Armor Training', category: 'Armor',
    summary: 'Training lets you wear a listed armor category without its untrained drawbacks.',
    facts: [['No armor training', 'Strength and Dexterity d20 tests have Disadvantage, and you cannot cast spells while wearing that armor.'], ['No Shield training', 'You do not gain a Shield’s +2 AC bonus.'], ['Categories', 'Light Armor, Medium Armor, Heavy Armor, and Shields are separate training entries.']], source: equipment,
  },
  {
    name: 'Light Armor', category: 'Armor',
    summary: 'The lightest armor category; its listed AC includes your full Dexterity modifier.',
    facts: [['Armor', 'Padded armor, Leather armor, Studded leather armor'], ['AC', 'Padded or Leather 11 + Dex; Studded Leather 12 + Dex'], ['Don / doff', '1 minute each'], ['Training', 'Without training, Strength or Dexterity d20 tests have Disadvantage and you cannot cast spells.']], source: equipment,
  },
  {
    name: 'Medium Armor', category: 'Armor',
    summary: 'Armor with AC that includes at most +2 from Dexterity.',
    facts: [['Armor', 'Hide armor, Chain shirt, Scale mail, Breastplate, Half plate'], ['AC', 'From 12 + Dex (max +2) to 15 + Dex (max +2), depending on armor'], ['Don / doff', '5 minutes / 1 minute'], ['Training', 'Without training, Strength or Dexterity d20 tests have Disadvantage and you cannot cast spells.']], source: equipment,
  },
  {
    name: 'Heavy Armor', category: 'Armor',
    summary: 'Armor with a fixed AC; some suits require a minimum Strength score to avoid a speed penalty.',
    facts: [['Armor', 'Ring mail, Chain mail, Splint armor, Plate armor'], ['AC', '14, 16, 17, or 18, respectively'], ['Strength', 'Chain Mail needs 13; Splint and Plate need 15 to avoid −10 feet Speed.'], ['Stealth', 'All listed heavy armor gives Disadvantage on Dexterity (Stealth) checks.'], ['Don / doff', '10 minutes / 5 minutes']], source: equipment,
  },
  {
    name: 'Shields', category: 'Armor',
    summary: 'A Shield gives +2 AC when you have Shield training.',
    facts: [['AC', '+2'], ['Weight / cost', '6 lb. / 10 GP'], ['Don / doff', 'Utilize action'], ['Limit', 'Only one Shield can be wielded at a time.']], source: equipment,
  },
  {
    name: 'Simple Weapons', category: 'Weapons',
    summary: 'One of the two weapon proficiency categories; training adds your Proficiency Bonus to attacks made with these weapons.',
    facts: [['Melee', 'Club, Dagger, Greatclub, Handaxe, Javelin, Light Hammer, Mace, Quarterstaff, Sickle, Spear'], ['Ranged', 'Dart, Light Crossbow, Shortbow, Sling'], ['Each weapon', 'Has its own damage, properties, mastery, weight, and cost.']], source: equipment,
  },
  {
    name: 'Martial Weapons', category: 'Weapons',
    summary: 'A weapon proficiency category that includes advanced melee and ranged arms.',
    facts: [['Melee', 'Battleaxe, Flail, Glaive, Greataxe, Greatsword, Halberd, Lance, Longsword, Maul, Morningstar, Pike, Rapier, Scimitar, Shortsword, Trident, Warhammer, War Pick, Whip'], ['Ranged', 'Blowgun, Hand Crossbow, Heavy Crossbow, Longbow, Musket, Pistol'], ['Proficiency', 'Adds your Proficiency Bonus to attack rolls with these weapons.']], source: equipment,
  },
  {name:'Hit Point Die', category:'Rules', summary:'The die size a class uses to calculate Hit Points gained at each class level.', facts:[['First class level','Gain the die maximum plus your Constitution modifier.'],['Later class levels','Roll the die or take the fixed value in your class rules, then add your Constitution modifier.']],source:glossary},
  {name:'Bonus Action',category:'Rules',summary:'An extra action you can take on your turn only when a rule or feature gives you one.',facts:[['Limit','At most one Bonus Action per turn.'],['Timing','Choose when to take it on your turn unless its rule says otherwise.']],source:play},
  {name:'Reaction',category:'Rules',summary:'A response to a trigger on your turn or someone else’s turn.',facts:[['Limit','One Reaction until the start of your next turn.'],['Trigger','The feature, spell, or rule states what allows it.']],source:play},
  {name:'Advantage',category:'Rules',summary:'Roll two d20s for the test and use the higher result.',facts:[['Interaction','If you have both Advantage and Disadvantage, roll one d20.']],source:play},
  {name:'Disadvantage',category:'Rules',summary:'Roll two d20s for the test and use the lower result.',facts:[['Interaction','If you have both Advantage and Disadvantage, roll one d20.']],source:play},
  {name:'Concentration',category:'Rules',summary:'The focus required by some spells and effects; you can maintain only one at a time.',facts:[['Damage save','Constitution save, DC 10 or half the damage taken (whichever is higher).'],['Ends when','You begin another Concentration effect, are Incapacitated, or die.']],source:spells},
  {name:'Short Rest',category:'Rules',summary:'A 1-hour break when you can spend Hit Point Dice to heal and recover features that name a Short Rest.',facts:[['Time','At least 1 hour'],['Healing','Spend one or more available Hit Point Dice.']],source:glossary},
  {name:'Long Rest',category:'Rules',summary:'An extended 8-hour rest that restores Hit Points and many class resources.',facts:[['Time','At least 8 hours'],['Hit Points','Regain all lost Hit Points.'],['Hit Point Dice','Regain spent dice up to half your total, minimum one.']],source:glossary},
  {name:'Musical Instruments',category:'Equipment',summary:'Instrument proficiency helps you perform with that instrument or use it as a spellcasting focus when a feature allows it.',facts:[['Ability','Charisma'],['Examples','Bagpipes, drum, dulcimer, flute, horn, lute, lyre, pan flute, shawm, viol'],['Typical checks','Play a known tune (DC 10) or improvise a song (DC 15).'],['Cost / weight','Depends on instrument; flute 2 GP / 1 lb., lute 35 GP / 2 lb.']],source:equipment},
  {name:'Artisan’s Tools',category:'Equipment',summary:'Each type of artisan’s tools is a separate proficiency used for its trade or craft.',facts:[['Examples','Alchemist’s Supplies, Brewer’s Supplies, Carpenter’s Tools, Cook’s Utensils, Smith’s Tools, Tinker’s Tools, Weaver’s Tools'],['Use','A relevant proficiency can add your Proficiency Bonus to checks using the tools.']],source:equipment},
  {name:'Herbalism Kit',category:'Equipment',summary:'Tools for identifying plants and crafting simple remedies.',facts:[['Ability','Intelligence'],['Example use','Identify a plant (DC 10)'],['Craft','Antitoxin, Candle, Healer’s Kit, Potion of Healing'],['Cost / weight','5 GP / 3 lb.']],source:equipment},
  {name:'Finesse',category:'Weapons',summary:'A weapon property that lets you use Strength or Dexterity for its attack and damage rolls.',facts:[['Choice','Use the same modifier for the attack and damage roll.'],['Examples','Dagger, Rapier, Shortsword']],source:equipment},
  {name:'Light property',category:'Weapons',summary:'A Light weapon can enable one extra attack when you attack with another Light weapon.',facts:[['Extra attack','Bonus Action later on the same turn; a different Light weapon must make it.'],['Damage','Do not add your ability modifier to extra attack damage unless that modifier is negative.'],['Examples','Dagger, Handaxe, Shortsword']],source:equipment},
  ...[
    ['Ammunition','Each ranged attack consumes one piece of the listed ammunition; you need a free hand to load a one-handed weapon.'],
    ['Heavy','A Heavy melee weapon requires Strength 13 and a Heavy ranged weapon requires Dexterity 13 to avoid Disadvantage on attack rolls.'],
    ['Loading','You can fire only one piece of ammunition when using an action, Bonus Action, or Reaction to fire the weapon.'],
    ['Reach','Adds 5 feet to the weapon’s reach for attacks and Opportunity Attacks.'],
    ['Thrown','You can throw the weapon for a ranged attack and draw it as part of that attack.'],
    ['Two-Handed','Requires two hands when you attack with the weapon.'],
    ['Versatile','Use one or two hands; the parenthesized damage die applies to a two-handed melee attack.'],
    ['Cleave','After a melee hit, attack a second creature within 5 feet of the first and within your reach, once per turn.'],
    ['Graze','A missed attack still deals damage equal to the ability modifier used for that attack.'],
    ['Nick','Make the Light-property extra attack as part of the Attack action instead of a Bonus Action, once per turn.'],
    ['Push','On a hit, push a Large or smaller creature up to 10 feet away.'],
    ['Sap','On a hit, the target has Disadvantage on its next attack roll before your next turn.'],
    ['Slow mastery','On a damaging hit, reduce the target’s Speed by 10 feet until your next turn; repeated Slow hits do not stack.'],
    ['Topple','On a hit, force a Constitution save (DC 8 + attack ability modifier + Proficiency Bonus) or knock the target Prone.'],
    ['Vex','On a damaging hit, gain Advantage on your next attack against that target before your next turn ends.'],
  ].map(([name,summary])=>({name,category:'Weapons',summary,facts:[['Kind',/^(Cleave|Graze|Nick|Push|Sap|Slow mastery|Topple|Vex)$/.test(name)?'Mastery; requires a feature that unlocks it':'Weapon property']],source:equipment})),
];
