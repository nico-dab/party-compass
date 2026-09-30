// Original, short rules notes for named features. The source remains the authority for edge cases.
const bard = 'https://www.dndbeyond.com/sources/dnd/br-2024/character-classes';
const glamour = 'https://dungeonmister.com/guides/classes-in-dungeons-dragons/college-of-glamour-bard-dnd-2024-guide/';
const dance = 'https://dungeonmister.com/guides/college-of-dance-bard-dnd-2024-guide/';
const lore = 'https://dungeonmister.com/guides/college-of-lore-bard-dnd-2024-guide/';
const valor = 'https://dungeonmister.com/guides/college-of-valor-bard-dnd-2024-guide/';

export const featureDetails = {
  'Bardic Inspiration': {
    summary: 'Inspire a creature so it can improve a failed d20 test.',
    facts: [['Action', 'Bonus Action'], ['Range', '60 feet; the creature must see or hear you'], ['Die', 'd6; d8 at Bard 5, d10 at 10, d12 at 15'], ['Duration', 'The die can be used within 1 hour'], ['Uses', 'Charisma modifier, minimum 1; all return after a Long Rest']], source: bard
  },
  'Font of Inspiration': {
    summary: 'Your Bardic Inspiration returns more often, and spell slots can restore uses.',
    facts: [['Rest', 'All expended uses return after a Short or Long Rest'], ['Conversion', 'Expend one spell slot to regain one use; no action required']], source: bard
  },
  Countercharm: {
    summary: 'Help a creature shake off an effect that charms or frightens it.',
    facts: [['Action', 'Reaction when you or a creature within 30 feet fails the save'], ['Effect', 'Reroll that save with Advantage; the new roll applies']], source: bard
  },
  'Magical Secrets': {
    summary: 'New and replacement Bard spell choices can come from four class lists.',
    facts: [['Lists', 'Bard, Cleric, Druid, Wizard'], ['Limit', 'Choose a spell level for which you have a spell slot'], ['Result', 'These choices count as Bard spells for you']], source: bard
  },
  'Superior Inspiration': {
    summary: 'Starting combat restores a small reserve of Bardic Inspiration.',
    facts: [['Trigger', 'Roll Initiative'], ['Effect', 'If you have fewer than two uses, regain uses until you have two']], source: bard
  },
  'Beguiling Magic + Mantle of Inspiration': {
    summary: 'Glamour magic can charm or frighten, while Bardic Inspiration can rally allies.',
    facts: [['Beguiling Magic', 'Charm Person and Mirror Image stay prepared; after an Enchantment or Illusion spell, a target can be charmed or frightened on a failed save'], ['Beguiling uses', 'One free use after a Long Rest; spend Bardic Inspiration for more'], ['Mantle action', 'Bonus Action; expend a Bardic Inspiration use'], ['Mantle targets', 'Creatures up to your Charisma modifier'], ['Temporary HP', 'Twice the Bardic Inspiration die roll'], ['Movement', 'Each target can use its Reaction to move without provoking Opportunity Attacks']], source: glamour
  },
  'Mantle of Majesty': {
    summary: 'Give repeated commands backed by your Glamour magic.',
    facts: [['Prepared spell', 'Command is always prepared'], ['Action', 'Cast Command as a Bonus Action without a spell slot'], ['Duration', 'Up to 1 minute while you maintain Concentration; recast as a Bonus Action on later turns'], ['Charmed target', 'A creature charmed by you automatically fails the Command save'], ['Uses', 'Once per Long Rest; expend a level 3+ spell slot to use it again']], source: glamour
  },
  'Unbreakable Majesty': {
    summary: 'Turn the first hit from a creature on its turn into a miss if it fails a save.',
    facts: [['Activation', 'Bonus Action'], ['Duration', '1 minute'], ['Trigger', 'The first time a creature hits you with an attack roll on its turn'], ['Save', 'Charisma against your Bard spell save DC (8 + proficiency bonus + Charisma modifier)'], ['Failure', 'That attack misses instead'], ['Uses', 'Once; returns after a Short or Long Rest']], source: glamour
  },
  'Bonus Proficiencies + Cutting Words': {
    summary: 'Gain more skills and spend Bardic Inspiration to disrupt an enemy roll.',
    facts: [['Skills', 'Gain proficiency in three skills of your choice'], ['Cutting Words action', 'Reaction; expend one Bardic Inspiration use'], ['Range', 'A creature you can see within 60 feet'], ['Trigger', 'The creature makes a damage roll or succeeds on an attack roll or ability check'], ['Effect', 'Roll your Bardic Inspiration die and subtract it from the triggering roll']], source: lore
  },
  'Magical Discoveries': {
    summary: 'Keep two additional spells prepared from other class lists.',
    facts: [['Choices', 'Two Cleric, Druid, or Wizard spells, in any combination'], ['Spell level', 'A cantrip or a spell level you can cast'], ['Preparation', 'Both stay prepared'], ['Changes', 'When you gain a Bard level, you can replace one with another eligible choice']], source: bard
  },
  'Peerless Skill': {
    summary: 'Use Bardic Inspiration on your own failed check or attack; keep the use if you still fail.',
    facts: [['Trigger', 'Your ability check or attack roll fails'], ['Effect', 'Roll and add one Bardic Inspiration die to the d20'], ['Cost', 'Expend a use only if the new result succeeds']], source: lore
  },
  'Dazzling Footwork': {
    summary: 'Your dancing improves unarmored defense and turns Bardic Inspiration into agile strikes.',
    facts: [['Armor Class', '10 + Dexterity modifier + Charisma modifier while unarmored and without a shield'], ['Unarmed damage', 'Bardic Inspiration die + Dexterity modifier, Bludgeoning'], ['Dancing checks', 'Advantage on ability checks involving dancing'], ['Agile Strikes', 'When you use Bardic Inspiration as an Action, Bonus Action, or Reaction, you can make one Unarmed Strike as part of that use']], source: dance
  },
  'Inspiring Movement + Tandem Footwork': {
    summary: 'Reposition two allies safely and help the group act sooner in combat.',
    facts: [['Movement trigger', 'An enemy ends its turn within 5 feet of you'], ['Movement cost', 'Reaction and one Bardic Inspiration use'], ['Movement', 'You move up to half your Speed without provoking Opportunity Attacks; one ally within 30 feet can do the same'], ['Initiative', 'At initiative, allies within 30 feet can add a roll of your Bardic Inspiration die']], source: dance
  },
  'Leading Evasion': {
    summary: 'Reduce damage from Dexterity saving throws for yourself and nearby creatures.',
    facts: [['Your save', 'No damage on a successful Dexterity save against an effect that allows half damage; half on a failed save'], ['Shared benefit', 'Choose creatures within 5 feet of you to receive the same protection']], source: dance
  },
  'Combat Inspiration + Martial Training': {
    summary: 'Improve an inspired ally’s defense or damage and gain martial equipment training.',
    facts: [['Armor', 'Medium armor and shields'], ['Weapons', 'Martial weapons; a weapon can serve as your spellcasting focus'], ['Inspiration', 'An ally can add the Bardic Inspiration die to weapon damage or Armor Class against one attack']], source: valor
  },
  'Bard::College of Valor::Extra Attack': {
    summary: 'Attack twice when taking the Attack action; a cantrip can replace one attack.',
    facts: [['Attacks', 'Two with one Attack action'], ['Replacement', 'Cast one cantrip with a casting time of an Action instead of one attack']], source: valor
  },
  'Battle Magic': {
    summary: 'Follow a spell cast with a weapon attack.',
    facts: [['Trigger', 'Cast a spell with a casting time of an Action'], ['Follow-up', 'Make one weapon attack as a Bonus Action']], source: valor
  },
  'Second Wind': {
    summary: 'Recover Hit Points in battle.',
    facts: [['Action', 'Bonus Action'], ['Healing', '1d10 + Fighter level Hit Points'], ['Uses', 'Two at Fighter level 1; one spent use returns after a Short Rest, all after a Long Rest']], source: bard
  },
  'Arcane Recovery': {
    summary: 'Recover some spent Wizard spell slots while resting.',
    facts: [['When', 'After a Short Rest'], ['Slot levels', 'Combined slot levels up to half your Wizard level, rounded up'], ['Limit', 'No recovered slot can be level 6 or higher']], source: bard
  },
  'Paladin’s Smite': {
    summary: 'Keep Divine Smite prepared and cast it once without spending a slot.',
    facts: [['Prepared spell', 'Divine Smite is always prepared'], ['Free casting', 'Once without a spell slot; returns after a Long Rest']], source: bard
  },
  Rage: {
    summary: 'Enter a short burst of strength and resilience.',
    facts: [['Action', 'Bonus Action while not wearing Heavy armor'], ['Duration', 'Through the end of your next turn; extend each round by attacking, forcing a save, or taking a Bonus Action, up to 10 minutes'], ['Uses', 'See the Barbarian level table; regain one after a Short Rest and all after a Long Rest'], ['Defense', 'Resistance to Bludgeoning, Piercing, and Slashing damage'], ['Offense', 'Add the Rage Damage bonus to Strength-based weapon and Unarmed Strike damage']], source: bard
  },
  'Sneak Attack': {
    summary: 'Add damage to one qualifying hit each turn.',
    facts: [['Frequency', 'Once per turn'], ['Starting damage', '1d6 at Rogue level 1; see the Rogue level table as it grows'], ['Weapon', 'Finesse or Ranged'], ['Setup', 'Advantage on the attack, or an ally within 5 feet of the target while the ally is active and you lack Disadvantage']], source: bard
  },
  'Cunning Action': {
    summary: 'Move, escape, or hide quickly.',
    facts: [['Action', 'Bonus Action on your turn'], ['Choices', 'Dash, Disengage, or Hide']], source: bard
  },
  'Wild Shape': {
    summary: 'Assume a Beast form you know.',
    facts: [['Action', 'Bonus Action to transform or end the form'], ['Duration', 'Hours equal to half your Druid level, or until you transform again, become Incapacitated, or die'], ['Form', 'Choose a known Beast form that meets your Druid level limits']], source: bard
  },
  'Monk’s Focus': {
    summary: 'Spend Focus Points on rapid strikes and defensive movement.',
    facts: [['Save DC', '8 + proficiency bonus + Wisdom modifier'], ['Refresh', 'All spent points return after a Short or Long Rest'], ['Flurry of Blows', 'Spend 1 point for two Unarmed Strikes as a Bonus Action'], ['Patient Defense', 'Disengage as a Bonus Action; spend 1 point to also Dodge'], ['Step of the Wind', 'Dash as a Bonus Action; spend 1 point to also Disengage and double jump distance for the turn']], source: bard
  }
};
