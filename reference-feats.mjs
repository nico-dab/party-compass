// 2024 General feats currently suggested by the character planner.
// Each summary is original wording; direct links lead to the 2024 rules entry.
const wiki = 'https://dnd2024.wikidot.com/feat:';
const general = (name, prerequisite, ability, summary, slug = name.toLowerCase().replaceAll(' ', '-')) => ({
  name, category:'Feats', summary,
  facts:[['Prerequisite',prerequisite],['Ability Increase',ability]], source:wiki + slug
});

export const referenceFeats = [
  general('Fey Touched','Level 4+','Intelligence, Wisdom, or Charisma +1','Always prepare Misty Step and one level 1 Divination or Enchantment spell. Cast each once without a slot per Long Rest, or use your slots.'),
  general('Ritual Caster','Level 4+; Intelligence, Wisdom, or Charisma 13+','Intelligence, Wisdom, or Charisma +1','Always prepare a number of level 1 Ritual spells equal to your Proficiency Bonus; add one when it increases. Once per Long Rest, cast a prepared Ritual at its normal time without a slot.'),
  general('Heavy Armor Master','Level 4+; Heavy Armor Training','Constitution or Strength +1','While wearing Heavy armor, reduce Bludgeoning, Piercing, and Slashing damage from attacks by your Proficiency Bonus.'),
  general('War Caster','Level 4+; Spellcasting or Pact Magic','Intelligence, Wisdom, or Charisma +1','Gain Advantage on Concentration saves, perform Somatic components with occupied hands, and cast a one-action spell targeting only a departing creature instead of an Opportunity Attack.'),
  general('Speedy','Level 4+; Dexterity or Constitution 13+','Dexterity or Constitution +1','Speed rises 10 feet. Dashing ignores extra movement from Difficult Terrain that turn, and Opportunity Attacks against you have Disadvantage.'),
  general('Shield Master','Level 4+; Shield Training','Strength +1','Once on your turn after a melee weapon hit, bash the target with an equipped Shield to push it 5 feet or knock it Prone on a failed save. A Reaction can turn a successful Dexterity save for half damage into no damage.'),
  general('Resilient','Level 4+','One ability without save proficiency +1','Gain proficiency in saving throws using the ability score you increase.'),
  general('Inspiring Leader','Level 4+; Wisdom or Charisma 13+','Wisdom or Charisma +1','After a Short or Long Rest, inspire up to six allies within 30 feet, including yourself. Each gains Temporary HP equal to your level plus the modifier of the ability increased by this feat.'),
  general('Crossbow Expert','Level 4+; Dexterity 13+','Dexterity +1','Ignore crossbow Loading, load one without a free hand, and avoid close-range attack Disadvantage. A qualifying Light crossbow extra attack can add your ability modifier to damage.'),
  general('Sentinel','Level 4+; Strength or Dexterity 13+','Strength or Dexterity +1','Make an Opportunity Attack when a nearby creature Disengages or hits someone else. Your Opportunity Attack hits halt its movement for the turn.'),
  {...general('Grappler','Level 4+; Strength or Dexterity 13+','Strength or Dexterity +1','Once per turn, an Unarmed Strike hit during your Attack action can both deal damage and attempt a Grapple. You have Advantage attacking creatures you grapple and can move with one your size or smaller without extra movement.'),source:'https://www.dndbeyond.com/sources/dnd/br-2024/feats'},
  general('Great Weapon Master','Level 4+; Strength 13+','Strength +1','A Heavy weapon hit during your Attack action deals extra damage equal to your Proficiency Bonus. After a melee weapon critical hit or dropping a creature to 0 HP, attack with the same weapon as a Bonus Action.'),
  general('Skulker','Level 4+; Dexterity 13+','Dexterity +1','Gain 10-foot Blindsight and Advantage on Stealth checks to Hide during combat. A missed attack from hiding does not reveal your location.'),
  general('Piercer','Level 4+','Strength or Dexterity +1','Once per turn after dealing Piercing damage, reroll one damage die and use the new result. A Piercing critical hit gains one extra damage die.'),
  general('Shadow Touched','Level 4+','Intelligence, Wisdom, or Charisma +1','Always prepare Invisibility and one level 1 Illusion or Necromancy spell. Cast each once without a slot per Long Rest, or use your slots.'),
  general('Actor','Level 4+; Charisma 13+','Charisma +1','Gain Advantage on Deception and Performance checks when impersonating someone while disguised. Mimic sounds or speech; a listener can test Insight against your mimicry DC.')
];
