// Compact 2024 Basic Rules stat summaries. Creature variants use their exact published names.
const source = 'https://www.dndbeyond.com/sources/dnd/br-2024/creature-stat-blocks/';

export const referenceCreatures = [
  ['Bandit', 'Humanoid', '1/8', '12', '11', '30 ft.', 'Scimitar or light crossbow; the crossbow gives this low-threat foe a ranged option.'],
  ['Bugbear Warrior', 'Fey (Goblinoid)', '1', '14', '33', '30 ft.', 'Grab can grapple a nearby target; light hammer attacks have Advantage against a target it grapples.'],
  ['Cultist', 'Humanoid', '1/8', '12', '9', '30 ft.', 'Ritual sickle deals slashing plus necrotic damage.'],
  ['Gelatinous Cube', 'Ooze', '2', '6', '63', '15 ft.', 'Transparent cube that can engulf creatures and dissolve them with acid.'],
  ['Goblin Warrior', 'Fey (Goblinoid)', '1/4', '15', '10', '30 ft.', 'Scimitar or shortbow; can Disengage or Hide as a Bonus Action.'],
  ['Kobold Warrior', 'Dragon', '1/8', '14', '7', '30 ft.', 'Dagger attacker with Pack Tactics; sunlight hinders its attacks and ability checks.'],
  ['Mimic', 'Monstrosity', '2', '12', '58', '20 ft.', 'Imitates an object, adheres to creatures that touch it, and bites or strikes with a pseudopod.'],
  ['Ogre', 'Giant', '2', '11', '68', '40 ft.', 'Greatclub or javelin attacks; its greatclub hits for 13 average bludgeoning damage.'],
  ['Owlbear', 'Monstrosity', '3', '13', '59', '40 ft., climb 40 ft.', 'Makes two rend attacks, each dealing 14 average slashing damage.'],
  ['Skeleton', 'Undead', '1/4', '14', '13', '30 ft.', 'Shortsword or shortbow attacker; vulnerable to bludgeoning and immune to poison.'],
  ['Troll', 'Giant', '5', '15', '94', '30 ft.', 'Three rend attacks; regenerates 15 HP per turn unless hurt by acid or fire. Severed limbs may fight on.'],
  ['Wolf', 'Beast', '1/4', '12', '11', '40 ft.', 'Pack Tactics improves attacks near allies; its bite can knock a Medium or smaller target Prone.'],
  ['Zombie', 'Undead', '1/4', '8', '15', '20 ft.', 'Slam attack; Undead Fortitude can leave it at 1 HP after a non-radiant, non-critical killing blow.'],
  ['Adult Red Dragon', 'Dragon (Chromatic)', '17', '19', '256', '40 ft., climb 40 ft., fly 80 ft.', 'Fire-immune dragon with multiattack, a 60-foot cone of fire, spellcasting, and legendary actions.'],
  ['Fire Elemental', 'Elemental', '5', '13', '93', '50 ft.', 'Burn attacks ignite targets; fire aura harms creatures it passes through. Immune to fire and poison.'],
  ['Giant Spider', 'Beast', '1', '14', '26', '30 ft., climb 30 ft.', 'Bite adds poison damage; rechargeable web can Restrain a target.'],
  ['Hobgoblin Warrior', 'Fey (Goblinoid)', '1/2', '18', '11', '30 ft.', 'Longsword or longbow attacker; Pack Tactics grants Advantage when an ally is near the target.'],
  ['Vampire', 'Undead', '13', '16', '195', '40 ft., climb 40 ft.', 'Bite drains maximum HP; can charm and shape-shift, but sunlight and running water harm it.'],
  ['Young Green Dragon', 'Dragon (Chromatic)', '8', '18', '136', '40 ft., fly 80 ft., swim 40 ft.', 'Poison-immune dragon with multiattack and a 30-foot cone of poison breath.'],
].map(([name, type, cr, ac, hp, speed, summary]) => ({
  name, category: 'Creatures', summary, source,
  aliases: ({'Bugbear Warrior':['Bugbear'],'Goblin Warrior':['Goblin'],'Kobold Warrior':['Kobold'],'Hobgoblin Warrior':['Hobgoblin']})[name] || [],
  facts: [['Type', type], ['CR', cr], ['AC', ac], ['HP', hp], ['Speed', speed]],
}));
