const guide = 'https://dungeonmister.com/guides/classes-subclasses-in-dnd-2024/';
const graveGuide = 'https://dungeonmister.com/guides/classes-in-dungeons-dragons/grave-domain-cleric-dnd-2024/';
const species = ['Aasimar', 'Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Goliath', 'Halfling', 'Human', 'Orc', 'Tiefling'];
const roleNames = { healing: 'Healing', arcane: 'Arcane magic', control: 'Battlefield control', frontline: 'Frontline', scouting: 'Scouting', social: 'Social skills', support: 'Support' };
const roleWeights = { healing: 2.1, arcane: 1.5, control: 1.3, frontline: 1, scouting: .9, social: .7, support: 1.5 };
const classes = [
  {name:'Artificer', icon:'⚙', kind:'caster', book:'Eberron', expansion:true, line:'The inventive problem solver', roles:{healing:.3,arcane:.55,control:.3,support:.9}, subs:[['Alchemist','Elixirs that bolster allies.',{healing:.35,support:.2},'Expansion'],['Armorer','Adaptable magical armor.',{frontline:.5},'Expansion'],['Artillerist','Arcane cannons and ranged force.',{arcane:.2},'Expansion'],['Battle Smith','A steel companion in the fight.',{frontline:.4,support:.2},'Expansion'],['Cartographer','Navigate and reposition the team.',{scouting:.35,support:.2},'Expansion','https://dungeonmister.com/guides/classes-in-dungeons-dragons/cartographer-artificer-dnd-2024/','Eberron'],['Reanimator','A strange companion and second chances.',{healing:.2},'Expansion','https://dungeonmister.com/guides/classes-in-dungeons-dragons/reanimator-artificer-dnd-2024/','Ravenloft']]},
  {name:'Barbarian', icon:'⚔', kind:'martial', line:'The unbreakable force', roles:{frontline:1}, subs:[['Path of the Berserker','Relentless offense.'],['Path of the Wild Heart','Adaptable primal power.'],['Path of the World Tree','Protect allies and control space.',{support:.5,control:.5}],['Path of the Zealot','Divine fury and survival.']]},
  {name:'Bard', icon:'♫', kind:'caster', line:'The story-changing voice', roles:{healing:.6,arcane:.6,control:.8,social:1,support:1}, subs:[['College of Dance','Mobile inspiration and teamwork.',{support:.2}],['College of Glamour','Charm and protective inspiration.',{support:.3,control:.2}],['College of Lore','Knowledge, skills, and magical answers.',{arcane:.3,control:.2}],['College of Valor','Inspire allies from the front.',{frontline:.4,support:.2}]]},
  {name:'Cleric', icon:'✥', kind:'caster', line:'The divine heart', roles:{healing:1,arcane:.3,control:.6,frontline:.4,support:.9}, subs:[['Life Domain','The strongest healing focus.',{healing:.5,support:.2}],['Light Domain','Radiant offense and protection.',{control:.2}],['Trickery Domain','Illusion, stealth, and misdirection.',{scouting:.4,control:.3}],['War Domain','Divine power in the thick of battle.',{frontline:.4,support:.2}],['Grave Domain','Guard the edge between life and death.',{healing:.25,control:.3,support:.2},'Expansion',graveGuide,'Ravenloft']]},
  {name:'Druid', icon:'☾', kind:'caster', line:'The wild-shaped guide', roles:{healing:.7,arcane:.5,control:1,scouting:.4,support:.6}, subs:[['Circle of the Land','Flexible spells for every landscape.',{arcane:.2,control:.2}],['Circle of the Moon','Wild Shape for front-line resilience.',{frontline:.7}],['Circle of the Sea','A storm around you.',{control:.4}],['Circle of the Stars','Flexible healing and cosmic guidance.',{healing:.35,support:.25}]]},
  {name:'Fighter', icon:'⚒', kind:'martial', line:'The steady weapon master', roles:{frontline:1}, subs:[['Battle Master','Tactics that help allies and control fights.',{control:.4,support:.3}],['Champion','Direct, reliable martial power.'],['Eldritch Knight','Weapons with a little arcane magic.',{arcane:.4}],['Psi Warrior','Protective psychic force.',{support:.3,control:.2}]]},
  {name:'Monk', icon:'◈', kind:'martial', line:'The focused whirlwind', roles:{frontline:.5,scouting:.6,control:.3}, subs:[['Warrior of Mercy','Heal allies while striking enemies.',{healing:.65,support:.55}],['Warrior of Shadow','Scout, vanish, and strike.',{scouting:.4,control:.2}],['Warrior of the Elements','Reach and elemental control.',{control:.6}],['Warrior of the Open Hand','Disrupt foes with precise strikes.',{control:.45,frontline:.2}]]},
  {name:'Paladin', icon:'✦', kind:'martial', line:'The sworn protector', roles:{frontline:1,healing:.45,support:.45,social:.5}, subs:[['Oath of the Ancients','Protect against hostile magic.',{support:.35}],['Oath of Devotion','Steadfast defense and clarity.',{support:.2}],['Oath of Glory','Lead with heroism and movement.',{social:.2}],['Oath of Vengeance','Hunt a chosen foe.']]},
  {name:'Ranger', icon:'➶', kind:'martial', line:'The guide beyond the road', roles:{scouting:1,healing:.25,control:.2}, subs:[['Beast Master','Fight beside an animal companion.'],['Fey Wanderer','Fey magic and social grace.',{social:.5,arcane:.2}],['Gloom Stalker','Ambush from the dark.',{scouting:.25}],['Hunter','Adapt to your prey.']]},
  {name:'Rogue', icon:'◇', kind:'martial', line:'The expert in the shadows', roles:{scouting:1,social:.3}, subs:[['Arcane Trickster','Clever magic and misdirection.',{arcane:.35,control:.2}],['Assassin','Fast, quiet eliminations.'],['Soulknife','Psychic tools and subtle teamwork.',{support:.2}],['Thief','Quick hands and flexible tools.']]},
  {name:'Sorcerer', icon:'✶', kind:'caster', line:'Magic from within', roles:{arcane:1,control:.8,social:.5}, subs:[['Aberrant Sorcery','Psionic magic and strange minds.',{control:.3}],['Clockwork Sorcery','Order, protection, and control.',{support:.4,control:.2}],['Draconic Sorcery','Elemental power and resilience.',{frontline:.2}],['Wild Magic Sorcery','Unpredictable surges of magic.']]},
  {name:'Warlock', icon:'✺', kind:'caster', line:'The pact-bound seeker', roles:{arcane:.65,control:.5,social:.7}, subs:[['Archfey Patron','Charm, tricks, and escape.',{control:.25}],['Celestial Patron','A healing touch from your patron.',{healing:.55,support:.35}],['Fiend Patron','Fiery power and survival.'],['Great Old One Patron','Unsettling psychic control.',{control:.35}]]},
  {name:'Wizard', icon:'✧', kind:'caster', line:'The prepared mind', roles:{arcane:1,control:1,support:.45}, subs:[['Abjurer','Ward and protect the party.',{support:.45}],['Diviner','Turn foresight into better outcomes.',{support:.4}],['Evoker','Shape destructive spells.'],['Illusionist','Creative deception and control.',{control:.35}]]}
];

// Additional official-book options listed in the Dungeon Mister 2024 class index.
// Entries are [name, short role summary, role bonuses, book, guide slug].
const moreSubclasses = {
  Bard: [
    ['College of Spirits','Channel spirits for unpredictable support and stories.',{support:.2,control:.15},'Ravenloft','college-of-spirits-bard-dnd-2024/'],
    ['College of the Moon','Draw on moonwells to heal allies and harm foes.',{healing:.35,support:.2},'Heroes of Faerun','college-of-the-moon-bard-dnd-2024/']
  ],
  Cleric: [
    ['Arcana Domain','Blend divine magic with knowledge of the arcane.',{arcane:.4,support:.2},'Arcana Unleashed','arcana-domain-cleric-dnd-2024/'],
    ['Knowledge Domain','Gather information through divine power and spellcraft.',{scouting:.3,support:.2},'Heroes of Faerun','knowledge-domain-cleric-dnd-2024/']
  ],
  Fighter: [
    ['Arcane Archer','Imbue ranged attacks with magical effects.',{control:.25,arcane:.2},'Arcana Unleashed','arcane-archer-fighter-dnd-2024/'],
    ['Banneret','Lead and support allies in battle.',{support:.4},'Heroes of Faerun','banneret-fighter-dnd-2024/']
  ],
  Monk: [
    ['Warrior of the Mystic Arts','Mix martial arts with spellcasting.',{arcane:.4,control:.25},'Arcana Unleashed','warrior-of-the-mystic-arts-monk-dnd-2024/']
  ],
  Paladin: [
    ['Oath of the Noble Genies','Call on elemental powers granted by noble genies.',{arcane:.2,control:.2},'Heroes of Faerun','oath-of-the-noble-genies-dnd-2024/']
  ],
  Ranger: [
    ['Hollow Warden','Invoke monstrous powers to aid the hunt.',{control:.2},'Ravenloft','hollow-warden-ranger-dnd-2024/'],
    ['Winter Walker','Draw on the cold of harsh northern lands.',{control:.2,frontline:.15},'Heroes of Faerun','winter-walker-ranger-dnd-2024/']
  ],
  Rogue: [
    ['Phantom','Use powers of the grave to stalk enemies.',{scouting:.2,control:.15},'Ravenloft','phantom-rogue-dnd-2024/'],
    ['Scion of the Three','Draw on the violent powers of the Dead Three.',{},'Heroes of Faerun','scion-of-the-three-rogue-dnd-2024/']
  ],
  Sorcerer: [
    ['Shadow Sorcery','Command darkness with power from the Shadowfell.',{control:.3,scouting:.2},'Ravenloft','shadow-sorcery-sorcerer-dd-2024-5-5e-subclass-optimisation-guide/'],
    ['Spellfire Sorcery','Protect allies with magic drawn from the Weave.',{support:.4},'Heroes of Faerun','spellfire-sorcerer-dnd-2024/']
  ],
  Warlock: [
    ['Undead Patron','Draw power from a lich, vampire, or other undead patron.',{control:.2},'Ravenloft','undead-patron-warlock-dnd-2024/'],
    ['Vestige Patron','Form a pact with a forgotten god and summon its vestige.',{support:.25},'Arcana Unleashed','vestige-patron-warlock-dnd-2024/']
  ],
  Wizard: [
    ['Bladesinger','Combine agile weapon fighting with wizard spells.',{frontline:.5},'Heroes of Faerun','bladesinger-wizard-dnd-2024/'],
    ['Conjurer','Focus on conjuration and summoned magic.',{control:.25},'Arcana Unleashed','conjurer-wizard-dnd-2024/'],
    ['Enchanter','Use enchantment to influence creatures.',{control:.3,social:.2},'Arcana Unleashed','enchanter-wizard-dnd-2024/'],
    ['Necromancer','Animate and command undead allies.',{control:.25,support:.15},'Arcana Unleashed','necromancer-wizard-dnd-2024/'],
    ['Transmuter','Transform matter with specialized transmutation magic.',{support:.2,control:.2},'Arcana Unleashed','transmuter-wizard-dnd-2024/']
  ]
};
for (const characterClass of classes) {
  for (const [name, summary, roles, book, slug] of moreSubclasses[characterClass.name] || []) {
    characterClass.subs.push([name, summary, roles, 'Expansion', `https://dungeonmister.com/guides/classes-in-dungeons-dragons/${slug}`, book]);
  }
}

for (const sub of classes[0].subs.slice(0,4)) {
  const slug = sub[0].toLowerCase().replaceAll(' ', '-');
  sub[4] = `https://dungeonmister.com/guides/classes-in-dungeons-dragons/${slug}-artificer-dnd-2024${slug === 'artillerist' ? '-guide' : ''}/`;
}

export {guide, graveGuide, species, roleNames, roleWeights, classes};
