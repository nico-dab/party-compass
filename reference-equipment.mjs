// Short, offline equipment reference from the official 2024 Basic Rules.
const source = 'https://www.dndbeyond.com/sources/dnd/br-2024/equipment';

const armor = [
  // Name, type, AC, Strength, Stealth, weight, cost.
  ['Padded armor','Light','11 + Dex','—','Disadvantage','8 lb.','5 GP'],
  ['Leather armor','Light','11 + Dex','—','—','10 lb.','10 GP'],
  ['Studded leather armor','Light','12 + Dex','—','—','13 lb.','45 GP'],
  ['Hide armor','Medium','12 + Dex (max 2)','—','—','12 lb.','10 GP'],
  ['Chain shirt','Medium','13 + Dex (max 2)','—','—','20 lb.','50 GP'],
  ['Scale mail','Medium','14 + Dex (max 2)','—','Disadvantage','45 lb.','50 GP'],
  ['Breastplate','Medium','14 + Dex (max 2)','—','—','20 lb.','400 GP'],
  ['Half plate','Medium','15 + Dex (max 2)','—','Disadvantage','40 lb.','750 GP'],
  ['Ring mail','Heavy','14','—','Disadvantage','40 lb.','30 GP'],
  ['Chain mail','Heavy','16','13','Disadvantage','55 lb.','75 GP'],
  ['Splint armor','Heavy','17','15','Disadvantage','60 lb.','200 GP'],
  ['Plate armor','Heavy','18','15','Disadvantage','65 lb.','1,500 GP'],
  ['Shield','Shield','+2','—','—','6 lb.','10 GP']
].map(([name,type,ac,strength,stealth,weight,cost]) => ({
  name, category:'Armor', summary:type === 'Shield' ? 'Adds 2 to AC while you wield it, if trained.' : `${type} armor; see the AC formula and limits below.`,
  facts:[['AC',ac],['Strength',strength],['Stealth',stealth],['Weight',weight],['Cost',cost]], source
}));

const weapons = [
  // Name, damage, properties, mastery, weight, cost.
  ['Dagger','1d4 Piercing','Finesse, Light, Thrown (20/60)','Nick','1 lb.','2 GP'],
  ['Shortsword','1d6 Piercing','Finesse, Light','Vex','2 lb.','10 GP'],
  ['Rapier','1d8 Piercing','Finesse','Vex','2 lb.','25 GP'],
  ['Longsword','1d8 Slashing','Versatile (1d10)','Sap','3 lb.','15 GP'],
  ['Greatsword','2d6 Slashing','Heavy, Two-Handed','Graze','6 lb.','50 GP'],
  ['Greataxe','1d12 Slashing','Heavy, Two-Handed','Cleave','7 lb.','30 GP'],
  ['Battleaxe','1d8 Slashing','Versatile (1d10)','Topple','4 lb.','10 GP'],
  ['Mace','1d6 Bludgeoning','—','Sap','4 lb.','5 GP'],
  ['Quarterstaff','1d6 Bludgeoning','Versatile (1d8)','Topple','4 lb.','2 SP'],
  ['Spear','1d6 Piercing','Thrown (20/60), Versatile (1d8)','Sap','3 lb.','1 GP'],
  ['Javelin','1d6 Piercing','Thrown (30/120)','Slow','2 lb.','5 SP'],
  ['Shortbow','1d6 Piercing','Ammunition (80/320; Arrow), Two-Handed','Vex','2 lb.','25 GP'],
  ['Longbow','1d8 Piercing','Ammunition (150/600; Arrow), Heavy, Two-Handed','Slow','2 lb.','50 GP'],
  ['Light crossbow','1d8 Piercing','Ammunition (80/320; Bolt), Loading, Two-Handed','Slow','5 lb.','25 GP'],
  ['Heavy crossbow','1d10 Piercing','Ammunition (100/400; Bolt), Heavy, Loading, Two-Handed','Push','18 lb.','50 GP'],
  ['Handaxe','1d6 Slashing','Light, Thrown (20/60)','Vex','2 lb.','5 GP'],
  ['Warhammer','1d8 Bludgeoning','Versatile (1d10)','Push','5 lb.','15 GP'],
  ['Flail','1d8 Bludgeoning','—','Sap','2 lb.','10 GP'],
  ['Glaive','1d10 Slashing','Heavy, Reach, Two-Handed','Graze','6 lb.','20 GP'],
  ['Halberd','1d10 Slashing','Heavy, Reach, Two-Handed','Cleave','6 lb.','20 GP'],
  ['Club','1d4 Bludgeoning','Light','Slow','2 lb.','1 SP'],
  ['Greatclub','1d8 Bludgeoning','Two-Handed','Push','10 lb.','2 SP'],
  ['Light hammer','1d4 Bludgeoning','Light, Thrown (20/60)','Nick','2 lb.','2 GP'],
  ['Sickle','1d4 Slashing','Light','Nick','2 lb.','1 GP'],
  ['Dart','1d4 Piercing','Finesse, Thrown (20/60)','Vex','1/4 lb.','5 CP'],
  ['Sling','1d4 Bludgeoning','Ammunition (30/120; Bullet)','Slow','—','1 SP'],
  ['Lance','1d10 Piercing','Heavy, Reach, Two-Handed (unless mounted)','Topple','6 lb.','10 GP'],
  ['Maul','2d6 Bludgeoning','Heavy, Two-Handed','Topple','10 lb.','10 GP'],
  ['Morningstar','1d8 Piercing','—','Sap','4 lb.','15 GP'],
  ['Pike','1d10 Piercing','Heavy, Reach, Two-Handed','Push','18 lb.','5 GP'],
  ['Scimitar','1d6 Slashing','Finesse, Light','Nick','3 lb.','25 GP'],
  ['Trident','1d8 Piercing','Thrown (20/60), Versatile (1d10)','Topple','4 lb.','5 GP'],
  ['War pick','1d8 Piercing','Versatile (1d10)','Sap','2 lb.','5 GP'],
  ['Whip','1d4 Slashing','Finesse, Reach','Slow','3 lb.','2 GP'],
  ['Blowgun','1 Piercing','Ammunition (25/100; Needle), Loading','Vex','1 lb.','10 GP'],
  ['Hand crossbow','1d6 Piercing','Ammunition (30/120; Bolt), Light, Loading','Vex','3 lb.','75 GP'],
  ['Musket','1d12 Piercing','Ammunition (40/120; Bullet), Loading, Two-Handed','Slow','10 lb.','500 GP'],
  ['Pistol','1d10 Piercing','Ammunition (30/90; Bullet), Loading','Vex','3 lb.','250 GP']
].map(([name,damage,properties,mastery,weight,cost]) => ({
  name, category:'Weapons', summary:'The mastery property requires a feature that grants its use.',
  facts:[['Damage',damage],['Properties',properties],['Mastery',mastery],['Weight',weight],['Cost',cost]], source
}));

const gear = [
  {name:'Rope',aliases:['Rope, Hempen (50 feet)','Rope, Silk (50 feet)'],summary:'2024 rules list one Rope type. Tie a knot with a DC 10 Dexterity (Sleight of Hand) check; burst it with DC 20 Strength (Athletics).',facts:[['Weight','5 lb.'],['Cost','1 GP']]},
  {name:'Thieves’ Tools',summary:'Use with Dexterity to pick a lock or disarm a trap (DC 15 each).',facts:[['Weight','1 lb.'],['Cost','25 GP']]},
  {name:'Healer’s Kit',summary:'Ten uses. Expend one with a Utilize action to stabilize a creature at 0 HP without a Medicine check.',facts:[['Weight','3 lb.'],['Cost','5 GP']]},
  {name:'Torch',summary:'Burns for 1 hour; bright light 20 feet and dim light another 20 feet. Can deal 1 Fire damage on a hit.',facts:[['Weight','1 lb.'],['Cost','1 CP']]},
  {name:'Rations',summary:'Travel-ready food.',facts:[['Weight','2 lb.'],['Cost','5 SP']]},
  {name:'Backpack',summary:'Holds up to 30 lb. within 1 cubic foot.',facts:[['Weight','5 lb.'],['Cost','2 GP']]},
  {name:'Holy Symbol',summary:'A Cleric or Paladin can use an amulet, emblem, or reliquary as a spellcasting focus.',facts:[['Weight','Varies by form'],['Cost','5 GP']]},
  {name:'Component Pouch',summary:'Watertight pouch with compartments for the free material components of spells.',facts:[['Weight','2 lb.'],['Cost','25 GP']]}
].map(item => ({...item,category:'Adventuring gear',source}));

const instruments = [
  ['Bagpipes','30 GP','6 lb.'],['Drum','6 GP','3 lb.'],['Dulcimer','25 GP','10 lb.'],
  ['Flute','2 GP','1 lb.'],['Horn','3 GP','2 lb.'],['Lute','35 GP','2 lb.'],
  ['Lyre','30 GP','2 lb.'],['Pan flute','12 GP','2 lb.'],['Shawm','2 GP','1 lb.'],['Viol','30 GP','1 lb.']
].map(([name,cost,weight])=>({name,category:'Musical instrument',summary:'Use Charisma to play a known tune (DC 10) or improvise a song (DC 15).',facts:[['Cost',cost],['Weight',weight],['Ability','Charisma']],source}));

export const referenceEquipment = [
  ...armor, ...weapons, ...gear, ...instruments,
  {name:'Tinker’s Tools',category:'Artisan’s tools',summary:'Use Dexterity to assemble a temporary Tiny item from scrap (DC 20); it falls apart after 1 minute.',facts:[['Cost','50 GP'],['Weight','10 lb.'],['Ability','Dexterity']],source},
  {name:'Potion of Healing',category:'Magic item',summary:'Drink or administer to a creature within 5 feet as a Bonus Action; the drinker regains 2d4 + 2 HP.',facts:[['Weight','1/2 lb.'],['Cost','50 GP'],['Rarity','Common']],source}
];
