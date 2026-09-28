// Curated summaries of the subclass features and spell milestones most useful during character selection.
export const subclassProgression = {
  'Cleric': {
    'Grave Domain': [
      [3, 'Circle of Mortality + Path to the Grave', 'Rescue downed allies efficiently and set up a vulnerable enemy for a decisive hit.'],
      [6, 'Sentinel at Death’s Door', 'Use your reaction to blunt a critical hit against a nearby ally.'],
      [17, 'Divine Reaper', 'Spread necromantic effects across enemies and gain a burst of healing when a creature falls.']
    ],
    'Life Domain': [
      [3, 'Disciple of Life + Preserve Life', 'Improve healing spells and spend Channel Divinity on a shared burst of healing.'],
      [6, 'Blessed Healer', 'Healing allies also restores a little health to you.'],
      [17, 'Supreme Healing', 'Healing dice from your healing spells and Channel Divinity use their highest results.']
    ],
    'Light Domain': [
      [3, 'Warding Flare + Radiance of the Dawn', 'Protect a target with a reaction and clear darkness while damaging nearby foes.'],
      [6, 'Improved Warding Flare', 'Recharge Warding Flare on a Short Rest and grant temporary hit points with it.'],
      [17, 'Corona of Light', 'Make enemies less likely to resist your fire and radiant spells.']
    ],
    'Trickery Domain': [
      [3, 'Blessing of the Trickster + Invoke Duplicity', 'Support stealth and cast through an illusory double.'],
      [6, 'Trickster’s Transposition', 'Swap places with your duplicate to reposition.'],
      [17, 'Improved Duplicity', 'Your duplicate helps allies land attacks and grants healing when it ends.']
    ],
    'War Domain': [
      [3, 'War Priest + Guided Strike', 'Add a bonus-action weapon attack or turn a near miss into a hit.'],
      [6, 'War God’s Blessing', 'Use Channel Divinity to cast Shield of Faith or Spiritual Weapon without Concentration.'],
      [17, 'Avatar of Battle', 'Resist bludgeoning, piercing, and slashing damage.']
    ]
  },
  'Monk': {
    'Warrior of Mercy': [
      [3, 'Hand of Healing + Hand of Harm', 'Spend Focus to heal a creature or add necrotic damage to a strike.'],
      [6, 'Physician’s Touch', 'Healing can end a condition; harmful strikes can poison their target.'],
      [11, 'Flurry of Healing and Harm', 'Fold healing or extra harm into your Flurry of Blows.'],
      [17, 'Hand of Ultimate Mercy', 'Bring a creature back from the dead once between Long Rests.']
    ],
    'Warrior of Shadow': [
      [3, 'Shadow Arts', 'Use Focus to create magical darkness and gain shadow-themed utility.'],
      [6, 'Shadow Step', 'Teleport between dim light and darkness, then strike with advantage.'],
      [11, 'Improved Shadow Step', 'Teleport farther and bring an ally with you.'],
      [17, 'Cloak of Shadows', 'Turn invisible in darkness and move through it with greater freedom.']
    ],
    'Warrior of the Elements': [
      [3, 'Elemental Attunement', 'Spend Focus to extend your reach and change your strikes to elemental damage.'],
      [6, 'Environmental Burst', 'Turn your elemental reach into an area attack.'],
      [11, 'Stride of the Elements', 'Gain elemental movement, including flight while your attunement lasts.'],
      [17, 'Elemental Epitome', 'Empower your attunement with stronger resistance, reach, and elemental effects.']
    ],
    'Warrior of the Open Hand': [
      [3, 'Open Hand Technique', 'Add a push, knockdown, or reaction-blocking effect to Flurry of Blows.'],
      [6, 'Wholeness of Body', 'Use a Bonus Action to heal yourself.'],
      [11, 'Fleet Step', 'Use Step of the Wind and still make a Bonus Action attack.'],
      [17, 'Quivering Palm', 'Set up a Focus-powered strike that can inflict a devastating internal vibration.']
    ]
  },
  'Bard': {
    'College of Dance': [
      [3, 'Dazzling Footwork', 'Make nimble unarmed strikes and improve your movement and defense.'],
      [6, 'Inspiring Movement', 'Let nearby allies reposition when you use Bardic Inspiration.'],
      [14, 'Tandem Footwork', 'Share your initiative and movement advantages with allies.']
    ],
    'College of Glamour': [
      [3, 'Beguiling Magic + Mantle of Inspiration', 'Charm or frighten through magic and rally allies with temporary hit points and movement.'],
      [6, 'Mantle of Majesty', 'Cast Command as a Bonus Action and regain the feature with higher-level slots.'],
      [14, 'Unbreakable Majesty', 'Force an attacker to pass a save or miss you.']
    ],
    'College of Lore': [
      [3, 'Bonus Proficiencies + Cutting Words', 'Broaden your skills and reduce an enemy’s attack, check, or damage roll.'],
      [6, 'Magical Discoveries', 'Prepare two spells from other class lists.'],
      [14, 'Peerless Skill', 'Add Bardic Inspiration to your own ability checks.']
    ],
    'College of Valor': [
      [3, 'Combat Inspiration + Martial Training', 'Improve allies’ attacks and gain armor, shield, and weapon training.'],
      [6, 'Extra Attack', 'Attack twice, or replace one attack with a cantrip.'],
      [14, 'Battle Magic', 'Cast a spell and make a Bonus Action weapon attack.']
    ]
  },
  'Druid': {
    'Circle of the Land': [
      [3, 'Circle Spells + Land’s Aid', 'Swap between biome-based spell lists and spend Wild Shape to heal allies or damage foes in an area.'],
      [6, 'Natural Recovery', 'Recover some spell slots during a Short Rest and cast a circle spell without a slot.'],
      [10, 'Nature’s Ward', 'Become immune to Poisoned and resist a damage type tied to your land.'],
      [14, 'Nature’s Sanctuary', 'Use Wild Shape to make the terrain hinder enemies around you.']
    ],
    'Circle of the Moon': [
      [3, 'Circle Forms + Circle Spells', 'Transform into sturdier combat forms and gain moon-themed spells.'],
      [6, 'Improved Circle Forms', 'Improve your Wild Shape attacks and resilience.'],
      [10, 'Moonlight Step', 'Teleport as a Bonus Action while in Wild Shape.'],
      [14, 'Lunar Form', 'Add radiant damage to Wild Shape attacks and carry an ally when you teleport.']
    ],
    'Circle of the Sea': [
      [3, 'Circle Spells + Wrath of the Sea', 'Gain sea magic and a moving aura that damages and pushes nearby enemies.'],
      [6, 'Aquatic Affinity', 'Expand your aura and gain a swimming speed.'],
      [10, 'Stormborn', 'Fly while your sea aura is active and resist cold, lightning, and thunder.'],
      [14, 'Oceanic Gift', 'Manifest your sea aura around yourself and a willing ally.']
    ],
    'Circle of the Stars': [
      [3, 'Star Map + Starry Form', 'Use your map to guide spellcasting and take an archer, chalice, or dragon constellation form.'],
      [6, 'Cosmic Omen', 'Use a roll from your star map to help or hinder a creature’s d20 test.'],
      [10, 'Twinkling Constellations', 'Improve your constellation forms and switch forms more freely.'],
      [14, 'Full of Stars', 'Gain resistance to bludgeoning, piercing, and slashing damage while in Starry Form.']
    ]
  },
  'Ranger': {
    'Beast Master': [
      [3, 'Primal Companion', 'Fight beside a beast companion that acts with your commands.'],
      [7, 'Exceptional Training', 'Improve the companion’s attacks and let it Dash, Disengage, or Help more flexibly.'],
      [11, 'Bestial Fury', 'Let your companion attack twice or use a special area attack.'],
      [15, 'Share Spells', 'Extend qualifying self-targeted spells to your companion.']
    ],
    'Fey Wanderer': [
      [3, 'Dreadful Strikes + Fey Wanderer Spells', 'Add psychic damage and gain fey magic plus a Wisdom boost to Charisma checks.'],
      [7, 'Beguiling Twist', 'Turn charm or fear effects into a chance to redirect control at another creature.'],
      [11, 'Fey Reinforcements', 'Call a fey ally without Concentration and improve your charm defenses.'],
      [15, 'Misty Wanderer', 'Teleport with Misty Step and bring a willing ally.']
    ],
    'Gloom Stalker': [
      [3, 'Dreadful Ambusher + Gloom Stalker Spells', 'Improve your opening turn and gain stealth and fear themed spells.'],
      [7, 'Umbral Sight', 'Gain darkvision and disappear from creatures that rely on darkvision in darkness.'],
      [11, 'Stalker’s Flurry', 'Turn a missed attack into another chance to hit.'],
      [15, 'Shadowy Dodge', 'Use a reaction to foil an attack and teleport away.']
    ],
    'Hunter': [
      [3, 'Hunter’s Prey', 'Choose a damage feature for tougher individual foes or groups.'],
      [7, 'Defensive Tactics', 'Choose a defense against opportunity attacks or repeated hits.'],
      [11, 'Superior Hunter’s Prey', 'Add a second target or stronger effect to your chosen prey feature.'],
      [15, 'Superior Defense', 'Use a reaction to resist a damage type that just hit you.']
    ]
  },
  'Artificer': {
    'Alchemist': [[3,'Experimental Elixir','Brew a random restorative or tactical potion.'],[5,'Alchemical Savant','Improve healing and damage from your alchemical spells.'],[9,'Restorative Reagents','Your elixirs grant temporary hit points and you gain restorative magic.'],[15,'Chemical Mastery','Resist acid and poison, and gain potent restorative spells.']],
    'Armorer': [[3,'Arcane Armor','Choose a Guardian model for close protection or Infiltrator model for stealth and ranged attacks.'],[5,'Extra Attack','Attack twice, with armor model effects shaping your tactics.'],[9,'Armor Modifications','Add more infusions to your armor and its components.'],[15,'Perfected Armor','Improve your armor model’s signature combat feature.']],
    'Artillerist': [[3,'Eldritch Cannon','Create a Force Ballista, Flamethrower, or Protector for the party.'],[5,'Arcane Firearm','Add force to your artificer spells through a specialized focus.'],[9,'Explosive Cannon','Improve the cannon and make it explode when needed.'],[15,'Fortified Position','Create two cannons and gain cover near them.']],
    'Battle Smith': [[3,'Steel Defender + Battle Ready','Gain a companion that protects allies and use Intelligence with magic weapons.'],[5,'Extra Attack','Attack twice alongside your defender.'],[9,'Arcane Jolt','Add force damage to hits or restore an ally’s Hit Points.'],[15,'Improved Defender','Improve the defender’s protection and Arcane Jolt.']]
  },
  'Barbarian': {
    'Path of the Berserker': [[3,'Frenzy','Trade precision for extra damage while your Rage is active.'],[6,'Mindless Rage','Resist charm and fear while raging.'],[10,'Retaliation','Answer nearby attackers with a reaction attack.'],[14,'Intimidating Presence','Frighten nearby enemies with your force of will.']],
    'Path of the Wild Heart': [[3,'Animal Speaker + Rage of the Wilds','Speak with animals and choose a rage benefit such as resilience, speed, or ally support.'],[6,'Aspect of the Wilds','Gain a lasting animal-inspired exploration benefit.'],[10,'Nature Speaker','Draw on nature magic for utility and recovery.'],[14,'Power of the Wilds','Improve your chosen animal aspect while raging.']],
    'Path of the World Tree': [[3,'Vitality of the Tree','Gain temporary durability and share healing during Rage.'],[6,'Branches of the Tree','Pull or reposition creatures with spectral branches.'],[10,'Battering Roots','Extend your reach and control a wider space.'],[14,'Travel along the Tree','Teleport yourself and allies through the World Tree.']],
    'Path of the Zealot': [[3,'Divine Fury + Warrior of the Gods','Add radiant or necrotic damage and recover better from magical healing.'],[6,'Fanatical Focus','Reroll a failed save while raging.'],[10,'Zealous Presence','Rally nearby allies with a burst of combat focus.'],[14,'Rage of the Gods','Gain a powerful divine battle form while raging.']]
  },
  'Fighter': {
    'Battle Master': [[3,'Combat Superiority','Use maneuver dice for tactical attacks and team support.'],[7,'Know Your Enemy','Read a creature’s combat strengths and weaknesses.'],[10,'Improved Combat Superiority','Increase your maneuver die.'],[15,'Relentless','Keep a maneuver available when you run out of dice.'],[18,'Ultimate Combat Superiority','Use your largest maneuver die.']],
    'Champion': [[3,'Improved Critical + Remarkable Athlete','Score critical hits more often and improve physical checks.'],[7,'Additional Fighting Style','Add another fighting style to your toolkit.'],[10,'Heroic Warrior','Regain Heroic Inspiration during combat.'],[15,'Superior Critical','Expand your critical-hit range further.'],[18,'Survivor','Recover Hit Points and stay effective when badly hurt.']],
    'Eldritch Knight': [[3,'Spellcasting + Weapon Bond','Combine weapon training with a small wizard spell selection and bonded weapons.'],[7,'War Magic','Follow a cantrip with a weapon attack.'],[10,'Eldritch Strike','Make foes you hit more vulnerable to your spells.'],[15,'Arcane Charge','Teleport when using Action Surge.'],[18,'Improved War Magic','Cast a spell and make a weapon attack in the same action.']],
    'Psi Warrior': [[3,'Psionic Power','Spend Psionic Energy dice to protect allies, move objects, or add force damage.'],[7,'Telekinetic Adept','Fly briefly and move creatures with your psionic force.'],[10,'Guarded Mind','Gain resistance to psychic damage and protect your mind.'],[15,'Bulwark of Force','Extend your protective force to nearby allies.'],[18,'Telekinetic Master','Use telekinesis and combine it with attacks.']]
  },
  'Paladin': {
    'Oath of the Ancients': [[3,'Nature’s Wrath + Oath Spells','Restrain foes with nature and gain spells tied to preserving life.'],[7,'Aura of Warding','Reduce spell damage to you and nearby allies.'],[15,'Undying Sentinel','Survive a lethal blow and resist aging.'],[20,'Elder Champion','Transform into an empowered nature guardian.']],
    'Oath of Devotion': [[3,'Sacred Weapon + Oath Spells','Make your weapon shine with divine accuracy and gain protective magic.'],[7,'Aura of Devotion','Protect nearby allies from being Charmed.'],[15,'Smite of Protection','Turn your Divine Smite into a protective ward.'],[20,'Holy Nimbus','Surround yourself with a radiant aura that hinders foes.']],
    'Oath of Glory': [[3,'Inspiring Smite + Peerless Athlete','Share healing after a smite and improve athletic feats.'],[7,'Aura of Alacrity','Increase nearby allies’ speed.'],[15,'Glorious Defense','Use a reaction to improve a nearby creature’s Armor Class and counterattack.'],[20,'Living Legend','Become unusually accurate, resilient, and persuasive.']],
    'Oath of Vengeance': [[3,'Vow of Enmity + Abjure Enemy','Focus on one foe and frighten enemies with divine judgment.'],[7,'Relentless Avenger','Move after opportunity attacks and pursue fleeing targets.'],[15,'Soul of Vengeance','Counterattack the target of your Vow.'],[20,'Avenging Angel','Gain flight and frighten foes with your presence.']]
  },
  'Rogue': {
    'Arcane Trickster': [[3,'Spellcasting + Mage Hand Legerdemain','Blend illusion and enchantment magic with precise sleight of hand.'],[9,'Magical Ambush','Make your spells harder to resist when you are hidden.'],[13,'Versatile Trickster','Distract a foe to set up Sneak Attack.'],[17,'Spell Thief','Steal a spell’s effect and turn it against its caster.']],
    'Assassin': [[3,'Assassinate','Gain advantages when you begin a fight and strike a surprised target.'],[9,'Infiltration Expertise','Create and maintain a false identity.'],[13,'Envenom Weapons','Improve your poisons and apply them more efficiently.'],[17,'Death Strike','Make a decisive hit against a surprised foe.']],
    'Soulknife': [[3,'Psionic Power + Psychic Blades','Use psychic energy for skill support and conjure blades that leave no trace.'],[9,'Psychic Teleportation','Throw a psychic blade and teleport to its location.'],[13,'Psychic Veil','Become invisible for infiltration or escape.'],[17,'Rend Mind','Stun a creature with a powerful psychic strike.']],
    'Thief': [[3,'Fast Hands + Second-Story Work','Use objects quickly and climb or jump more effectively.'],[9,'Supreme Sneak','Improve stealth and make movement while hidden easier.'],[13,'Use Magic Device','Use magical items with unusual flexibility.'],[17,'Thief’s Reflexes','Take an additional turn early in combat.']]
  },
  'Sorcerer': {
    'Aberrant Sorcery': [[3,'Psionic Spells + Telepathic Speech','Gain mind-themed spells and communicate telepathically.'],[6,'Psionic Sorcery','Cast selected spells with sorcery points and subtle components.'],[14,'Revelation in Flesh','Choose physical transformations fueled by sorcery points.'],[18,'Warping Implosion','Teleport and damage creatures in a spatial burst.']],
    'Clockwork Sorcery': [[3,'Clockwork Spells + Restore Balance','Gain order-themed magic and cancel advantage or disadvantage.'],[6,'Bastion of Law','Spend sorcery points to reduce incoming damage.'],[14,'Trance of Order','Make d20 tests more reliable for a short time.'],[18,'Clockwork Cavalcade','Restore allies and repair or disable nearby objects.']],
    'Draconic Sorcery': [[3,'Draconic Resilience','Gain tougher defenses and a draconic presence.'],[6,'Elemental Affinity','Add elemental damage and gain matching resistance.'],[14,'Dragon Wings','Manifest a flying dragon-like form.'],[18,'Draconic Presence','Overawe or frighten nearby creatures.']],
    'Wild Magic Sorcery': [[3,'Wild Magic Surge + Tides of Chaos','Bend luck and invite unpredictable magic surges.'],[6,'Bend Luck','Spend sorcery points to alter another creature’s d20 result.'],[14,'Controlled Chaos','Choose the surge result more reliably.'],[18,'Tamed Surge','Regain Tides of Chaos and influence wild surges.']]
  },
  'Warlock': {
    'Archfey Patron': [[3,'Archfey Spells + Fey Presence','Gain fey magic and charm or frighten creatures around you.'],[6,'Misty Escape','Teleport away and briefly turn invisible when harmed.'],[10,'Beguiling Defenses','Resist charm and reflect it toward a foe.'],[14,'Dark Delirium','Trap a creature in a fey illusion.']],
    'Celestial Patron': [[3,'Celestial Spells + Healing Light','Gain radiant magic and a pool of bonus-action healing.'],[6,'Radiant Soul','Add radiant damage and gain resistance.'],[10,'Celestial Resilience','Grant temporary hit points to yourself and allies.'],[14,'Searing Vengeance','Rise from a near-fatal blow in radiant fire.']],
    'Fiend Patron': [[3,'Fiend Spells + Dark One’s Blessing','Gain destructive magic and temporary hit points when foes fall.'],[6,'Dark One’s Own Luck','Add a bonus to an ability check or saving throw.'],[10,'Fiendish Resilience','Choose a damage resistance after a rest.'],[14,'Hurl Through Hell','Send a target briefly through a punishing fiendish vision.']],
    'Great Old One Patron': [[3,'Awakened Mind + Psychic Spells','Communicate telepathically and gain mind-bending spells.'],[6,'Clairvoyant Combatant','Read thoughts to gain combat advantages against a creature.'],[10,'Thought Shield','Resist psychic damage and reflect it.'],[14,'Create Thrall','Impose a lasting telepathic bond on a creature.']]
  },
  'Wizard': {
    'Abjurer': [[3,'Abjuration Savant + Arcane Ward','Learn defensive magic and absorb damage with a ward.'],[6,'Projected Ward','Use your ward to protect an ally.'],[10,'Spell Resistance','Gain resistance to spell damage and advantage against spell saves.'],[14,'Spell Breaker','Improve your abjuration spells and restore health when dispelling magic.']],
    'Diviner': [[3,'Divination Savant + Portent','Learn divination magic and replace d20 rolls with foreseen results.'],[6,'Expert Divination','Recover spell energy while casting divination magic.'],[10,'The Third Eye','Choose enhanced sight or perception.'],[14,'Greater Portent','Roll and store more foreseen results.']],
    'Evoker': [[3,'Evocation Savant + Potent Cantrip','Improve damaging magic, including cantrips that miss.'],[6,'Sculpt Spells','Protect chosen allies from your evocation areas.'],[10,'Empowered Evocation','Add Intelligence to one damage roll of an evocation spell.'],[14,'Overchannel','Maximize the damage of a lower-level spell.']],
    'Illusionist': [[3,'Illusion Savant + Improved Minor Illusion','Learn illusion magic and make a more versatile minor illusion.'],[6,'Malleable Illusions','Reshape ongoing illusions.'],[10,'Illusory Self','Create a duplicate to foil an attack.'],[14,'Illusory Reality','Make one nonmagical object in an illusion real briefly.']]
  }
};

export const graveDomainSpells = [
  [3, ['Detect Evil and Good', 'False Life', 'Gentle Repose', 'Ray of Enfeeblement', 'Spare the Dying']],
  [5, ['Revivify', 'Vampiric Touch']],
  [7, ['Blight', 'Death Ward']],
  [9, ['Dispel Evil and Good', 'Raise Dead']]
];

export const clericDomains = {
  'Life Domain': [[3,['Aid','Bless','Cure Wounds','Lesser Restoration']],[5,['Mass Healing Word','Revivify']],[7,['Aura of Life','Death Ward']],[9,['Greater Restoration','Mass Cure Wounds']]],
  'Light Domain': [[3,['Burning Hands','Faerie Fire','Scorching Ray','See Invisibility']],[5,['Daylight','Fireball']],[7,['Arcane Eye','Wall of Fire']],[9,['Flame Strike','Scrying']]],
  'Trickery Domain': [[3,['Charm Person','Disguise Self','Invisibility','Pass without Trace']],[5,['Hypnotic Pattern','Nondetection']],[7,['Confusion','Dimension Door']],[9,['Dominate Person','Modify Memory']]],
  'War Domain': [[3,['Guiding Bolt','Magic Weapon','Shield of Faith','Spiritual Weapon']],[5,['Crusader’s Mantle','Spirit Guardians']],[7,['Fire Shield','Freedom of Movement']],[9,['Hold Monster','Steel Wind Strike']]]
};

export const spellNotes = {
  'Detect Evil and Good': 'Sense nearby creatures such as celestials, fiends, or undead.',
  'False Life': 'Gain temporary hit points to buffer incoming damage.',
  'Gentle Repose': 'Protect a corpse from decay and delay effects that depend on time since death.',
  'Ray of Enfeeblement': 'Weaken a creature’s weapon attacks with a necrotic ray.',
  'Spare the Dying': 'Stabilize a creature at 0 Hit Points from a short distance.',
  'Revivify': 'Return a creature that died within the last minute to life with 1 Hit Point.',
  'Vampiric Touch': 'Damage a nearby creature and regain Hit Points from the harm dealt.',
  'Blight': 'Deal heavy necrotic damage to a creature.',
  'Death Ward': 'Protect a creature from dropping to 0 Hit Points once.',
  'Dispel Evil and Good': 'Ward yourself against extraplanar creatures and help banish them.',
  'Raise Dead': 'Restore a creature that has been dead no longer than 10 days.',
  'Aid': 'Raise the current and maximum Hit Points of several allies.',
  'Lesser Restoration': 'End one disease or a condition such as blindness or paralysis.',
  'Spiritual Weapon': 'Create a floating weapon that attacks with a Bonus Action.',
  'Spirit Guardians': 'Surround yourself with spirits that hinder foes and damage those nearby.',
  'Mass Healing Word': 'Restore a small amount of Hit Points to several allies at range.',
  'Banishment': 'Send a creature to another plane temporarily.',
  'Aura of Life': 'Protect nearby allies from necrotic harm and improve recovery from 0 Hit Points.',
  'Greater Restoration': 'Remove a severe magical or physical affliction.',
  'Mass Cure Wounds': 'Restore Hit Points to several allies in an area.'
};

export const clericSpellPlan = [
  [1, '1st-level spells', ['Bless', 'Healing Word']],
  [3, '2nd-level spells', ['Aid', 'Lesser Restoration', 'Spiritual Weapon']],
  [5, '3rd-level spells', ['Revivify', 'Spirit Guardians', 'Mass Healing Word']],
  [7, '4th-level spells', ['Death Ward', 'Banishment', 'Aura of Life']],
  [9, '5th-level spells', ['Greater Restoration', 'Mass Cure Wounds']]
];

// Sample picks at the first character level each spell level becomes available.
export const spellPlans = {
  Bard: [[1,['Dissonant Whispers','Healing Word']],[3,['Invisibility','Suggestion']],[5,['Dispel Magic','Hypnotic Pattern']],[7,['Dimension Door','Greater Invisibility']],[9,['Hold Monster','Synaptic Static']]],
  Druid: [[1,['Entangle','Goodberry']],[3,['Moonbeam','Pass without Trace']],[5,['Call Lightning','Conjure Animals']],[7,['Polymorph','Wall of Fire']],[9,['Greater Restoration','Wall of Stone']]],
  Ranger: [[2,['Goodberry','Hunter’s Mark']],[5,['Pass without Trace','Spike Growth']],[9,['Conjure Animals','Lightning Arrow']],[13,['Freedom of Movement','Locate Creature']],[17,['Steel Wind Strike','Swift Quiver']]],
  Paladin: [[2,['Bless','Shield of Faith']],[5,['Aid','Find Steed']],[9,['Aura of Vitality','Revivify']],[13,['Aura of Life','Find Greater Steed']],[17,['Circle of Power','Destructive Wave']]],
  Sorcerer: [[1,['Magic Missile','Shield']],[3,['Misty Step','Scorching Ray']],[5,['Counterspell','Fireball']],[7,['Banishment','Polymorph']],[9,['Hold Monster','Telekinesis']]],
  Warlock: [[1,['Armor of Agathys','Hex']],[3,['Darkness','Misty Step']],[5,['Counterspell','Hunger of Hadar']],[7,['Banishment','Shadow of Moil']],[9,['Hold Monster','Synaptic Static']]],
  Wizard: [[1,['Mage Armor','Shield']],[3,['Misty Step','Web']],[5,['Counterspell','Fireball']],[7,['Dimension Door','Polymorph']],[9,['Wall of Force','Teleportation Circle']]],
  Artificer: [[1,['Cure Wounds','Faerie Fire']],[5,['Aid','Heat Metal']],[9,['Haste','Revivify']],[13,['Freedom of Movement','Stone Shape']],[17,['Greater Restoration','Wall of Stone']]]
};

Object.assign(subclassProgression.Artificer, {
  Cartographer: [
    [3, 'Tools of the Trade + Cartographer Spells', 'Gain mapmaking tools, faster scroll scribing, and exploration spells.'],
    [3, 'Adventurer’s Atlas + Mapping Magic', 'Share maps that help allies coordinate; cast Faerie Fire without a slot and teleport short distances.'],
    [5, 'Guided Precision', 'Improve qualifying spell damage and hold concentration on Faerie Fire when hit.'],
    [9, 'Ingenious Movement', 'Pair Flash of Genius with a short teleport for you or an ally.'],
    [15, 'Superior Atlas', 'Gain a free Find the Path casting; map holders can avoid dropping when reduced to 0 Hit Points.']
  ],
  Reanimator: [
    [3, 'Reanimator Spells + Reanimator’s Skill Set', 'Gain death-themed spells and Jolt to Life: revive a nearby ally while harming nearby foes.'],
    [3, 'Reanimated Companion', 'Command a stitched companion that can protect allies and deliver attacks.'],
    [5, 'Strange Modifications', 'Improve selected spell damage or cast spells from your companion’s space.'],
    [9, 'Improved Reanimation + Macabre Modifications', 'Strengthen its death burst and choose a new set of companion adaptations.'],
    [15, 'Refined Reanimation', 'Cast Raise Dead without a slot once per Long Rest and choose another companion modification.']
  ]
});

subclassProgression.Wizard.Necromancer = [
  [3, 'Necromancy Savant + Necromancy Spellbook', 'Gain more necromancy spells, an undead familiar option, necrotic resistance, and healing for your undead when you cast necromancy spells.'],
  [6, 'Grave Power + Undead Thralls', 'Push necrotic magic past resistance and raise stronger undead through Animate Dead.'],
  [10, 'Harvest Undead', 'Draw life from an undead ally when you are badly hurt.'],
  [14, 'Death’s Master', 'Bolster undead allies with temporary hit points and trigger a burst when an undead creature falls.']
];

export const subclassGuideLinks = {
  Artificer: 'https://dungeonmister.com/guides/classes-in-dungeons-dragons/artificer-subclasses-dnd-2024/',
  Bard:'https://dungeonmister.com/guides/classes-in-dungeons-dragons/bard-subclass-guide-for-dnd-2024/',
  Cleric:'https://dungeonmister.com/guides/classes-in-dungeons-dragons/cleric-subclass-guide-for-dd-2024/',
  Druid:'https://dungeonmister.com/guides/classes-in-dungeons-dragons/druid-subclass-guide-dnd-2024/',
  Ranger:'https://dungeonmister.com/guides/classes-in-dungeons-dragons/ranger-subclass-guide-for-dnd-2024/'
};

Object.assign(spellNotes, {
  'Dissonant Whispers':'Deal psychic damage and potentially force a target to flee, provoking opportunity attacks.',
  'Invisibility':'Make a creature unseen until it attacks or casts a spell.', 'Suggestion':'Magically persuade a creature to follow a reasonable course of action.',
  'Dispel Magic':'End a spell affecting a creature, object, or area.', 'Hypnotic Pattern':'Dazzle creatures in an area, potentially charming and incapacitating them.',
  'Dimension Door':'Teleport yourself and one nearby creature a long distance.', 'Greater Invisibility':'Make a creature invisible without ending the spell when it attacks.',
  'Hold Monster':'Paralyze a creature that fails its saving throw.', 'Synaptic Static':'Blast an area with psychic damage and disrupt affected creatures.',
  'Entangle':'Cause plants to restrain creatures in an area.', 'Goodberry':'Create berries that provide a little nourishment and healing.',
  'Moonbeam':'Create a column of light that damages creatures entering or starting there.', 'Pass without Trace':'Help nearby allies move quietly and leave no tracks.',
  'Call Lightning':'Call down repeated lightning strikes over an area.', 'Conjure Animals':'Summon nature spirits in animal forms to fight alongside you.',
  'Polymorph':'Transform a creature into a beast, temporarily replacing its capabilities.', 'Wall of Fire':'Create a wall of flame that damages creatures near it.',
  'Wall of Stone':'Raise a durable stone barrier to reshape the battlefield.', 'Hunter’s Mark':'Mark a target to deal extra weapon damage and track it.',
  'Spike Growth':'Cover an area in hidden spikes that hinder and injure movement.', 'Lightning Arrow':'Turn a weapon shot into a burst of lightning.',
  'Freedom of Movement':'Protect a creature from many movement-restricting effects.', 'Locate Creature':'Sense the direction of a familiar or nearby creature.',
  'Steel Wind Strike':'Teleport between several targets while making magical attacks.', 'Swift Quiver':'Create magical ammunition and make additional ranged attacks.',
  'Find Steed':'Summon a loyal supernatural mount.', 'Aura of Vitality':'Create a healing aura that can restore allies over time.',
  'Find Greater Steed':'Summon a powerful supernatural mount.', 'Circle of Power':'Help nearby allies resist magic and reduce spell damage.',
  'Destructive Wave':'Release a burst that damages and can knock down nearby creatures.', 'Magic Missile':'Fire darts of force that reliably strike chosen targets.',
  'Scorching Ray':'Make several ranged attacks with fiery rays.', 'Fireball':'Detonate a burst of fire that damages creatures in a large area.',
  'Telekinesis':'Move or restrain creatures and objects with magical force.', 'Armor of Agathys':'Gain temporary Hit Points and punish melee attackers.',
  'Hex':'Curse a creature to take extra damage from your attacks.', 'Hunger of Hadar':'Create alien darkness that harms and hinders creatures inside.',
  'Shadow of Moil':'Shroud yourself in shadow that obscures and punishes nearby attackers.', 'Mage Armor':'Improve a willing creature’s Armor Class when it is unarmored.',
  'Web':'Fill an area with sticky strands that can restrain creatures.', 'Wall of Force':'Create an invisible barrier that blocks passage and many effects.',
  'Teleportation Circle':'Create a portal to a permanent teleportation circle.', 'Cure Wounds':'Restore Hit Points to a creature you touch.',
  'Faerie Fire':'Outline creatures, making them easier to see and hit.', 'Heat Metal':'Heat a metal object to harm its holder.',
  'Haste':'Accelerate an ally, improving movement, defense, and action options.', 'Stone Shape':'Reshape a section of stone into a useful form.',
  'Bless':'Bolster up to three allies’ attacks and saving throws.', 'Shield of Faith':'Give a creature a temporary bonus to Armor Class.',
  'Misty Step':'Teleport a short distance as a Bonus Action.', 'Counterspell':'Interrupt a creature while it casts a spell.',
  'Darkness':'Create magical darkness that blocks ordinary sight.', 'Daylight':'Fill an area with bright light that dispels some magical darkness.',
  'Arcane Eye':'Create an invisible magical sensor for remote scouting.', 'Flame Strike':'Call down a column of fire and radiant energy.',
  'Scrying':'Observe a creature or place remotely with a magical sensor.', 'Charm Person':'Make a humanoid regard you as a friendly acquaintance.',
  'Disguise Self':'Change your appearance for the spell’s duration.', 'Nondetection':'Hide a creature or object from divination magic.',
  'Confusion':'Disorient creatures in an area, limiting their actions.', 'Dominate Person':'Control a humanoid’s actions after it fails a saving throw.',
  'Modify Memory':'Reshape part of a creature’s memory.', 'Guiding Bolt':'Deal radiant damage and help the next attack against the target hit.',
  'Magic Weapon':'Make a weapon magical and improve its attacks.', 'Crusader’s Mantle':'Surround allies with an aura that empowers their weapon hits.',
  'Fire Shield':'Protect yourself with fire or chill that harms attackers.', 'See Invisibility':'See invisible creatures and objects nearby.',
  'Burning Hands':'Send a short cone of flame that damages creatures in front of you.', 'Scorching Ray':'Make several ranged attacks with fiery rays.',
  'Daylight':'Fill an area with bright light that dispels some magical darkness.', 'Arcane Eye':'Create an invisible magical sensor for remote scouting.',
  'Flame Strike':'Call down a column of fire and radiant energy.', 'Scrying':'Observe a creature or place remotely with a magical sensor.',
  'Charm Person':'Make a humanoid regard you as a friendly acquaintance.', 'Disguise Self':'Change your appearance for the spell’s duration.',
  'Nondetection':'Hide a creature or object from divination magic.', 'Confusion':'Disorient creatures in an area, limiting their actions.',
  'Dominate Person':'Control a humanoid’s actions after it fails a saving throw.', 'Modify Memory':'Reshape part of a creature’s memory.',
  'Guiding Bolt':'Deal radiant damage and help the next attack against the target hit.', 'Magic Weapon':'Make a weapon magical and improve its attacks.',
  'Spiritual Weapon':'Create a floating weapon that attacks with a Bonus Action.', 'Crusader’s Mantle':'Empower allies’ weapon attacks with radiant damage.',
  'Steel Wind Strike':'Teleport between several targets while making magical attacks.', 'Freedom of Movement':'Protect a creature from many movement-restricting effects.',
  'Hold Monster':'Paralyze a creature that fails its saving throw.', 'Lesser Restoration':'End a disease or a condition such as blindness or paralysis.',
  'Mass Healing Word':'Restore a little Hit Points to several allies at range.', 'Cure Wounds':'Restore Hit Points to a creature you touch.',
  'Shield':'Gain a sudden defensive ward that can turn aside an attack.', 'Suggestion':'Magically persuade a creature to follow a reasonable course of action.'
});

export function detailsFor(className, subclassName) {
  const options = subclassProgression[className] || {};
  const key = Object.keys(options).find(name=>name.toLowerCase().replace(/\b(?:of|the)\b/g,'').replace(/[^a-z0-9]/g,'') === subclassName.toLowerCase().replace(/\b(?:of|the)\b/g,'').replace(/[^a-z0-9]/g,''));
  return options[key] || [];
}

// Original selection notes checked against every expansion's catalog source on 2026-09-28.
// Keep these offline; scan-guides.mjs refreshes the source cache for editorial review.
Object.assign(subclassProgression.Artificer, {
  Alchemist: [[3,'Experimental Elixir + Tools of the Trade','Brew restorative or tactical elixirs and craft potions faster.'],[5,'Alchemical Savant','Boost qualifying spell damage and healing.'],[9,'Restorative Reagents','Gain free uses of Lesser Restoration.'],[15,'Chemical Mastery','Gain acid and poison protection, stronger alchemical damage, and potion-making magic.']],
  Armorer: [[3,'Arcane Armor + Armor Model','Use Intelligence with your armor weapons. Choose Dreadnaught, Guardian, or Infiltrator.'],[5,'Extra Attack','Make two attacks with your chosen armor weapons.'],[9,'Improved Armorer','Gain another armor plan, an extra created item, and stronger armor weapons.'],[15,'Perfected Armor','Improve your model with greater reach, protective reactions, or flight.']],
  Artillerist: [[3,'Eldritch Cannon + Tools of the Trade','Switch your cannon between ranged damage, a flame cone, and temporary hit points.'],[5,'Arcane Firearm','Boost a spell damage roll through your firearm.'],[9,'Explosive Cannon','Strengthen your cannon and detonate it as a reaction.'],[15,'Fortified Position','Use two cannons and shelter nearby allies with half cover.']],
  'Battle Smith': [[3,'Battle Ready + Steel Defender','Attack using Intelligence and command a protective construct.'],[5,'Extra Attack','Attack twice, with an option to have your defender make the extra attack.'],[9,'Arcane Jolt','Add damage or healing when a qualifying attack hits.'],[15,'Improved Defender','Strengthen Arcane Jolt and your defender’s protective reaction.']]
});
Object.assign(subclassProgression.Bard, {
  'College of Spirits': [[3,'Channeler + Spirits from Beyond','Gain Guidance and channel spirits alongside Bardic Inspiration or choose a spirit separately.'],[6,'Empowered Channeling','Improve spell damage and healing; your Spirit Guardians can also protect allies.'],[14,'Mystical Connection','Roll twice for spirits, giving you more control over the result.']],
  'College of the Moon': [[3,'Moon’s Inspiration + Primal Lore','Teleport and turn invisible when inspiring; spend inspiration to enhance healing. Gain a druid cantrip.'],[6,'Blessing of Moonlight','Use an enhanced Moonbeam that can heal allies as it harms enemies.'],[14,'Eventide’s Splendor','Share teleportation and invisibility with inspired allies, and improve healing.']]
});
Object.assign(subclassProgression.Cleric, {
  'Arcana Domain': [[3,'Modify Magic + Student of Arcana','Gain wizard cantrips and arcane skills; modify spells to bolster allies or challenge enemy saves.'],[6,'Dispelling Recovery','Combine healing with a free Dispel Magic casting.'],[17,'Magical Mastery','Expand your repertoire with high-level wizard spells.']],
  'Knowledge Domain': [[3,'Blessings of Knowledge + Mind Magic','Gain knowledge expertise; spend Channel Divinity on qualifying domain divinations.'],[6,'Unfettered Mind','Communicate telepathically and gain Intelligence saving throw proficiency.'],[17,'Divine Foreknowledge','Gain a prolonged advantage on attacks, checks, and saving throws.']],
  'Grave Domain': [[3,'Circle of Mortality + Path to the Grave','Maximize healing for downed allies and curse an enemy to help the party’s saving-throw spells.'],[6,'Sentinel at Death’s Door','Use a reaction to halve damage from a qualifying attack.'],[17,'Divine Reaper','Extend qualifying necromancy spells to another target and recover health when a creature dies.']]
});
Object.assign(subclassProgression.Fighter, {
  'Arcane Archer': [[3,'Arcane Archer Lore + Arcane Shot','Gain magical utility and choose special ammunition effects for damage or control.'],[7,'Curving Shot + Magical Ammunition','Redirect a missed shot and use utility ammunition for obstacles or stealth.'],[10,'Ever-Ready Shot','Recover more opportunities to use Arcane Shot.'],[15,'Indomitable Teleport','Reposition when you use Indomitable.'],[18,'Masterful Shots','Answer a missed attack with a reaction shot and safer movement.']],
  Banneret: [[3,'Knightly Envoy + Group Recovery','Gain diplomatic utility and share healing when you use Second Wind.'],[7,'Team Tactics','Group Recovery also improves affected allies’ d20 tests.'],[10,'Rallying Surge','Action Surge lets allies spend reactions to attack or move.'],[15,'Shared Resilience','Share Indomitable with an ally.'],[18,'Inspiring Commander','Expand your support range and gain charm and fear immunity.']]
});
subclassProgression.Monk['Warrior of the Mystic Arts'] = [[3,'Spellcasting','Learn sorcerer-list spells alongside your martial arts.'],[6,'Mystic Fighting Style + Mystic Focus','Replace an attack with a cantrip and exchange spell slots and Focus.'],[11,'Focused Strike','Follow Stunning Strike with magic that benefits from a weakened saving throw.'],[17,'Improved Mystic Fighting Style','Trade two Flurry of Blows attacks for a level 1 or 2 spell.']];
subclassProgression.Paladin['Oath of the Noble Genies'] = [[3,'Elemental Smite + Genie’s Splendor','Choose elemental smite effects and gain an unarmored defense option.'],[7,'Aura of Elemental Shielding','Share a changeable elemental resistance with allies in your aura.'],[15,'Elemental Rebuke','Reduce incoming attack damage and retaliate with elemental power.'],[20,'Noble Scion','Fly and use Minor Wish to help yourself or an ally overcome failed saves.']];
Object.assign(subclassProgression.Ranger, {
  'Hollow Warden': [[3,'Wrath of the Wild','Take a frightening combat form with improved defense and retaliatory attacks.'],[7,'Hungering Might','Improve Constitution saves and recover health through attacks.'],[11,'Rot and Violence','Hinder nearby foes’ healing, movement, and opportunity attacks.'],[15,'Ancient Might','Punish frightened enemies and resist exhaustion and defeat.']],
  'Winter Walker': [[3,'Frigid Explorer + Hunter’s Rime','Add cold damage and resistance; Hunter’s Mark grants temporary hit points and hinders escape.'],[7,'Fortifying Soul','Restore health to several allies.'],[11,'Chilling Retribution','Use a reaction to attempt a brief stun.'],[15,'Frozen Haunt','Hunter’s Mark enables a spectral form that passes through obstacles and harms nearby foes.']]
});
Object.assign(subclassProgression.Rogue, {
  Phantom: [[3,'Wails from the Grave + Whispers of the Dead','Follow Sneak Attack with necrotic damage to another target; borrow a changeable proficiency.'],[9,'Tokens of the Departed + Voice of Death','Collect soul trinkets for resilience and more wails; speak with the dead.'],[13,'Ghost Walk','Fly slowly, pass through obstacles, and become harder to hit.'],[17,'Death’s Friend','Start combat with a trinket and extend wails to your original target.']],
  'Scion of the Three': [[3,'Bloodthirst + Dread Allegiance','React to bloodshed with a teleport and attack; choose a patron-linked cantrip and resistance.'],[9,'Strike Fear','Trade Sneak Attack damage for fear and an opening for future attacks.'],[13,'Aura of Malevolence','Bloodthirst teleportation also damages nearby enemies.'],[17,'Dread Incarnate','Improve low Sneak Attack rolls and use Bloodthirst more often.']]
});
Object.assign(subclassProgression.Sorcerer, {
  'Shadow Sorcery': [[3,'Power of Shadow','Gain supernatural sight, darkness tactics, and a way to survive a deadly blow.'],[6,'Beasts of Ill Omen','Summon a beast that helps your spells overcome enemy saves.'],[14,'Shadow Walk','Teleport between areas of dim light or darkness.'],[18,'Umbral Form','Spend sorcery points for broad damage resistance and movement through obstacles.']],
  'Spellfire Sorcery': [[3,'Spellfire Burst','Spending sorcery points can grant temporary hit points or extra damage.'],[6,'Absorb Spells','Counterspell can replenish sorcery points.'],[14,'Honed Spellfire','Strengthen your burst, especially its defensive option.'],[18,'Crown of Spellfire','Fly and reduce incoming damage during your empowered form.']]
});
Object.assign(subclassProgression.Warlock, {
  'Undead Patron': [[3,'Form of Dread','Gain temporary hit points, fear immunity, and attacks that can frighten.'],[6,'Grave Touched','Enhance necrotic damage and overcome resistance.'],[10,'Necrotic Husk','Gain necrotic protection and survive a fatal blow with a damaging burst, at an exhaustion cost.'],[14,'Superior Dread','Improve your dread form with physical resilience, flight, and subtle casting.']],
  'Vestige Patron': [[3,'Vestige Companion + Vestige Spells','Choose a divine companion and a Life, Light, Trickery, or War spell list.'],[6,'Vestige Power','Use your companion’s special power more often.'],[10,'Vestige Recovery','Give your companion a way to recover when defeated.'],[14,'Semblance of Life','Temporarily transform your companion into a stronger summon without Concentration.']]
});
Object.assign(subclassProgression.Wizard, {
  Bladesinger: [[3,'Bladesong + Training in War and Song','Combine weapon training with improved defense, concentration, and Intelligence-based attacks during Bladesong.'],[6,'Extra Attack','Attack twice and replace one attack with a cantrip.'],[10,'Song of Defense','Spend a spell slot to reduce incoming damage.'],[14,'Song of Victory','Follow spellcasting with weapon offense.']],
  Conjurer: [[3,'Benign Transposition + Conjuration Savant','Teleport or swap with an ally and learn more conjuration spells.'],[6,'Distant Transposition + Durable Summons','Teleport farther and give summons temporary hit points and protection.'],[10,'Focused Conjuration','Damage no longer breaks concentration on your conjuration spells.'],[14,'Splintered Summons','Create two reduced-health summons from a qualifying spell.']],
  Enchanter: [[3,'Enchanting Conversationalist + Enchantment Savant + Hypnotic Presence','Improve a social skill, learn enchantments, and hypnotize a nearby creature.'],[6,'Split Enchantment','Increase the effective level of qualifying enchantments without a higher slot.'],[10,'Instinctive Charm','Use a reaction to try redirecting an incoming attack.'],[14,'Alter Memories','Conceal a charm and reshape a target’s memory.']],
  Transmuter: [[3,'Transmutation Savant + Transmuter’s Stone + Wondrous Alteration','Learn transmutations, share a protective stone, and gain altered-form utility.'],[6,'Empowered Transmutation','Improve qualifying transmutations without spending a higher slot.'],[10,'Potent Stone + Shape-Shifter','Strengthen your stone and retain limited spellcasting while polymorphed.'],[14,'Master Transmuter','Trade your stone or a high-level slot for powerful transformation or restoration.']]
});

// [Decision to consider, optional PHB feat examples]. These are advice, never granted features.
export const expansionChoices = {
  Alchemist:['Plan which elixirs the party needs before a fight; keep Intelligence high.', ['Fey Touched','Ritual Caster']],
  Armorer:['Dreadnaught favors reach, Guardian protection, and Infiltrator mobility and ranged attacks.', ['Heavy Armor Master','War Caster']],
  Artillerist:['Choose cannon mode each turn: protect grouped allies or punish grouped enemies.', ['Fey Touched','Speedy']],
  'Battle Smith':['Keep your defender where its protection matters. Budget bonus actions for its commands.', ['War Caster','Shield Master']],
  Cartographer:['Coordinate map holders and decide whether Faerie Fire deserves your concentration.', ['Ritual Caster','Speedy']],
  Reanimator:['Choose companion modifications for spell delivery, resilience, or movement.', ['War Caster','Fey Touched']],
  'College of Spirits':['Balance unpredictable spirits against reliable spells; protect concentration near enemies.', ['Resilient','War Caster']],
  'College of the Moon':['Decide when inspiration should enable movement and when healing is more valuable.', ['Inspiring Leader','War Caster']],
  'Grave Domain':['Coordinate your curse with allies’ spells and preserve emergency healing.', ['War Caster','Inspiring Leader']],
  'Arcana Domain':['Choose wizard cantrips that add something your cleric spells cannot do.', ['War Caster','Fey Touched']],
  'Knowledge Domain':['Choose expertise around the party’s missing knowledge skills.', ['Ritual Caster','Inspiring Leader']],
  'Arcane Archer':['Balance Dexterity for accuracy with Intelligence for magical shots. Choose control or area damage.', ['Crossbow Expert','Speedy']],
  Banneret:['Invest in Charisma alongside your weapon ability to support more allies.', ['Sentinel','Shield Master']],
  'Warrior of the Mystic Arts':['Mix attacks with cantrips, then decide whether Focus or spell slots matter more this encounter.', ['Grappler','Fey Touched']],
  'Oath of the Noble Genies':['Choose armored Strength or unarmored Dexterity; both need Charisma and careful bonus-action planning.', ['Inspiring Leader','War Caster']],
  'Hollow Warden':['Stay close enough to retaliate while managing concentration and your limited form uses.', ['Great Weapon Master','War Caster']],
  'Winter Walker':['Decide how heavily to invest in Hunter’s Mark and close-range cold effects.', ['War Caster','Sentinel']],
  Phantom:['Save trinkets for the moment you need resilience, another wail, or spectral movement.', ['Skulker','Speedy']],
  'Scion of the Three':['Balance Intelligence for Bloodthirst with Dexterity; reaction attacks can put you in danger.', ['Piercer','Speedy']],
  'Shadow Sorcery':['Coordinate darkness with allies so your hiding place does not obstruct their attacks.', ['War Caster','Shadow Touched']],
  'Spellfire Sorcery':['Choose burst protection or damage to suit the turn; plan sorcery-point spending.', ['Inspiring Leader','War Caster']],
  'Undead Patron':['Choose ranged cantrips or a pact weapon. Match invocations to that plan.', ['War Caster','Resilient']],
  'Vestige Patron':['Choose one companion spell list; commanding it competes with other bonus actions.', ['War Caster','Inspiring Leader']],
  Bladesinger:['Balance weapon attacks with full wizard casting; protect concentration in melee.', ['War Caster','Resilient']],
  Conjurer:['Choose summons with different jobs and plan their positions alongside your allies.', ['Fey Touched','Ritual Caster']],
  Enchanter:['Choose enchantments that benefit from extra targets; keep a fallback against charm immunity.', ['Fey Touched','Actor']],
  Necromancer:['Plan how many undead you can manage and avoid harming allies with death bursts.', ['Fey Touched','Ritual Caster']],
  Transmuter:['Decide who carries your stone and which buffs best serve the next encounter.', ['Fey Touched','Ritual Caster']]
};

Object.assign(clericDomains, {
  'Arcana Domain': [[3,['Detect Magic','Magic Missile','Magic Weapon','Nystul’s Magic Aura']],[5,['Counterspell','Dispel Magic']],[7,['Arcane Eye','Leomund’s Secret Chest']],[9,['Bigby’s Hand','Teleportation Circle']]]
});
// Only explicit level tables are recorded as granted lists. Other paths retain labelled spell ideas.
export const expansionSpells = {
  'College of Spirits':[[6,['Spirit Guardians']]],
  'College of the Moon':[[6,['Moonbeam']]],
  Reanimator:[[3,['False Life','Spare the Dying','Witch Bolt']],[5,['Blindness/Deafness','Enhance Ability']],[9,['Animate Dead','Lightning Bolt']],[13,['Blight','Death Ward']],[17,['Antilife Shell','Raise Dead']]],
  'Hollow Warden':[[3,['Wrathful Smite']],[5,['Alter Self']],[9,['Phantom Steed']],[13,['Dominate Beast']],[17,['Steel Wind Strike']]],
  'Shadow Sorcery':[[3,['Bane','Darkness','Inflict Wounds','Pass without Trace']],[5,['Hunger of Hadar','Nondetection']],[7,['Greater Invisibility','Phantasmal Killer']],[9,['Contagion','Creation']]],
  'Undead Patron':[[3,['Bane','Blindness/Deafness','Phantasmal Force','Ray of Sickness']],[5,['Speak with Dead','Summon Undead']],[7,['Greater Invisibility','Phantasmal Killer']],[9,['Antilife Shell','Cloudkill']]]
};

// Short planning glosses; consult the linked subclass guide and 2024 spell rules.
Object.assign(spellNotes, {
  'Witch Bolt':'Link to a target with sustained lightning.',
  'Blindness/Deafness':'Impair a creature’s sight or hearing.',
  'Enhance Ability':'Improve checks using a chosen ability.',
  'Animate Dead':'Raise skeletons or zombies under your command.',
  'Lightning Bolt':'Strike a line of creatures with lightning.',
  'Antilife Shell':'Create a barrier against most living creatures.',
  'Wrathful Smite':'Empower a hit to frighten its target.',
  'Alter Self':'Adapt your body for disguise or exploration.',
  'Phantom Steed':'Conjure a swift, temporary mount.',
  'Dominate Beast':'Take control of a beast.',
  'Bane':'Penalize enemy attacks and saving throws.',
  'Inflict Wounds':'Deliver necrotic damage through touch.',
  'Phantasmal Killer':'Assault a creature with a terrifying illusion.',
  'Contagion':'Poison and weaken a creature.',
  'Creation':'Temporarily create an object from shadow.',
  'Phantasmal Force':'Make one creature perceive a harmful illusion.',
  'Ray of Sickness':'Deal poison damage and poison a target.',
  'Speak with Dead':'Ask a corpse a limited set of questions.',
  'Summon Undead':'Call an undead spirit to fight alongside you.',
  'Cloudkill':'Fill an area with dangerous poison fog.',
  'Detect Magic':'Sense nearby magical effects.',
  'Nystul’s Magic Aura':'Disguise how magic detects a target.',
  'Leomund’s Secret Chest':'Hide valuables in an extradimensional chest.',
  'Bigby’s Hand':'Control a magical hand for combat or protection.',
  'Mirror Image':'Create illusory doubles that confuse incoming attacks.'
});

export const featNotes = {
  'Fey Touched':'Consider this for teleportation and a broader spell selection.',
  'Ritual Caster':'Consider this for exploration and utility beyond combat.',
  'Heavy Armor Master':'For a build that wears heavy armor and absorbs repeated weapon hits.',
  'War Caster':'For a caster who needs to protect concentration under attack.',
  Speedy:'For a character who needs to reach allies or reposition frequently.',
  'Shield Master':'For a weapon-and-shield build focused on defense and control.',
  Resilient:'Consider which saving throw your build needs most; casters often consider Constitution.',
  'Inspiring Leader':'For supporting the group with temporary hit points between fights.',
  'Crossbow Expert':'For a dedicated crossbow build; check that your weapon choice fits.',
  Sentinel:'For staying near enemies and protecting nearby allies.',
  Grappler:'For an unarmed build that wants to restrain enemy movement.',
  'Great Weapon Master':'For a heavy-weapon build; check the Strength prerequisite.',
  Skulker:'For a character who regularly relies on hiding and stealth.',
  Piercer:'For a weapon build that consistently deals piercing damage.',
  'Shadow Touched':'For adding invisibility and another spell to your toolkit.',
  Actor:'For an enchanter who wants stronger disguises and social deception.'
};

export function featLevelsFor(className) {
  return [4,8,12,16,...(className === 'Fighter' ? [6,14] : className === 'Rogue' ? [10] : [])].sort((a,b)=>a-b);
}
