// 2024 spell casting details. Official Basic Rules links are preferred;
// edition-checked Wikidot pages supply spells outside the free rules.
// Only structured facts are stored here; see source for full spell text.
export const spellMechanics = {
  "Blade Ward": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:blade-ward"
  },
  "Dancing Lights": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a bit of phosphorus)",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:dancing-lights"
  },
  "Friends": {
    "castingTime": "Action",
    "range": "10 feet",
    "components": "S, M (some makeup)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:friends"
  },
  "Light": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, M (a firefly or phosphorescent moss)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Light"
  },
  "Mage Hand": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MageHand"
  },
  "Mending": {
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M (two lodestones)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Mending"
  },
  "Message": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "S, M (a copper wire)",
    "duration": "1 round",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Message"
  },
  "Minor Illusion": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "S, M (a bit of fleece)",
    "duration": "1 minute",
    "facts": [
      [
        "Area",
        "5-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MinorIllusion"
  },
  "Prestidigitation": {
    "castingTime": "Action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "Up to 1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Prestidigitation"
  },
  "Starry Wisp": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d8 Radiant damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#StarryWisp"
  },
  "Thunderclap": {
    "castingTime": "Action",
    "range": "Self",
    "components": "S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "1d6 Thunder damage"
      ],
      [
        "Area",
        "5-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:thunderclap"
  },
  "True Strike": {
    "castingTime": "Action",
    "range": "Self",
    "components": "S, M (a weapon with which you have proficiency and that is worth 1+ CP)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TrueStrike"
  },
  "Vicious Mockery": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "1d6 Psychic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ViciousMockery"
  },
  "Animal Friendship": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a morsel of food)",
    "duration": "24 hours",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#AnimalFriendship"
  },
  "Bane": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a drop of blood)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:bane"
  },
  "Charm Person": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CharmPerson"
  },
  "Color Spray": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a pinch of colorful sand)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Area",
        "15-foot Cone"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ColorSpray"
  },
  "Command": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Command"
  },
  "Comprehend Languages": {
    "castingTime": "Action or Ritual",
    "range": "Self",
    "components": "V, S, M (a pinch of soot and salt)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ComprehendLanguages"
  },
  "Cure Wounds": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CureWounds"
  },
  "Detect Magic": {
    "castingTime": "Action or Ritual",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:detect-magic"
  },
  "Disguise Self": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DisguiseSelf"
  },
  "Dissonant Whispers": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "3d6 Psychic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DissonantWhispers"
  },
  "Faerie Fire": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Area",
        "20-foot Cube"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:faerie-fire"
  },
  "Feather Fall": {
    "castingTime": "Reaction, which you take when you or a creature you can see within 60 feet of you falls",
    "range": "60 feet",
    "components": "V, M (a small feather or piece of down)",
    "duration": "1 minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FeatherFall"
  },
  "Healing Word": {
    "castingTime": "Bonus Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#HealingWord"
  },
  "Heroism": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:heroism"
  },
  "Identify": {
    "castingTime": "1 minute or Ritual",
    "range": "Touch",
    "components": "V, S, M (a pearl worth 100+ GP)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Identify"
  },
  "Illusory Script": {
    "castingTime": "1 minute or Ritual",
    "range": "Touch",
    "components": "S, M (ink worth 10+ GP, which the spell consumes)",
    "duration": "10 days",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#IllusoryScript"
  },
  "Longstrider": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a pinch of dirt)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Longstrider"
  },
  "Silent Image": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a bit of fleece)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Area",
        "15-foot Cube"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:silent-image"
  },
  "Sleep": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a pinch of sand or rose petals)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Area",
        "5-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:sleep"
  },
  "Speak with Animals": {
    "castingTime": "Action or Ritual",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#SpeakwithAnimals"
  },
  "Tasha’s Hideous Laughter": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a tart and a feather)",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TashasHideousLaughter"
  },
  "Thunderwave": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "2d8 Thunder damage"
      ],
      [
        "Area",
        "15-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Thunderwave"
  },
  "Unseen Servant": {
    "castingTime": "Action or Ritual",
    "range": "60 feet",
    "components": "V, S, M (a bit of string and of wood)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#UnseenServant"
  },
  "Aid": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a strip of white cloth)",
    "duration": "8 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Aid"
  },
  "Animal Messenger": {
    "castingTime": "Action or Ritual",
    "range": "30 feet",
    "components": "V, S, M (a morsel of food)",
    "duration": "24 hours",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#AnimalMessenger"
  },
  "Blindness/Deafness": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#BlindnessDeafness"
  },
  "Calm Emotions": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:calm-emotions"
  },
  "Cloud of Daggers": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a sliver of glass)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Dice",
        "4d4 Slashing damage"
      ],
      [
        "Area",
        "5-foot Cube"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:cloud-of-daggers"
  },
  "Crown of Madness": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:crown-of-madness"
  },
  "Detect Thoughts": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (1 Copper Piece)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:detect-thoughts"
  },
  "Enhance Ability": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (fur or a feather)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:enhance-ability"
  },
  "Enlarge/Reduce": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a pinch of powdered iron)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "1d4 damage; 1d4 less damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:enlarge-reduce"
  },
  "Enthrall": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:enthrall"
  },
  "Heat Metal": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a piece of iron and a flame)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "2d8 Fire damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:heat-metal"
  },
  "Hold Person": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a straight piece of iron)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:hold-person"
  },
  "Invisibility": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (an eyelash in gum arabic)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:invisibility"
  },
  "Knock": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Knock"
  },
  "Lesser Restoration": {
    "castingTime": "Bonus Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#LesserRestoration"
  },
  "Locate Animals or Plants": {
    "castingTime": "Action or Ritual",
    "range": "Self",
    "components": "V, S, M (fur from a bloodhound)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#LocateAnimalsorPlants"
  },
  "Locate Object": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a forked twig)",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:locate-object"
  },
  "Magic Mouth": {
    "castingTime": "1 minute or Ritual",
    "range": "30 feet",
    "components": "V, S, M (jade dust worth 10+ GP, which the spell consumes)",
    "duration": "Until dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MagicMouth"
  },
  "Mirror Image": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MirrorImage"
  },
  "Phantasmal Force": {
    "castingTime": "Action",
    "range": "60 feet (10 ft. Square)",
    "components": "V, S, M (a bit of fleece)",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Dice",
        "2d8 Psychic damage"
      ],
      [
        "Area",
        "10-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PhantasmalForce"
  },
  "See Invisibility": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a pinch of talc)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#SeeInvisibility"
  },
  "Shatter": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a chip of mica)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "3d8 Thunder damage"
      ],
      [
        "Area",
        "10-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Shatter"
  },
  "Silence": {
    "castingTime": "Action or Ritual",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:silence"
  },
  "Suggestion": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, M (a drop of honey)",
    "duration": "Concentration, up to 8 hours",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:suggestion"
  },
  "Zone of Truth": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "10 minutes",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ],
      [
        "Area",
        "15-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ZoneofTruth"
  },
  "Bestow Curse": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "1d8 Necrotic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:bestow-curse"
  },
  "Clairvoyance": {
    "castingTime": "10 minutes",
    "range": "1 mile",
    "components": "V, S, M (a focus worth 100+ GP, either a jeweled horn for hearing or a glass eye for seeing)",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:clairvoyance"
  },
  "Dispel Magic": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DispelMagic"
  },
  "Fear": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a white feather)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Area",
        "30-foot Cone"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:fear"
  },
  "Feign Death": {
    "castingTime": "Action or Ritual",
    "range": "Touch",
    "components": "V, S, M (a pinch of graveyard dirt)",
    "duration": "1 hour",
    "source": "https://dnd2024.wikidot.com/spell:feign-death"
  },
  "Glyph of Warding": {
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (powdered diamond worth 200+ GP, which the spell consumes)",
    "duration": "Until dispelled or triggered",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#GlyphofWarding"
  },
  "Hypnotic Pattern": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "S, M (a pinch of confetti)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Area",
        "30-foot Cube"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:hypnotic-pattern"
  },
  "Leomund’s Tiny Hut": {
    "castingTime": "1 Minute",
    "range": "Self (10 ft. Sphere)",
    "components": "V, S, M (a crystal bead)",
    "duration": "8 Hours",
    "facts": [
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#LeomundsTinyHut"
  },
  "Major Image": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a bit of fleece)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Area",
        "20-foot Cube"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:major-image"
  },
  "Mass Healing Word": {
    "castingTime": "Bonus Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MassHealingWord"
  },
  "Nondetection": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a pinch of diamond dust worth 25+ GP, which the spell consumes)",
    "duration": "8 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Nondetection"
  },
  "Plant Growth": {
    "castingTime": "Action (Overgrowth) or 8 hours (Enrichment)",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Area",
        "100-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PlantGrowth"
  },
  "Sending": {
    "castingTime": "Action",
    "range": "Unlimited",
    "components": "V, S, M (a copper wire)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Sending"
  },
  "Slow": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a drop of molasses)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Area",
        "40-foot Cube"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:slow"
  },
  "Speak with Dead": {
    "castingTime": "Action",
    "range": "10 feet",
    "components": "V, S, M (burning incense)",
    "duration": "10 minutes",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#SpeakwithDead"
  },
  "Speak with Plants": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "facts": [
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#SpeakwithPlants"
  },
  "Stinking Cloud": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a rotten egg)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:stinking-cloud"
  },
  "Tongues": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, M (a miniature ziggurat)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Tongues"
  },
  "Charm Monster": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CharmMonster"
  },
  "Compulsion": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:compulsion"
  },
  "Confusion": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (three nut shells)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Area",
        "10-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:confusion"
  },
  "Dimension Door": {
    "castingTime": "Action",
    "range": "500 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "4d6 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DimensionDoor"
  },
  "Fount of Moonlight": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "2d6 Radiant damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:fount-of-moonlight"
  },
  "Freedom of Movement": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a leather strap)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FreedomofMovement"
  },
  "Greater Invisibility": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:greater-invisibility"
  },
  "Hallucinatory Terrain": {
    "castingTime": "10 minutes",
    "range": "300 feet",
    "components": "V, S, M (a mushroom)",
    "duration": "24 hours",
    "facts": [
      [
        "Area",
        "150-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#HallucinatoryTerrain"
  },
  "Locate Creature": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (fur from a bloodhound)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:locate-creature"
  },
  "Phantasmal Killer": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "4d10 Psychic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:phantasmal-killer"
  },
  "Polymorph": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a caterpillar cocoon)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:polymorph"
  },
  "Animate Objects": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:animate-objects"
  },
  "Awaken": {
    "castingTime": "8 hours",
    "range": "Touch",
    "components": "V, S, M (an agate worth 1,000+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Awaken"
  },
  "Dominate Person": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:dominate-person"
  },
  "Dream": {
    "castingTime": "1 minute",
    "range": "Special",
    "components": "V, S, M (a handful of sand)",
    "duration": "8 hours",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "3d6 Psychic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Dream"
  },
  "Geas": {
    "castingTime": "1 minute",
    "range": "60 feet",
    "components": "V",
    "duration": "30 days",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "5d10 Psychic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Geas"
  },
  "Greater Restoration": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (diamond dust worth 100+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#GreaterRestoration"
  },
  "Hold Monster": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a straight piece of iron)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:hold-monster"
  },
  "Legend Lore": {
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M (incense worth 250+ GP, which the spell consumes, and four ivory strips worth 50+ GP each)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#LegendLore"
  },
  "Mass Cure Wounds": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Area",
        "30-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MassCureWounds"
  },
  "Mislead": {
    "castingTime": "Action",
    "range": "Self",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:mislead"
  },
  "Modify Memory": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:modify-memory"
  },
  "Planar Binding": {
    "castingTime": "1 hour",
    "range": "60 feet",
    "components": "V, S, M (a jewel worth 1,000+ GP, which the spell consumes)",
    "duration": "24 hours",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PlanarBinding"
  },
  "Raise Dead": {
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a diamond worth 500+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#RaiseDead"
  },
  "Rary’s Telepathic Bond": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (two eggs)",
    "duration": "1 Hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#RarysTelepathicBond"
  },
  "Scrying": {
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M (a focus worth 1,000+ GP, such as a crystal ball, mirror, or water-filled font)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:scrying"
  },
  "Seeming": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "8 hours",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Seeming"
  },
  "Synaptic Static": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Dice",
        "8d6 Psychic damage"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:synaptic-static"
  },
  "Teleportation Circle": {
    "castingTime": "1 minute",
    "range": "10 feet",
    "components": "V, M (rare inks worth 50+ GP, which the spell consumes)",
    "duration": "1 round",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TeleportationCircle"
  },
  "Yolande’s Regal Presence": {
    "castingTime": "Action",
    "range": "Self",
    "components": "Component: V, S, M (a miniature tiara)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "4d6 Psychic damage"
      ],
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:yolande-s-regal-presence"
  },
  "Eyebite": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:eyebite"
  },
  "Find the Path": {
    "castingTime": "1 minute",
    "range": "Self",
    "components": "V, S, M (a set of divination tools - such as cards or runes - worth 100+ GP)",
    "duration": "Concentration, up to 1 day",
    "source": "https://dnd2024.wikidot.com/spell:find-the-path"
  },
  "Guards and Wards": {
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a silver rod worth 10+ GP)",
    "duration": "24 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#GuardsandWards"
  },
  "Heroes’ Feast": {
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M (a gem-encrusted bowl worth 1,000+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Area",
        "10-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#HeroesFeast"
  },
  "Mass Suggestion": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, M (a snake’s tongue)",
    "duration": "24 hours",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MassSuggestion"
  },
  "Otto’s Irresistible Dance": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#OttosIrresistibleDance"
  },
  "Programmed Illusion": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (jade dust worth 25+ GP)",
    "duration": "Until dispelled",
    "facts": [
      [
        "Area",
        "30-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ProgrammedIllusion"
  },
  "True Seeing": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (mushroom powder worth 25+ GP, which the spell consumes)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TrueSeeing"
  },
  "Etherealness": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Up to 8 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Etherealness"
  },
  "Forcecage": {
    "castingTime": "Action",
    "range": "100 feet",
    "components": "V, S, M (ruby dust worth 1,500+ GP, which the spell consumes)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:forcecage"
  },
  "Mirage Arcane": {
    "castingTime": "10 minutes",
    "range": "Sight",
    "components": "V, S",
    "duration": "10 days",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MirageArcane"
  },
  "Mordenkainen’s Magnificent Mansion": {
    "castingTime": "1 Minute",
    "range": "300 feet",
    "components": "V, S, M (a miniature door worth 15+ GP)",
    "duration": "24 Hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MordenkainensMagnificentMansion"
  },
  "Mordenkainen’s Sword": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a miniature sword worth 250+ GP)",
    "duration": "1 Minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MordenkainensSword"
  },
  "Power Word Fortify": {
    "castingTime": "Action",
    "range": "60 foot",
    "components": "V",
    "duration": "Instantaneous",
    "source": "https://dnd2024.wikidot.com/spell:power-word-fortify"
  },
  "Prismatic Spray": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "12d6 Fire damage; 12d6 Acid damage; 12d6 Lightning damage; 12d6 Poison damage"
      ],
      [
        "Area",
        "60-foot Cone"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PrismaticSpray"
  },
  "Project Image": {
    "castingTime": "Action",
    "range": "500 miles",
    "components": "V, S, M (a statuette of yourself worth 5+ GP)",
    "duration": "Concentration, up to 1 day",
    "source": "https://dnd2024.wikidot.com/spell:project-image"
  },
  "Regenerate": {
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a prayer wheel)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Regenerate"
  },
  "Resurrection": {
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a diamond worth 1,000+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Resurrection"
  },
  "Symbol": {
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M (powdered diamond worth 1,000+ GP, which the spell consumes)",
    "duration": "Until dispelled or triggered",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "10d10 Necrotic damage"
      ],
      [
        "Area",
        "60-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Symbol"
  },
  "Teleport": {
    "castingTime": "Action",
    "range": "10 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "3d10 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Teleport"
  },
  "Antipathy/Sympathy": {
    "castingTime": "1 hour",
    "range": "60 feet",
    "components": "V, S, M (a mix of vinegar and honey)",
    "duration": "10 days",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#AntipathySympathy"
  },
  "Befuddlement": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (a key ring with no keys)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Dice",
        "10d12 Psychic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Befuddlement"
  },
  "Dominate Monster": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:dominate-monster"
  },
  "Glibness": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Glibness"
  },
  "Mind Blank": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "24 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MindBlank"
  },
  "Power Word Stun": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PowerWordStun"
  },
  "Foresight": {
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a hummingbird feather)",
    "duration": "8 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Foresight"
  },
  "Power Word Heal": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PowerWordHeal"
  },
  "Power Word Kill": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "12d12 Psychic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PowerWordKill"
  },
  "Prismatic Wall": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "10 minutes",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "12d6 Fire damage; 12d6 Acid damage; 12d6 Lightning damage; 12d6 Poison damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PrismaticWall"
  },
  "True Polymorph": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a drop of mercury, a dollop of gum arabic, and a wisp of smoke)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:true-polymorph"
  },
  "Guidance": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:guidance"
  },
  "Resistance": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:resistance"
  },
  "Sacred Flame": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "1d8 Radiant damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#SacredFlame"
  },
  "Spare the Dying": {
    "castingTime": "Action",
    "range": "15 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#SparetheDying"
  },
  "Thaumaturgy": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V",
    "duration": "Up to 1 minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Thaumaturgy"
  },
  "Bless": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a Holy Symbol worth 5+ GP)",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:bless"
  },
  "Create or Destroy Water": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a mix of water and sand)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Area",
        "30-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CreateorDestroyWater"
  },
  "Detect Evil and Good": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:detect-evil-and-good"
  },
  "Detect Poison and Disease": {
    "castingTime": "Action or Ritual",
    "range": "Self",
    "components": "V, S, M (a yew leaf)",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:detect-poison-and-disease"
  },
  "Guiding Bolt": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "1 round",
    "facts": [
      [
        "Dice",
        "4d6 Radiant damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#GuidingBolt"
  },
  "Inflict Wounds": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "2d10 Necrotic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#InflictWounds"
  },
  "Protection from Evil and Good": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a flask of Holy Water worth 25+ GP, which the spell consumes)",
    "duration": "Concentration up to 10 minutes",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ProtectionfromEvilandGood"
  },
  "Purify Food and Drink": {
    "castingTime": "Action or Ritual",
    "range": "10 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Area",
        "5-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PurifyFoodandDrink"
  },
  "Sanctuary": {
    "castingTime": "Bonus Action",
    "range": "30 feet",
    "components": "V, S, M (a shard of glass from a mirror)",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Sanctuary"
  },
  "Shield of Faith": {
    "castingTime": "Bonus Action",
    "range": "60 feet",
    "components": "V, S, M (a prayer scroll)",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:shield-of-faith"
  },
  "Augury": {
    "castingTime": "1 minute or Ritual",
    "range": "Self",
    "components": "V, S, M (specially marked sticks, bones, cards, or other divinatory tokens worth 25+ GP)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Augury"
  },
  "Continual Flame": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (ruby dust worth 50+ GP, which the spell consumes)",
    "duration": "Until dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ContinualFlame"
  },
  "Find Traps": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FindTraps"
  },
  "Gentle Repose": {
    "castingTime": "Action or Ritual",
    "range": "Touch",
    "components": "V, S, M (2 Copper Pieces, which the spell consumes)",
    "duration": "10 days",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#GentleRepose"
  },
  "Prayer of Healing": {
    "castingTime": "10 minutes",
    "range": "30 feet",
    "components": "V",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PrayerofHealing"
  },
  "Protection from Poison": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ProtectionfromPoison"
  },
  "Spiritual Weapon": {
    "castingTime": "Bonus Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:spiritual-weapon"
  },
  "Warding Bond": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a pair of platinum rings worth 50+ GP each, which you and the target must wear for the duration)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#WardingBond"
  },
  "Animate Dead": {
    "castingTime": "1 minute",
    "range": "10 feet",
    "components": "V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#AnimateDead"
  },
  "Beacon of Hope": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:beacon-of-hope"
  },
  "Create Food and Water": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CreateFoodandWater"
  },
  "Daylight": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "1 hour",
    "facts": [
      [
        "Area",
        "60-foot-radius Sphere; 60-foot Emanation"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Daylight"
  },
  "Magic Circle": {
    "castingTime": "1 minute",
    "range": "10 feet",
    "components": "V, S, M (salt and powdered silver worth 100+ GP, which the spell consumes)",
    "duration": "1 hour",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MagicCircle"
  },
  "Meld into Stone": {
    "castingTime": "Action or Ritual",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "facts": [
      [
        "Dice",
        "6d6 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MeldintoStone"
  },
  "Protection from Energy": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:protection-from-energy"
  },
  "Remove Curse": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#RemoveCurse"
  },
  "Revivify": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a diamond worth 300+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Revivify"
  },
  "Spirit Guardians": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a prayer scroll)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "3d8 Radiant damage; 3d8 Necrotic damage"
      ],
      [
        "Area",
        "15-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:spirit-guardians"
  },
  "Water Walk": {
    "castingTime": "Action or Ritual",
    "range": "30 feet",
    "components": "V, S, M (a piece of cork)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#WaterWalk"
  },
  "Aura of Life": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:aura-of-life"
  },
  "Banishment": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a pentacle)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:banishment"
  },
  "Control Water": {
    "castingTime": "Action",
    "range": "300 feet",
    "components": "V, S, M (a mixture of water and dust)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "2d8 Bludgeoning damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:control-water"
  },
  "Death Ward": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DeathWard"
  },
  "Divination": {
    "castingTime": "Action or Ritual",
    "range": "Self",
    "components": "V, S, M (incense worth 25+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Divination"
  },
  "Guardian of Faith": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V",
    "duration": "8 hours",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#GuardianofFaith"
  },
  "Stone Shape": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (soft clay)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#StoneShape"
  },
  "Commune": {
    "castingTime": "1 minute or Ritual",
    "range": "Self",
    "components": "V, S, M (incense)",
    "duration": "1 minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Commune"
  },
  "Contagion": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "7 days",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "11d8 Necrotic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Contagion"
  },
  "Dispel Evil and Good": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (powdered silver and iron)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:dispel-evil-and-good"
  },
  "Flame Strike": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a pinch of sulfur)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "5d6 Fire damage; 5d6 Radiant damage"
      ],
      [
        "Area",
        "40-foot-high Cylinder"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FlameStrike"
  },
  "Hallow": {
    "castingTime": "24 hours",
    "range": "Touch",
    "components": "V, S, M (incense worth 1,000+ GP, which the spell consumes)",
    "duration": "Until dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Hallow"
  },
  "Insect Plague": {
    "castingTime": "Action",
    "range": "300 feet",
    "components": "V, S, M (a locust)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "4d10 Piercing damage"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:insect-plague"
  },
  "Blade Barrier": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "6d10 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:blade-barrier"
  },
  "Create Undead": {
    "castingTime": "1 minute",
    "range": "10 feet",
    "components": "V, S, M (one 150+ GP black onyx stone for each corpse)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CreateUndead"
  },
  "Forbiddance": {
    "castingTime": "10 minutes or Ritual",
    "range": "Touch",
    "components": "V, S, M (ruby dust worth 1,000+ GP)",
    "duration": "1 day",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Forbiddance"
  },
  "Harm": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "14d6 Necrotic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Harm"
  },
  "Heal": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Heal"
  },
  "Planar Ally": {
    "castingTime": "10 minutes",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PlanarAlly"
  },
  "Sunbeam": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a magnifying glass)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "6d8 Radiant damage"
      ],
      [
        "Area",
        "60-foot-long Line"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:sunbeam"
  },
  "Word of Recall": {
    "castingTime": "Action",
    "range": "5 feet",
    "components": "V",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#WordofRecall"
  },
  "Conjure Celestial": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "6d12 Radiant damage"
      ],
      [
        "Area",
        "40-foot-high Cylinder"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:conjure-celestial"
  },
  "Divine Word": {
    "castingTime": "Bonus Action",
    "range": "30 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DivineWord"
  },
  "Fire Storm": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "7d10 Fire damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FireStorm"
  },
  "Plane Shift": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a forked, metal rod worth 250+ GP and attuned to a plane of existence)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PlaneShift"
  },
  "Antimagic Field": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (iron filings)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:antimagic-field"
  },
  "Control Weather": {
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M (burning incense)",
    "duration": "Concentration, up to 8 hours",
    "source": "https://dnd2024.wikidot.com/spell:control-weather"
  },
  "Earthquake": {
    "castingTime": "Action",
    "range": "500 feet",
    "components": "V, S, M (a fractured rock)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "12d6 Bludgeoning damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:earthquake"
  },
  "Holy Aura": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a reliquary worth 1,000+ GP)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:holy-aura"
  },
  "Sunburst": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (a piece of sunstone)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "12d6 Radiant damage"
      ],
      [
        "Area",
        "60-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Sunburst"
  },
  "Astral Projection": {
    "castingTime": "1 hour",
    "range": "10 feet",
    "components": "V, S, M (for each of the spell’s targets, one jacinth worth 1,000+ GP and one silver bar worth 100+ GP, all of which the spell consumes)",
    "duration": "Until dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#AstralProjection"
  },
  "Gate": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M(a diamond worth 5,000+ GP)",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:gate"
  },
  "Mass Heal": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MassHeal"
  },
  "True Resurrection": {
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (diamonds worth 25,000+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TrueResurrection"
  },
  "Druidcraft": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Area",
        "5-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Druidcraft"
  },
  "Elementalism": {
    "castingTime": "Action",
    "range": "30 feet (5 ft. Square)",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Area",
        "5-foot Cube; 1-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Elementalism"
  },
  "Poison Spray": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d12 Poison damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PoisonSpray"
  },
  "Produce Flame": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "facts": [
      [
        "Dice",
        "1d8 Fire damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ProduceFlame"
  },
  "Shillelagh": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S, M (mistletoe)",
    "duration": "1 minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Shillelagh"
  },
  "Thorn Whip": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (the stem of a thorny plant)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d6 Piercing damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:thorn-whip"
  },
  "Entangle": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:entangle"
  },
  "Fog Cloud": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:fog-cloud"
  },
  "Goodberry": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a sprig of mistletoe)",
    "duration": "24 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Goodberry"
  },
  "Ice Knife": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "S, M (a drop of water or a piece of ice)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "1d10 Piercing damage; 2d6 Cold damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#IceKnife"
  },
  "Jump": {
    "castingTime": "Bonus Action",
    "range": "Touch",
    "components": "V, S, M (a grasshopper’s hind leg)",
    "duration": "1 minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Jump"
  },
  "Barkskin": {
    "castingTime": "Bonus Action",
    "range": "Touch",
    "components": "V, S, M (a handful of bark)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Barkskin"
  },
  "Beast Sense": {
    "castingTime": "Action or Ritual",
    "range": "Touch",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:beast-sense"
  },
  "Darkvision": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a dried carrot)",
    "duration": "8 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Darkvision"
  },
  "Flame Blade": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S, M (a sumac leaf)",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:flame-blade"
  },
  "Flaming Sphere": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a ball of wax)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "2d6 Fire damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:flaming-sphere"
  },
  "Gust of Wind": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a legume seed)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:gust-of-wind"
  },
  "Moonbeam": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a moonseed leaf)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "2d10 Radiant damage"
      ],
      [
        "Area",
        "40-foot-high Cylinder"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:moonbeam"
  },
  "Pass without Trace": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (ashes from burned mistletoe)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:pass-without-trace"
  },
  "Spike Growth": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (seven thorns)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Dice",
        "2d4 Piercing damage"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:spike-growth"
  },
  "Summon Beast": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a feather, tuft of fur, and fish tail inside a gilded acorn worth 200+ GP)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:summon-beast"
  },
  "Aura of Vitality": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:aura-of-vitality"
  },
  "Call Lightning": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "3d10 Lightning damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:call-lightning"
  },
  "Conjure Animals": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "3d10 Slashing damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:conjure-animals"
  },
  "Elemental Weapon": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Dice",
        "1d4 damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:elemental-weapon"
  },
  "Sleet Storm": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (a miniature umbrella)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Area",
        "20-foot-radius Cylinder"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:sleet-storm"
  },
  "Summon Fey": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a gilded flower worth 300+ GP)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Area",
        "10-foot Cube"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:summon-fey"
  },
  "Water Breathing": {
    "castingTime": "Action or Ritual",
    "range": "30 feet",
    "components": "V, S, M (a short reed)",
    "duration": "24 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#WaterBreathing"
  },
  "Wind Wall": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a fan and a feather)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "4d8 Bludgeoning damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:wind-wall"
  },
  "Blight": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "8d8 Necrotic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Blight"
  },
  "Conjure Minor Elementals": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Dice",
        "2d8 damage"
      ],
      [
        "Area",
        "15-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:conjure-minor-elementals"
  },
  "Conjure Woodland Beings": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "5d8 Force damage"
      ],
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:conjure-woodland-beings"
  },
  "Dominate Beast": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:dominate-beast"
  },
  "Fire Shield": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a bit of phosphorus or a firefly)",
    "duration": "10 minutes",
    "facts": [
      [
        "Dice",
        "2d8 Fire damage; 2d8 Cold damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FireShield"
  },
  "Giant Insect": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "1d4 Poison damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:giant-insect"
  },
  "Grasping Vine": {
    "castingTime": "Bonus Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Dice",
        "4d8 Bludgeoning damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:grasping-vine"
  },
  "Ice Storm": {
    "castingTime": "Action",
    "range": "300 feet",
    "components": "V, S, M (a mitten)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "2d10 Bludgeoning damage; 4d6 Cold damage"
      ],
      [
        "Area",
        "40-foot-high Cylinder"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#IceStorm"
  },
  "Stoneskin": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (diamond dust worth 100+ GP, which the spell consumes)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:stoneskin"
  },
  "Summon Elemental": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (air, a pebble, ash, and water inside a gold-inlaid vial worth 400+ GP)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:summon-elemental"
  },
  "Wall of Fire": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a piece of charcoal)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "5d8 Fire damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:wall-of-fire"
  },
  "Antilife Shell": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:antilife-shell"
  },
  "Commune with Nature": {
    "castingTime": "1 minute or Ritual",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CommunewithNature"
  },
  "Cone of Cold": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a small crystal or glass cone)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "8d8 Cold damage"
      ],
      [
        "Area",
        "60-foot Cone"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ConeofCold"
  },
  "Conjure Elemental": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "8d8 damage; 4d8 damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:conjure-elemental"
  },
  "Reincarnate": {
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (rare oils worth 1,000+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Reincarnate"
  },
  "Tree Stride": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:tree-stride"
  },
  "Wall of Stone": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a cube of granite)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:wall-of-stone"
  },
  "Conjure Fey": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:conjure-fey"
  },
  "Flesh to Stone": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a cockatrice feather)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:flesh-to-stone"
  },
  "Move Earth": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a miniature shovel)",
    "duration": "Concentration, up to 2 hours",
    "source": "https://dnd2024.wikidot.com/spell:move-earth"
  },
  "Transport via Plants": {
    "castingTime": "Action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "1 minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TransportviaPlants"
  },
  "Wall of Thorns": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a handful of thorns)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "7d8 Piercing damage; 7d8 Slashing damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:wall-of-thorns"
  },
  "Wind Walk": {
    "castingTime": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a candle)",
    "duration": "8 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#WindWalk"
  },
  "Reverse Gravity": {
    "castingTime": "Action",
    "range": "100 feet",
    "components": "V, S, M (a lodestone and iron filings)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:reverse-gravity"
  },
  "Animal Shapes": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "24 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#AnimalShapes"
  },
  "Incendiary Cloud": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "10d8 Fire damage"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:incendiary-cloud"
  },
  "Tsunami": {
    "castingTime": "1 Minute",
    "range": "1 Mile",
    "components": "V, S",
    "duration": "6 Rounds",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "6d10 Bludgeoning damage; 5d10 Bludgeoning damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Tsunami"
  },
  "Shapechange": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a jade circlet worth 1,500+ GP)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:shapechange"
  },
  "Storm of Vengeance": {
    "castingTime": "Action",
    "range": "1 mile",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "2d6 Thunder damage; 4d6 Acid damage; 10d6 Lightning damage; 2d6 Bludgeoning damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:storm-of-vengeance"
  },
  "Compelled Duel": {
    "castingTime": "Bonus Action",
    "range": "30 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:compelled-duel"
  },
  "Divine Favor": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 minute",
    "facts": [
      [
        "Dice",
        "1d4 Radiant damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DivineFavor"
  },
  "Divine Smite": {
    "castingTime": "Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "2d8 Radiant damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DivineSmite"
  },
  "Searing Smite": {
    "castingTime": "Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "components": "V",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "1d6 Fire damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#SearingSmite"
  },
  "Thunderous Smite": {
    "castingTime": "Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "2d6 Thunder damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:thunderous-smite"
  },
  "Wrathful Smite": {
    "castingTime": "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "components": "V",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "1d6 Necrotic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:wrathful-smite"
  },
  "Find Steed": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FindSteed"
  },
  "Magic Weapon": {
    "castingTime": "Bonus Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MagicWeapon"
  },
  "Shining Smite": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V",
    "duration": "1 Minute",
    "facts": [
      [
        "Dice",
        "2d6 Radiant damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ShiningSmite"
  },
  "Blinding Smite": {
    "castingTime": "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "components": "V",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "3d8 Radiant damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:blinding-smite"
  },
  "Crusader’s Mantle": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Dice",
        "1d4 Radiant damage"
      ],
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:crusader-s-mantle"
  },
  "Aura of Purity": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:aura-of-purity"
  },
  "Staggering Smite": {
    "castingTime": "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "4d6 Psychic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:staggering-smite"
  },
  "Banishing Smite": {
    "castingTime": "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ],
      [
        "Dice",
        "5d10 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:banishing-smite"
  },
  "Circle of Power": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:circle-of-power"
  },
  "Destructive Wave": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "5d6 Thunder damage"
      ],
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:destructive-wave"
  },
  "Summon Celestial": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a reliquary worth 500+ GP)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Dice",
        "1d10 Temporary Hit Points"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:summon-celestial"
  },
  "Alarm": {
    "castingTime": "1 minute or Ritual",
    "range": "30 feet",
    "components": "V, S, M (a bell and silver wire)",
    "duration": "8 hours",
    "facts": [
      [
        "Area",
        "20-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Alarm"
  },
  "Ensnaring Strike": {
    "castingTime": "Bonus Action, which you take immediately after hitting a creature with a weapon",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "1d6 Piercing damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:ensnaring-strike"
  },
  "Hail of Thorns": {
    "castingTime": "Bonus Action, which you take immediately after hitting a creature with a Ranged weapon",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "1d10 Piercing damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:hail-of-thorns"
  },
  "Hunter’s Mark": {
    "castingTime": "Bonus Action",
    "range": "90 feet",
    "components": "V",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Dice",
        "1d6 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:hunter-s-mark"
  },
  "Cordon of Arrows": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (an ornamental braid)",
    "duration": "8 hours",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "2d4 Piercing damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:cordon-of-arrows"
  },
  "Conjure Barrage": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a Melee or Ranged weapon worth at least 1 CP)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "5d8 Force damage"
      ],
      [
        "Area",
        "60-foot Cone"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:conjure-barrage"
  },
  "Lightning Arrow": {
    "castingTime": "Bonus Action, which you take immediately after hitting or missing a target with a ranged attack using a weapon",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "4d8 Lightning damage; 2d8 Lightning damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:lightning-arrow"
  },
  "Conjure Volley": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (a Melee or Ranged weapon worth at least 1 CP)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "8d8 Force damage"
      ],
      [
        "Area",
        "20-foot-high Cylinder"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:conjure-volley"
  },
  "Steel Wind Strike": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "S, M (a Melee weapon worth 1+ SP)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "6d10 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:steel-wind-strike"
  },
  "Swift Quiver": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S, M (a Quiver worth 1+ GP)",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:swift-quiver"
  },
  "Acid Splash": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "1d6 Acid damage"
      ],
      [
        "Area",
        "5-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#AcidSplash"
  },
  "Chill Touch": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d10 Necrotic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ChillTouch"
  },
  "Fire Bolt": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d10 Fire damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FireBolt"
  },
  "Mind Sliver": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "1 round",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Dice",
        "1d6 Psychic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:mind-sliver"
  },
  "Ray of Frost": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d8 Cold damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#RayofFrost"
  },
  "Shocking Grasp": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d8 Lightning damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ShockingGrasp"
  },
  "Sorcerous Burst": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d8 damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#SorcerousBurst"
  },
  "Burning Hands": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "3d6 Fire damage"
      ],
      [
        "Area",
        "15-foot Cone"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#BurningHands"
  },
  "Chromatic Orb": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a diamond worth 50+ GP)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "3d8 damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ChromaticOrb"
  },
  "Expeditious Retreat": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:expeditious-retreat"
  },
  "False Life": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a drop of alcohol)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "2d4 + 4 Temporary Hit Points"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FalseLife"
  },
  "Grease": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a bit of pork rind or butter)",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Grease"
  },
  "Mage Armor": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a piece of cured leather)",
    "duration": "8 hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MageArmor"
  },
  "Magic Missile": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d4 + 1 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MagicMissile"
  },
  "Ray of Sickness": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "2d8 Poison damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#RayofSickness"
  },
  "Shield": {
    "castingTime": "Reaction, when hit by an attack roll or targeted by Magic Missile",
    "range": "Self",
    "components": "V, S",
    "duration": "1 round",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Shield"
  },
  "Witch Bolt": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a twig struck by lightning)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Dice",
        "2d12 Lightning damage; 1d12 Lightning damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:witch-bolt"
  },
  "Alter Self": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Dice",
        "1d6 damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:alter-self"
  },
  "Arcane Vigor": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://dnd2024.wikidot.com/spell:arcane-vigor"
  },
  "Blur": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:blur"
  },
  "Darkness": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, M (bat fur and a piece of coal)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Area",
        "15-foot-radius Sphere; 15-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:darkness"
  },
  "Dragon’s Breath": {
    "castingTime": "Bonus Action",
    "range": "Touch",
    "components": "V, S, M (a hot pepper)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "3d6 damage"
      ],
      [
        "Area",
        "15-foot Cone"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:dragon-s-breath"
  },
  "Levitate": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a metal spring)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:levitate"
  },
  "Mind Spike": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "S",
    "duration": "1 Hour",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "3d8 Psychic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MindSpike"
  },
  "Misty Step": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MistyStep"
  },
  "Scorching Ray": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "2d6 Fire damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ScorchingRay"
  },
  "Spider Climb": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a drop of bitumen and a spider)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:spider-climb"
  },
  "Web": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a bit of spiderweb)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "2d4 Fire damage"
      ],
      [
        "Area",
        "20-foot Cube; 5-foot Cube"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:web"
  },
  "Blink": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Blink"
  },
  "Counterspell": {
    "castingTime": "Reaction, which you take when you see a creature within 60 feet of yourself casting a spell with Verbal, Somatic, or Material components",
    "range": "60 feet",
    "components": "S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Counterspell"
  },
  "Fireball": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (a ball of bat guano and sulfur)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "8d6 Fire damage"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Fireball"
  },
  "Fly": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a feather)",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:fly"
  },
  "Gaseous Form": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a bit of gauze)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:gaseous-form"
  },
  "Haste": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a shaving of licorice root)",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:haste"
  },
  "Lightning Bolt": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a bit of fur and a crystal rod)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "8d6 Lightning damage"
      ],
      [
        "Area",
        "5-foot-wide Line"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#LightningBolt"
  },
  "Vampiric Touch": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Dice",
        "3d6 Necrotic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:vampiric-touch"
  },
  "Vitriolic Sphere": {
    "castingTime": "Action",
    "range": "150 feet (20 ft. Sphere)",
    "components": "V, S, M (a drop of bile)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "10d4 Acid damage; 5d4 Acid damage"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#VitriolicSphere"
  },
  "Bigby’s Hand": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (an eggshell and a glove)",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "5d8 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#BigbysHand"
  },
  "Cloudkill": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "5d8 Poison damage"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:cloudkill"
  },
  "Creation": {
    "castingTime": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a paintbrush)",
    "duration": "Special",
    "facts": [
      [
        "Area",
        "5-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Creation"
  },
  "Telekinesis": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:telekinesis"
  },
  "Arcane Gate": {
    "castingTime": "Action",
    "range": "500 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:arcane-gate"
  },
  "Chain Lightning": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (three silver pins)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "10d8 Lightning damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ChainLightning"
  },
  "Circle of Death": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (the powder of a crushed black pearl worth 500+ GP)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "8d8 Necrotic damage"
      ],
      [
        "Area",
        "60-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CircleofDeath"
  },
  "Disintegrate": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a lodestone and dust)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "10d6 + 40 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Disintegrate"
  },
  "Globe of Invulnerability": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a glass bead)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:globe-of-invulnerability"
  },
  "Otiluke’s Freezing Sphere": {
    "castingTime": "Action",
    "range": "300 feet (60 ft. Sphere)",
    "components": "V, S, M (a miniature crystal sphere)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "10d6 Cold damage"
      ],
      [
        "Area",
        "60-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#OtilukesFreezingSphere"
  },
  "Delayed Blast Fireball": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (a ball of bat guano and sulfur)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:delayed-blast-fireball"
  },
  "Finger of Death": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "7d8 + 30 Necrotic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FingerofDeath"
  },
  "Demiplane": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "S",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Demiplane"
  },
  "Meteor Swarm": {
    "castingTime": "Action",
    "range": "1 mile",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "20d6 Fire damage; 20d6 Bludgeoning damage"
      ],
      [
        "Area",
        "40-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MeteorSwarm"
  },
  "Time Stop": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TimeStop"
  },
  "Wish": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d10 Necrotic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Wish"
  },
  "Eldritch Blast": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "1d10 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#EldritchBlast"
  },
  "Toll the Dead": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "1d8 Necrotic damage; 1d12 Necrotic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:toll-the-dead"
  },
  "Armor of Agathys": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S, M (a shard of blue glass)",
    "duration": "1 Hour",
    "source": "https://dnd2024.wikidot.com/spell:armor-of-agathys"
  },
  "Arms of Hadar": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "2d6 Necrotic damage"
      ],
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:arms-of-hadar"
  },
  "Hellish Rebuke": {
    "castingTime": "Reaction, which you take in response to taking damage from a creature that you can see within 60 feet of yourself",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "2d10 Fire damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#HellishRebuke"
  },
  "Hex": {
    "castingTime": "Bonus Action",
    "range": "90 feet",
    "components": "V, S, M (the petrified eye of a newt)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Dice",
        "1d6 Necrotic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:hex"
  },
  "Ray of Enfeeblement": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:ray-of-enfeeblement"
  },
  "Hunger of Hadar": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (a pickled tentacle)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "2d6 Cold damage; 2d6 Acid damage"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:hunger-of-hadar"
  },
  "Summon Undead": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a gilded skull worth 300+ GP)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "1d10 Force damage"
      ],
      [
        "Area",
        "5-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:summon-undead"
  },
  "Summon Aberration": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a pickled tentacle and an eyeball in a platinum-inlaid vial worth 400+ GP)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "2d6 Psychic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:summon-aberration"
  },
  "Contact Other Plane": {
    "castingTime": "1 minute or Ritual",
    "range": "Self",
    "components": "V",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Dice",
        "6d6 Psychic damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ContactOtherPlane"
  },
  "Jallarzi’s Storm of Radiance": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a pinch of phosphorus)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "2d10 Radiant damage; 2d10 Thunder damage"
      ],
      [
        "Area",
        "40-foot-high Cylinder"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:jallarzi-s-storm-of-radiance"
  },
  "Summon Fiend": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a bloody vial worth 600+ GP)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:summon-fiend"
  },
  "Tasha’s Bubbling Cauldron": {
    "castingTime": "Action",
    "range": "5 feet",
    "components": "V, S, M (a gilded ladle worth 500+ GP)",
    "duration": "10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:tasha-s-bubbling-cauldron"
  },
  "Imprisonment": {
    "castingTime": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a statuette of the target worth 5,000+ GP)",
    "duration": "Until dispelled",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Imprisonment"
  },
  "Weird": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "10d10 Psychic damage; 5d10 Psychic damage"
      ],
      [
        "Area",
        "30-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:weird"
  },
  "Find Familiar": {
    "castingTime": "1 hour or Ritual",
    "range": "10 feet",
    "components": "V, S, M (burning incense worth 10+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#FindFamiliar"
  },
  "Arcane Lock": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (gold dust worth 25+ GP, which the spell consumes)",
    "duration": "Until dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ArcaneLock"
  },
  "Rope Trick": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a segment of rope)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#RopeTrick"
  },
  "Phantom Steed": {
    "castingTime": "1 minute or Ritual",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#PhantomSteed"
  },
  "Arcane Eye": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a bit of bat fur)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:arcane-eye"
  },
  "Fabricate": {
    "castingTime": "10 minutes",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Area",
        "10-foot Cube; 5-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Fabricate"
  },
  "Passwall": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a pinch of sesame seeds)",
    "duration": "1 hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Passwall"
  },
  "Wall of Force": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a shard of glass)",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:wall-of-force"
  },
  "Contingency": {
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M (a gem-encrusted statuette of yourself worth 1,500+ GP)",
    "duration": "10 days",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Contingency"
  },
  "Magic Jar": {
    "castingTime": "1 minute",
    "range": "Self",
    "components": "V, S, M (a gem, crystal, or reliquary worth 500+ GP)",
    "duration": "Until dispelled",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MagicJar"
  },
  "Wall of Ice": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a piece of quartz)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "10d6 Cold damage; 5d6 Cold damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:wall-of-ice"
  },
  "Sequester": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (gem dust worth 5,000+ GP, which the spell consumes)",
    "duration": "Until dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Sequester"
  },
  "Simulacrum": {
    "castingTime": "12 hours",
    "range": "Touch",
    "components": "V, S, M (powdered ruby worth 1,500+ GP, which the spell consumes)",
    "duration": "Until dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Simulacrum"
  },
  "Clone": {
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a diamond worth 1,000+ GP, which the spell consumes, and a sealable vessel worth 2,000+ GP that is large enough to hold the creature being cloned)",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#Clone"
  },
  "Maze": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:maze"
  },
  "Quick Clothier": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a set of clothing)",
    "duration": "24 Hours",
    "source": "https://dnd2024.wikidot.com/spell:quick-clothier"
  },
  "Conjure Tools": {
    "castingTime": "Action",
    "range": "30 ft",
    "components": "V, S",
    "duration": "8 hours",
    "source": "https://dnd2024.wikidot.com/spell:conjure-tools"
  },
  "Dragon's Breath": {
    "castingTime": "Bonus Action",
    "range": "Touch",
    "components": "V, S, M (a hot pepper)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "3d6 damage"
      ],
      [
        "Area",
        "15-foot Cone"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:dragon-s-breath"
  },
  "Dueling Ground": {
    "castingTime": "10 minutes or Ritual",
    "range": "Touch",
    "components": "V, S, M (a silk flag worth 100+ GP)",
    "duration": "1 hour",
    "facts": [
      [
        "Area",
        "15-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:dueling-ground"
  },
  "Homunculus Servant": {
    "castingTime": "1 hour or Ritual",
    "range": "10 feet",
    "components": "V, S, M (a gem worth 100+ GP)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:homunculus-servant"
  },
  "Tortoise Shell": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:tortoise-shell"
  },
  "Uncertain Footing": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a distorted lens)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:uncertain-footing"
  },
  "Catnap": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "S, M (a pinch of sand)",
    "duration": "10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:catnap"
  },
  "Create Food And Water": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CreateFoodandWater"
  },
  "Distorted Distance": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Dice",
        "2d10 Psychic damage"
      ],
      [
        "Area",
        "60-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:distorted-distance"
  },
  "Leomund's Secret Chest": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth 5,000+ GP, and a Tiny replica of the chest made from the same materials worth 50+ GP)",
    "duration": "Until Dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#LeomundsSecretChest"
  },
  "Mordenkainen's Faithful Hound": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a silver whistle)",
    "duration": "8 Hours",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "4d8 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MordenkainensFaithfulHound"
  },
  "Mordenkainen's Private Sanctum": {
    "castingTime": "10 Minutes",
    "range": "120 feet (Square)",
    "components": "V, S, M (a thin sheet of lead)",
    "duration": "24 Hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MordenkainensPrivateSanctum"
  },
  "Otiluke's Resilient Sphere": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a glass sphere)",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#OtilukesResilientSphere"
  },
  "Summon Construct": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a lockbox worth 400+ GP)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "1d10 Fire damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:summon-construct"
  },
  "Bigby's Hand": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (an eggshell and a glove)",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "5d8 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#BigbysHand"
  },
  "Circle Of Power": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:circle-of-power"
  },
  "Spirit Lantern": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a black lantern)",
    "duration": "10 minutes",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:spirit-lantern"
  },
  "Insidious Rhythm": {
    "castingTime": "Action",
    "range": "120 feet.",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:insidious-rhythm"
  },
  "Tasha's Hideous Laughter": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a tart and a feather)",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TashasHideousLaughter"
  },
  "Wardaway": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a miniature clay hand)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "2d4 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:wardaway"
  },
  "Cloud Of Daggers": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a sliver of glass)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Dice",
        "4d4 Slashing damage"
      ],
      [
        "Area",
        "5-foot Cube"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:cloud-of-daggers"
  },
  "Crown Of Madness": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:crown-of-madness"
  },
  "Disruptive Tune": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:disruptive-tune"
  },
  "Pinky Swear": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "24 Hours",
    "source": "https://dnd2024.wikidot.com/spell:pinky-swear"
  },
  "Astral Flood": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a mixture of water and powdered silver)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "4d10 damage"
      ],
      [
        "Area",
        "30-foot Cone"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:astral-flood"
  },
  "Cacophonic Shield": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "3d6 Thunder damage"
      ],
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:cacophonic-shield"
  },
  "Inflict Doubt": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:inflict-doubt"
  },
  "Leomund's Tiny Hut": {
    "castingTime": "1 Minute",
    "range": "Self (10 ft. Sphere)",
    "components": "V, S, M (a crystal bead)",
    "duration": "8 Hours",
    "facts": [
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#LeomundsTinyHut"
  },
  "Backlash": {
    "castingTime": "Reaction, which you take in response to taking damage",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "4d6 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:backlash"
  },
  "Doomtide": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (soot and a dried eel)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "5d6 Psychic damage"
      ],
      [
        "Area",
        "20-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:doomtide"
  },
  "Zone of Amicability": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "facts": [
      [
        "Area",
        "60-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:zone-of-amicability"
  },
  "Alustriel's Mooncloak": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a moonstone worth 50+ GP)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Area",
        "20-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:alustriel-s-mooncloak"
  },
  "Rary's Telepathic Bond": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (two eggs)",
    "duration": "1 Hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#RarysTelepathicBond"
  },
  "Yolande's Regal Presence": {
    "castingTime": "Action",
    "range": "Self",
    "components": "Component: V, S, M (a miniature tiara)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Dice",
        "4d6 Psychic damage"
      ],
      [
        "Area",
        "10-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:yolande-s-regal-presence"
  },
  "Dirge": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "3d10 Necrotic damage"
      ],
      [
        "Area",
        "60-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:dirge"
  },
  "Heroes' Feast": {
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M (a gem-encrusted bowl worth 1,000+ GP, which the spell consumes)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Area",
        "10-foot Cube"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#HeroesFeast"
  },
  "Leomund's Lamentable Belaborment": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Area",
        "10-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:leomund-s-lamentable-belaborment"
  },
  "Otto's Irresistible Dance": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#OttosIrresistibleDance"
  },
  "Fractured Awareness": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Dice",
        "12d10 Psychic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:fractured-awareness"
  },
  "Mordenkainen's Magnificent Mansion": {
    "castingTime": "1 Minute",
    "range": "300 feet",
    "components": "V, S, M (a miniature door worth 15+ GP)",
    "duration": "24 Hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MordenkainensMagnificentMansion"
  },
  "Mordenkainen's Sword": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a miniature sword worth 250+ GP)",
    "duration": "1 Minute",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MordenkainensSword"
  },
  "Power Word Pain": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "6d8 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:power-word-pain"
  },
  "Reweave Fate": {
    "castingTime": "Reaction, which you take when a creature you can see within 60 feet of you fails a D20 Test",
    "range": "60 feet",
    "components": "S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "6d10 Temporary Hit Points"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:reweave-fate"
  },
  "Transfix": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ],
      [
        "Dice",
        "4d8 Psychic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:transfix"
  },
  "Entrancing Mirrors": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a mirror shard)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Dice",
        "7d6 Psychic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:entrancing-mirrors"
  },
  "Vision of Elapsing Eons": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Dice",
        "10d12 Psychic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:vision-of-elapsing-eons"
  },
  "Word of Radiance": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, M (a sunburst token)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "1d6 Radiant damage"
      ],
      [
        "Area",
        "5-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:word-of-radiance"
  },
  "Deryan's Helpful Homunculi": {
    "castingTime": "Action or Ritual",
    "range": "Self",
    "components": "V, S, M (powdered gemstones worth 100+ GP, which the spell consumes, and one set of Artisan’s Tools with which you have proficiency)",
    "duration": "8 hours",
    "source": "https://dnd2024.wikidot.com/spell:deryan-s-helpful-homunculi"
  },
  "Searing Orb": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "S, M (Metallic flakes and a pinch of phosphorus)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "3d4 Radiant damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:searing-orb"
  },
  "Laeral's Silver Lance": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a silver pin worth 250+ GP)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "3d10 Force damage"
      ],
      [
        "Area",
        "5-foot-wide Line"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:laeral-s-silver-lance"
  },
  "Sticks to Snakes": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (a small piece of bark and several snake scales)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Charisma"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:sticks-to-snakes"
  },
  "Grave Ground": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a handful of grave dirt)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "6d6 Necrotic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:grave-ground"
  },
  "Holy Star of Mystra": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:holy-star-of-mystra"
  },
  "Buzzing Bee": {
    "castingTime": "Action",
    "range": "120 feet.",
    "components": "V, S, M (a dab of honey)",
    "duration": "Concentration, up to 1 minute",
    "source": "https://dnd2024.wikidot.com/spell:buzzing-bee"
  },
  "Battle Familiar": {
    "castingTime": "Action",
    "range": "10 feet",
    "components": "V, S, M (a diamond worth 25+ GP)",
    "duration": "1 hour",
    "source": "https://dnd2024.wikidot.com/spell:battle-familiar"
  },
  "Wither and Bloom": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a withered vine twisted into a loop)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "3d6 Necrotic damage"
      ],
      [
        "Area",
        "10-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:wither-and-bloom"
  },
  "Sylune's Viper": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S, M (a snake fang)",
    "duration": "1 hour",
    "facts": [
      [
        "Dice",
        "1d6 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:sylune-s-viper"
  },
  "Festering Blast": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "4d10 Necrotic damage; 2d10 Poison damage"
      ],
      [
        "Area",
        "10-foot-wide Line"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:festering-blast"
  },
  "Commune With Nature": {
    "castingTime": "1 minute or Ritual",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CommunewithNature"
  },
  "Cone Of Cold": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a small crystal or glass cone)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "8d8 Cold damage"
      ],
      [
        "Area",
        "60-foot Cone"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#ConeofCold"
  },
  "Songal's Elemental Suffusion": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a pearl worth 100+ GP)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Area",
        "15-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:songal-s-elemental-suffusion"
  },
  "Summon Plant": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (herbs worth 500+ GP)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Dice",
        "3d4 Poison damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:summon-plant"
  },
  "Elminster's Effulgent Spheres": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (an opal worth 1,000 GP+)",
    "duration": "1 hour",
    "source": "https://dnd2024.wikidot.com/spell:elminster-s-effulgent-spheres"
  },
  "Summon Dinosaur": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (polished scale worth 600+ GP)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "1d10 Piercing damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:summon-dinosaur"
  },
  "Lightning Ring": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S, M (a bit of fur and a glass ring)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "3d6 Lightning damage; 3d6 Thunder damage; 6d6 Lightning damage"
      ],
      [
        "Area",
        "10-foot Emanation; 5-foot-wide Line"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:lightning-ring"
  },
  "Crusader's Mantle": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Dice",
        "1d4 Radiant damage"
      ],
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:crusader-s-mantle"
  },
  "Hunter's Mark": {
    "castingTime": "Bonus Action",
    "range": "90 feet",
    "components": "V",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Dice",
        "1d6 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:hunter-s-mark"
  },
  "Cordon Of Arrows": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (an ornamental braid)",
    "duration": "8 hours",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "2d4 Piercing damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:cordon-of-arrows"
  },
  "Spellfire Flare": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "2d10 Radiant damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:spellfire-flare"
  },
  "Death Armor": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (an onyx worth 50+ GP, which the spell consumes)",
    "duration": "1 hour",
    "facts": [
      [
        "Dice",
        "2d4 Necrotic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:death-armor"
  },
  "Spellfire Storm": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "4d10 Radiant damage"
      ],
      [
        "Area",
        "20-foot-high Cylinder; 40-foot-high Cylinder; 60-foot-high Cylinder"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:spellfire-storm"
  },
  "Enervation": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "6d8 Necrotic damage; 2d8 Necrotic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:enervation"
  },
  "Waves of Exhaustion": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S, M (a piece of dried meat)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Area",
        "60-foot Cone"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:waves-of-exhaustion"
  },
  "Circle Of Death": {
    "castingTime": "Action",
    "range": "150 feet",
    "components": "V, S, M (the powder of a crushed black pearl worth 500+ GP)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "8d8 Necrotic damage"
      ],
      [
        "Area",
        "60-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#CircleofDeath"
  },
  "Otiluke's Freezing Sphere": {
    "castingTime": "Action",
    "range": "300 feet (60 ft. Sphere)",
    "components": "V, S, M (a miniature crystal sphere)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "10d6 Cold damage"
      ],
      [
        "Area",
        "60-foot-radius Sphere"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#OtilukesFreezingSphere"
  },
  "Aura of Evasion": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Area",
        "30-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:aura-of-evasion"
  },
  "Simbul's Synostodweomer": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 hour",
    "source": "https://dnd2024.wikidot.com/spell:simbul-s-synostodweomer"
  },
  "Iron Body": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (diamond dust worth 250+ GP, which the spell consumes)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:iron-body"
  },
  "Blade of Disaster": {
    "castingTime": "Bonus Action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Dice",
        "10d6 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:blade-of-disaster"
  },
  "Detonate": {
    "castingTime": "Action",
    "range": "500 feet",
    "components": "V, S, M (a piece of tinder)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "10d10 Fire damage"
      ],
      [
        "Area",
        "60-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:detonate"
  },
  "Wail of the Banshee": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "12d10 Psychic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:wail-of-the-banshee"
  },
  "Jallarzi's Storm of Radiance": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a pinch of phosphorus)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "2d10 Radiant damage; 2d10 Thunder damage"
      ],
      [
        "Area",
        "40-foot-high Cylinder"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:jallarzi-s-storm-of-radiance"
  },
  "Negative Energy Flood": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, M (a broken bone and a square of black silk)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Constitution"
      ],
      [
        "Dice",
        "3d10 + 25 Necrotic damage; 3d10 Temporary Hit Points"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:negative-energy-flood"
  },
  "Tasha's Bubbling Cauldron": {
    "castingTime": "Action",
    "range": "5 feet",
    "components": "V, S, M (a gilded ladle worth 500+ GP)",
    "duration": "10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:tasha-s-bubbling-cauldron"
  },
  "Void Star": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "V, S, M (a fragment of a meteor)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "6d12 Necrotic damage; 3d12 Necrotic damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:void-star"
  },
  "Feign Interest": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V",
    "duration": "1 Hour",
    "source": "https://dnd2024.wikidot.com/spell:feign-interest"
  },
  "Tenser's Floating Disk": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a drop of mercury)",
    "duration": "1 Hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TensersFloatingDisk"
  },
  "Elminster's Elusion": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:elminster-s-elusion"
  },
  "Melf's Acid Arrow": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (powdered rhubarb leaf)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "4d4 Acid damage; 2d4 Acid damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MelfsAcidArrow"
  },
  "Nystul's Magic Aura": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a small square of silk)",
    "duration": "24 Hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#NystulsMagicAura"
  },
  "Conjure Constructs": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (a brass cog)",
    "duration": "Concentration, up to 10 minutes",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "3d6 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:conjure-constructs"
  },
  "Evard's Black Tentacles": {
    "castingTime": "Action",
    "range": "90 feet (20 ft. Square)",
    "components": "V, S, M (a tentacle)",
    "duration": "Concentration",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "3d6 Bludgeoning damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#EvardsBlackTentacles"
  },
  "Mordenkainen's Lucubration": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://dnd2024.wikidot.com/spell:mordenkainen-s-lucubration"
  },
  "Summon Dragon": {
    "castingTime": "Action",
    "range": "60 feet",
    "components": "V, S, M (an object with the image of a dragon engraved on it worth 500+ GP)",
    "duration": "Concentration, up to 1 hour",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "2d6 damage"
      ],
      [
        "Area",
        "30-foot Cone"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:summon-dragon"
  },
  "Drawmij's Instant Summons": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a sapphire worth 1,000+ GP)",
    "duration": "Until Dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DrawmijsInstantSummons"
  },
  "Illusory Dragon": {
    "castingTime": "Action",
    "range": "120 feet",
    "components": "S",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Wisdom"
      ],
      [
        "Area",
        "60-foot Cone"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:illusory-dragon"
  },
  "Moment of Prescience": {
    "castingTime": "Reaction, which you take when you fail a D20 Test or when a creature hits you with an attack roll",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://dnd2024.wikidot.com/spell:moment-of-prescience"
  },
  "Telepathy": {
    "castingTime": "Action",
    "range": "Unlimited",
    "components": "V, S, M (a pair of linked silver rings)",
    "duration": "24 hours",
    "source": "https://dnd2024.wikidot.com/spell:telepathy"
  },
  "Hindsight": {
    "castingTime": "10 minutes",
    "range": "500 feet",
    "components": "V, S, M (a tiny hourglass worth 500+ GP, which the spell consumes)",
    "duration": "Concentration, up to 1 hour",
    "source": "https://dnd2024.wikidot.com/spell:hindsight"
  },
  "Invulnerability": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a piece of adamantine worth 500+ GP, which the spell consumes)",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:invulnerability"
  },
  "Alustriel’s Mooncloak": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a moonstone worth 50+ GP)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Area",
        "20-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:alustriel-s-mooncloak"
  },
  "Leomund’s Lamentable Belaborment": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Intelligence"
      ],
      [
        "Area",
        "10-foot-radius Sphere"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:leomund-s-lamentable-belaborment"
  },
  "Deryan’s Helpful Homunculi": {
    "castingTime": "Action or Ritual",
    "range": "Self",
    "components": "V, S, M (powdered gemstones worth 100+ GP, which the spell consumes, and one set of Artisan’s Tools with which you have proficiency)",
    "duration": "8 hours",
    "source": "https://dnd2024.wikidot.com/spell:deryan-s-helpful-homunculi"
  },
  "Laeral’s Silver Lance": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a silver pin worth 250+ GP)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "3d10 Force damage"
      ],
      [
        "Area",
        "5-foot-wide Line"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:laeral-s-silver-lance"
  },
  "Sylune’s Viper": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S, M (a snake fang)",
    "duration": "1 hour",
    "facts": [
      [
        "Dice",
        "1d6 Force damage"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:sylune-s-viper"
  },
  "Songal’s Elemental Suffusion": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (a pearl worth 100+ GP)",
    "duration": "Concentration, up to 1 minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Area",
        "15-foot Emanation"
      ]
    ],
    "source": "https://dnd2024.wikidot.com/spell:songal-s-elemental-suffusion"
  },
  "Elminster’s Effulgent Spheres": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S, M (an opal worth 1,000 GP+)",
    "duration": "1 hour",
    "source": "https://dnd2024.wikidot.com/spell:elminster-s-effulgent-spheres"
  },
  "Simbul’s Synostodweomer": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 hour",
    "source": "https://dnd2024.wikidot.com/spell:simbul-s-synostodweomer"
  },
  "Tenser’s Floating Disk": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a drop of mercury)",
    "duration": "1 Hour",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#TensersFloatingDisk"
  },
  "Elminster’s Elusion": {
    "castingTime": "Bonus Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "source": "https://dnd2024.wikidot.com/spell:elminster-s-elusion"
  },
  "Melf’s Acid Arrow": {
    "castingTime": "Action",
    "range": "90 feet",
    "components": "V, S, M (powdered rhubarb leaf)",
    "duration": "Instantaneous",
    "facts": [
      [
        "Dice",
        "4d4 Acid damage; 2d4 Acid damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MelfsAcidArrow"
  },
  "Nystul’s Magic Aura": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a small square of silk)",
    "duration": "24 Hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#NystulsMagicAura"
  },
  "Evard’s Black Tentacles": {
    "castingTime": "Action",
    "range": "90 feet (20 ft. Square)",
    "components": "V, S, M (a tentacle)",
    "duration": "Concentration",
    "facts": [
      [
        "Saving throw",
        "Strength"
      ],
      [
        "Dice",
        "3d6 Bludgeoning damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#EvardsBlackTentacles"
  },
  "Leomund’s Secret Chest": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth 5,000+ GP, and a Tiny replica of the chest made from the same materials worth 50+ GP)",
    "duration": "Until Dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#LeomundsSecretChest"
  },
  "Mordenkainen’s Faithful Hound": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a silver whistle)",
    "duration": "8 Hours",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ],
      [
        "Dice",
        "4d8 Force damage"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MordenkainensFaithfulHound"
  },
  "Mordenkainen’s Private Sanctum": {
    "castingTime": "10 Minutes",
    "range": "120 feet (Square)",
    "components": "V, S, M (a thin sheet of lead)",
    "duration": "24 Hours",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#MordenkainensPrivateSanctum"
  },
  "Otiluke’s Resilient Sphere": {
    "castingTime": "Action",
    "range": "30 feet",
    "components": "V, S, M (a glass sphere)",
    "duration": "1 Minute",
    "facts": [
      [
        "Saving throw",
        "Dexterity"
      ]
    ],
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#OtilukesResilientSphere"
  },
  "Mordenkainen’s Lucubration": {
    "castingTime": "Action",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "source": "https://dnd2024.wikidot.com/spell:mordenkainen-s-lucubration"
  },
  "Drawmij’s Instant Summons": {
    "castingTime": "Action",
    "range": "Touch",
    "components": "V, S, M (a sapphire worth 1,000+ GP)",
    "duration": "Until Dispelled",
    "source": "https://www.dndbeyond.com/sources/dnd/br-2024/spell-descriptions#DrawmijsInstantSummons"
  }
};
