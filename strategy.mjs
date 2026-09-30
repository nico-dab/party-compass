import {classes, guide} from './catalog.mjs';
import {expansionChoices, subclassGuideLinks} from './progression.mjs';

// Original play suggestions, not granted features or an external tier list.
// Dungeon Mister determines mechanics; RPGBOT is optional optimization reading.
const classAdvice = {
  Artificer: ['Build a useful toolkit, then give it a clear job.', 'Choose whether your items support your own role or fill a teammate’s equipment gap.', 'Keep a reliable turn that needs no spell slot; reserve magic for problems your tools cannot solve.'],
  Barbarian: ['Hold the dangerous space so your allies can work.', 'Use Rage for encounters where durability matters; plan how to reach another target.', 'Reckless Attack trades safety for accuracy. Check who can attack you before committing.'],
  Bard: ['Make the whole party’s best turns happen.', 'Prepare a mix of control, recovery, and social tools instead of several spells that solve the same problem.', 'Plan your Bonus Action before inspiring: movement, healing spells, and subclass options can compete for it.'],
  Cleric: ['Prevent trouble, then keep the party standing.', 'Choose one main Concentration spell for the encounter; a second one replaces it.', 'Save an emergency healing option, but use calm turns for support or control rather than topping off every small wound.'],
  Druid: ['Shape the battlefield and adapt between adventures.', 'Choose a Concentration plan before spending Wild Shape; check your form’s casting restrictions.', 'Discuss hazards and summoned allies with the party so your control does not block their route.'],
  Fighter: ['Make positioning and reliable attacks your specialty.', 'Match your weapon’s Mastery to the job: helping allies, controlling space, or dealing damage.', 'Use Action Surge when another action changes the encounter, and discuss Short Rests before exhausting your resources.'],
  Monk: ['Spend movement and Focus where they change a fight.', 'Plan an exit before entering melee; speed alone does not prevent opportunity attacks.', 'Compare another attack with a defensive Focus option before spending your Bonus Action.'],
  Paladin: ['Anchor the group and punish the right opening.', 'Stay where your aura can help allies without forcing everyone into one enemy blast.', 'Budget spell slots across support and smites; leave room in your Bonus Action plan for urgent healing.'],
  Ranger: ['Pick your quarry without losing sight of the battlefield.', 'Compare Hunter’s Mark with your other Concentration spells; you cannot maintain both.', 'Choose a ranged or melee plan, then account for marking, moving the mark, and subclass Bonus Actions.'],
  Rogue: ['Set up one reliable Sneak Attack and a safe next turn.', 'Check your Sneak Attack condition before moving; an ally’s position may be more useful than hiding.', 'Keep your Bonus Action available for escape when a damage-focused turn would leave you exposed.'],
  Sorcerer: ['Make a small spell selection work unusually well.', 'Pick Metamagic to match spells you actually use, then reserve points for encounters where it changes the outcome.', 'Carry a backup for an enemy that resists your preferred damage or ignores your favorite condition.'],
  Warlock: ['Build a reliable routine around a few powerful slots.', 'Choose invocations that support your usual attack, utility, or weapon plan.', 'Spend Pact Magic on effects that matter now, and agree on realistic Short Rest opportunities with the group.'],
  Wizard: ['Bring the right answer and protect the time to cast it.', 'Prepare control, defense, and utility alongside damage; your spellbook can cover several days’ needs.', 'Keep a safe position for Concentration and a response to pressure rather than spending every slot offensively.']
};

const coreAdvice = {
  'Path of the Berserker': ['Commit to a reachable priority target when using Reckless Attack; leave a route to the next enemy.', 'Build for accurate weapon hits and durability; more aggression also gives enemies more chances to hit you.'],
  'Path of the Wild Heart': ['Choose your animal options for the coming terrain and threats, not just your usual damage routine.', 'Tell allies whether this fight’s plan is durability, mobility, or helping the group surround a target.'],
  'Path of the World Tree': ['Stay near allies who can use your protection, then look for valuable repositioning opportunities.', 'Agree on destinations before moving an ally; separating a caster from danger may beat moving an enemy closer.'],
  'Path of the Zealot': ['Focus your pressure on a target the party needs removed while keeping recovery options in reserve.', 'Durability is permission to take a calculated risk, not to leave the rest of the party behind.'],
  'College of Dance': ['Plan where an inspired ally should move before spending Inspiration.', 'Use your unarmored mobility to support the front line without assuming you can absorb its attacks.'],
  'College of Glamour': ['Coordinate the party’s repositioning before using your protective Inspiration option.', 'Keep a useful spell for creatures that cannot be charmed; your theme should not become your only answer.'],
  'College of Lore': ['Use your extra spell choices to fill a party gap rather than duplicate its strongest caster.', 'Protect your Reaction for Cutting Words when stopping a dangerous result matters more than a small damage gain.'],
  'College of Valor': ['Decide whether this encounter calls for weapon pressure or keeping a control spell active.', 'Choose equipment and defensive options that support casting under pressure; armor does not remove Concentration risk.'],
  'Life Domain': ['Use enhanced healing to recover from meaningful damage while preserving slots for prevention and support.', 'Stay close enough to reach a fallen ally without standing in the same danger that dropped them.'],
  'Light Domain': ['Choose between area damage and a control spell based on enemy spacing.', 'Reserve your defensive Reaction for a hit that threatens Concentration or a vulnerable ally.'],
  'Trickery Domain': ['Plan a useful position for your duplicate before an encounter becomes crowded.', 'Use your expanded stealth and deception tools with the group; a solo infiltration needs an escape plan.'],
  'War Domain': ['Check whether a weapon attack, a spell, or helping an ally land a key attack has the biggest impact.', 'Plan Bonus Actions carefully so your extra weapon pressure does not displace urgent support.'],
  'Circle of the Land': ['Choose your land spell package for the expected adventure rather than its theme alone.', 'Use recovery features to support a long adventuring day, not to justify spending every slot in the first fight.'],
  'Circle of the Moon': ['Know your chosen form’s movement and attacks before the session to keep turns quick.', 'Choose when to establish magic and when to transform; check the subclass’s specific casting allowances.'],
  'Circle of the Sea': ['Pick a position where your sea aura can influence enemies without leaving you surrounded.', 'Leave allies a clear lane; close-range control works best when the group knows where foes may move.'],
  'Circle of the Stars': ['Pick your starry form for the encounter’s immediate need: pressure, recovery, or dependable Concentration.', 'Reassess your form choice between fights instead of treating one constellation as a permanent build.'],
  'Battle Master': ['Choose maneuvers with different jobs: accuracy, ally support, or enemy control.', 'Save a die for a decisive hit or dangerous enemy rather than spending one on every available attack.'],
  Champion: ['Build around dependable attacks and a weapon setup you enjoy using every round.', 'Your simple routine leaves room to watch positioning and help allies exploit openings.'],
  'Eldritch Knight': ['Favor spells that complement your weapons: defense, movement, and utility need less setup than competing attack plans.', 'Watch your Reaction budget when choosing between a defensive spell and an opportunity attack.'],
  'Psi Warrior': ['Spend psionic resources on preventing a dangerous hit or creating a useful opening.', 'Position to support an ally as well as your own target; telekinetic tools are useful beyond damage.'],
  'Warrior of Mercy': ['Use your mobility to reach the teammate who needs help while staying part of the fight.', 'Budget Focus between pressure and recovery; do not spend it all before allies take their turns.'],
  'Warrior of Shadow': ['Agree on a darkness plan with allies before obscuring the battlefield.', 'Use shadow mobility for access and escape; keep another plan for well-lit locations.'],
  'Warrior of the Elements': ['Use your elemental reach and movement to attack from a position that is hard to punish.', 'Coordinate pushes and pulls with allied hazards rather than moving enemies merely because you can.'],
  'Warrior of the Open Hand': ['Choose your strike’s control effect for the next ally’s turn, not just your own.', 'Use openings to retreat or isolate a threat while preserving enough Focus for defense.'],
  'Oath of the Ancients': ['Keep allies in your protective area when it matters, but spread out against threats the aura cannot solve.', 'Use control to limit enemy routes instead of chasing every target away from the group.'],
  'Oath of Devotion': ['Use your weapon-enhancing option when the encounter warrants it; review its activation before planning your turn.', 'Be the dependable anchor for allies who need protection from hostile conditions.'],
  'Oath of Glory': ['Use athletic mobility to reach an important position, not simply the most distant enemy.', 'Plan group movement so your speed and support options help slower allies arrive with you.'],
  'Oath of Vengeance': ['Choose a priority target the party can actually reach and exploit your focused pressure together.', 'Pursue only as far as your allies can support; winning a chase can still lose the formation.'],
  'Beast Master': ['Plan your companion’s position and command before deciding how to spend your Bonus Action.', 'Give the beast a job beyond damage: blocking a route or threatening space can help your whole party.'],
  'Fey Wanderer': ['Use your social strengths to cover conversations the party otherwise struggles with.', 'Keep a damage or support option for foes that ignore charm and fear.'],
  'Gloom Stalker': ['Scout the lighting and escape routes before committing to an ambush.', 'Build an ordinary daylight turn too; darkness advantages are campaign-dependent.'],
  Hunter: ['Use the information your hunting tools reveal to adjust the party’s attacks.', 'Choose your combat options for the enemies you face most often, then revisit that choice when the campaign changes.'],
  'Arcane Trickster': ['Use magic to improve access, distraction, or safety while retaining a reliable Sneak Attack plan.', 'Invest in Intelligence if you want enemies to fail spell saves; utility spells can support a different emphasis.'],
  Assassin: ['Coordinate the opening round with the whole party instead of relying on the DM to grant an ambush.', 'Use disguise and infiltration skills to create useful information before combat begins.'],
  Soulknife: ['Use telepathy to coordinate scouting while keeping a clear return route.', 'Keep track of psionic resources so one exploration challenge does not consume your combat flexibility.'],
  Thief: ['Discuss which usable objects and magic items the campaign actually offers before building around Fast Hands.', 'Keep your useful items accessible and check their action requirements before the fight.'],
  'Aberrant Sorcery': ['Choose a psychic and social role, but bring a backup for creatures your mental effects cannot influence.', 'Use your specialized casting resources deliberately; subtle influence still needs a plan for consequences.'],
  'Clockwork Sorcery': ['Keep your balancing tools for rolls where removing an advantage or disadvantage changes the stakes.', 'Plan defensive resource use before an ally is overwhelmed instead of spending every point on damage.'],
  'Draconic Sorcery': ['Build a strong theme around your dragon damage type while preparing an answer to resistance.', 'Your added resilience helps you survive pressure; safe casting positions still protect Concentration.'],
  'Wild Magic Sorcery': ['Agree with the DM on the current surge procedure before play so turns do not stall.', 'Leave space around allies when unpredictable magic could complicate the fight.'],
  'Archfey Patron': ['Choose useful teleport destinations before your turn: cover, a firing lane, or an ally in trouble.', 'Use mobility to keep a strong spell active instead of treating every teleport as a reason to approach danger.'],
  'Celestial Patron': ['Keep some healing resources available for a fallen ally while your ordinary attacks maintain pressure.', 'Split healing and Pact Magic spending so recovery does not consume your entire combat plan.'],
  'Fiend Patron': ['Fight where you can pressure weakened enemies without stealing focus from the party’s priority target.', 'Choose area spells when enemy spacing justifies them; keep a single-target routine for scattered fights.'],
  'Great Old One Patron': ['Use telepathy and mental magic to solve social or scouting problems before initiative.', 'Choose a fallback for mind-resistant foes, and coordinate control effects with allies who can exploit them.'],
  Abjurer: ['Build your defensive spell selection around threats the campaign actually presents.', 'Treat the ward as a resource for important pressure, not a reason to abandon cover.'],
  Diviner: ['Save a useful Portent result for a roll that can change the encounter.', 'Discuss information-gathering spells with the DM and turn their answers into a plan the party can use.'],
  Evoker: ['Place area spells deliberately; read exactly which effects your ally-protection feature covers.', 'Keep control and utility spells prepared so a fire-resistant enemy does not shut down your role.'],
  Illusionist: ['Ask how the DM handles illusion investigation and sensory details before depending on a trick.', 'Describe what enemies perceive, and keep a reliable combat spell for situations an illusion cannot solve.']
};

export function strategyFor(className, subclassName) {
  const characterClass = classes.find(item => item.name === className);
  const advice = classAdvice[className];
  if (!characterClass || !advice) return {summary: 'Choose a class to plan your play style.', tips: [], choices: [], sources: []};
  const subclass = characterClass.subs.find(item => item[0] === subclassName);
  const expansion = subclass && expansionChoices[subclassName];
  const specific = subclass && (coreAdvice[subclassName] || (expansion ? [expansion[0]] : []));
  return {
    summary: subclass ? `${subclassName}: ${subclass[1]}` : advice[0],
    tips: subclass ? [...specific, advice[2]] : advice.slice(1),
    choices: expansion ? [`Optional feat ideas: ${expansion[1].join(' or ')}. Check prerequisites and compare with an ability-score increase.`] : [],
    sources: [
      {label: 'Dungeon Mister · rules guide', url: subclass?.[4] || subclassGuideLinks[className] || guide},
      {label: 'RPGBOT · 2024 optimization perspective', url: 'https://rpgbot.net/2024-dnd/2024-dnd-meta/'}
    ],
    caveat: 'Play suggestions, not extra features or a tier ranking. Party, encounters, and DM rulings change what works best.'
  };
}
