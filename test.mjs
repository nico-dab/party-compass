import assert from 'node:assert/strict';
import {classes, species} from './catalog.mjs';
import {advise, availableClasses, availableSubclasses, classByName, partyCoverage, rankSubclassesAcross} from './advisor.mjs';
import {detailsFor, expansionChoices, expansionSpells, featLevelsFor, featNotes, spellNotes} from './progression.mjs';
import {classProgression, classSpellDetails} from './class-progression.mjs';
import {strategyFor} from './strategy.mjs';
import {subclassSpells, subclassSpellChoices, subclassSpellcasting, subclassSources, subclassCastingProgression} from './progression.mjs';

const party = [
  {name:'Chip',className:'Paladin'},
  {name:'Peter',className:'Rogue'},
  {name:'Manish',className:'',possible:['Ranger','Wizard','Cleric']}
];
const options = {level:3,books:['PHB','Eberron','Ravenloft','Heroes of Faerun','Arcana Unleashed'],priority:'monk'};
const result = advise(party,options);

assert.equal(classes.length,13);
assert.equal(classes.reduce((sum, characterClass) => sum + characterClass.subs.length, 0),76);
assert.equal(species.length,10);
assert.equal(result.scenarios.length,3);
assert.deepEqual(result.scenarios.map(s=>s.members[2].className),['Ranger','Wizard','Cleric']);
assert.equal(result.ranked.length,13);
assert(result.scenarios[0].ranked.some(c=>c.className==='Monk'));
assert.notDeepEqual(result.scenarios[0].gaps,result.scenarios[2].gaps);

const monk = classByName('Monk');
assert.equal(rankSubclassesAcross(monk,party,options)[0].sub[0],'Warrior of Mercy');
assert(partyCoverage([{className:'Monk',subclass:'Warrior of Mercy'}],3).healing > partyCoverage([{className:'Monk',subclass:'Warrior of Mercy'}],2).healing);

const core = ['PHB'];
assert(!availableClasses(core).some(c=>c.name==='Artificer'));
assert(!availableSubclasses(classByName('Cleric'),core).some(s=>s[0]==='Grave Domain'));
assert(rankSubclassesAcross(classByName('Rogue'),party,{...options,books:core}).length===4);
const wizard = classByName('Wizard');
assert(availableSubclasses(wizard,options.books).some(sub=>sub[0]==='Necromancer'));
assert(!availableSubclasses(wizard,core).some(sub=>sub[0]==='Necromancer'));
assert(availableSubclasses(wizard,['PHB','Heroes of Faerun']).some(sub=>sub[0]==='Bladesinger'));
assert(detailsFor('Wizard','Necromancer').some(([level])=>level===14));
for (const c of classes) for (const sub of c.subs) {
  const rows = detailsFor(c.name,sub[0]);
  assert(rows.length >= 3, `${c.name}: ${sub[0]} needs a timeline`);
  assert(rows.every(([level,name,note],i)=>Number.isInteger(level) && level>=3 && level<=20 && name && note && (!i || level>=rows[i-1][0])), `Invalid timeline: ${sub[0]}`);
  if (sub[3]) {
    assert(sub[4]?.startsWith('https://dungeonmister.com/'), `Missing direct source: ${sub[0]}`);
    assert(expansionChoices[sub[0]]?.[0] && expansionChoices[sub[0]][1].length >= 2, `Missing choices: ${sub[0]}`);
  }
}
assert.equal(Object.keys(expansionChoices).length,28);
assert(Object.values(expansionChoices).every(([,feats])=>feats.every(name=>featNotes[name])));
assert(Object.values(expansionSpells).every(rows=>rows.every(([,names])=>names.every(name=>spellNotes[name]))));
assert(detailsFor('Artificer','Armorer')[0][2].includes('Dreadnaught'));
assert.equal(detailsFor('Fighter','Arcane Archer').at(-1)[0],18);
assert.equal(detailsFor('Paladin','Oath of the Noble Genies').at(-1)[0],20);
assert.equal(detailsFor('Monk','Warrior of the Mystic Arts')[1][0],6);
assert.deepEqual(featLevelsFor('Fighter'),[4,6,8,12,14,16]);
assert.deepEqual(featLevelsFor('Rogue'),[4,8,10,12,16]);
assert.deepEqual(featLevelsFor('Wizard'),[4,8,12,16]);
assert(expansionSpells['Hollow Warden'].find(([level])=>level===17)[1].includes('Steel Wind Strike'));
console.log('Party advisor checks passed');

// Catalog names are the UI lookup keys, including names that contain "the".
for (const c of classes) for (const sub of c.subs) {
  assert(subclassSources[sub[0]]?.startsWith('https://dungeonmister.com/'), `${sub[0]}: direct preferred source`);
  for (const [level, names] of subclassSpells[sub[0]] || []) {
    assert(Number.isInteger(level) && level >= 1 && level <= 20, `${sub[0]}: grant level`);
    assert(names.every(name => spellNotes[name]), `${sub[0]}: every named grant has a tooltip`);
  }
  for (const choice of subclassSpellChoices[sub[0]] || []) {
    assert(choice.name && choice.rows.every(([level,names]) => level >= 1 && names.every(name => spellNotes[name])), `${sub[0]}: alternative spell list`);
  }
}
for (const name of ['Oath of Devotion','Oath of Glory','Oath of the Ancients','Oath of Vengeance','Circle of the Moon','Circle of the Sea']) {
  assert(subclassSpells[name]?.length >= 4, `${name}: complete core bonus-spell levels`);
}
assert.equal(subclassSpellChoices['Circle of the Land'].length, 4);
assert.equal(subclassSpellChoices['Vestige Patron'].length, 4);
assert(subclassSpellcasting['Warrior of the Mystic Arts']);
for(const name of ['Eldritch Knight','Arcane Trickster','Warrior of the Mystic Arts']) {
  const casting = subclassCastingProgression[name];
  assert.equal(casting.levels.length,18);
  assert.deepEqual(casting.levels.filter(row=>row.newSpellRank).map(row=>row.level),[3,7,13,19]);
  assert.deepEqual(casting.levels[0].slots,[2,0,0,0]);
  assert.deepEqual(casting.levels.at(-1).slots,[4,3,3,1]);
  assert.equal(casting.levels.at(-1).prepared,13);
}
assert.equal(subclassCastingProgression['Arcane Trickster'].levels[0].cantrips,3);
assert.equal(subclassCastingProgression['Warrior of the Mystic Arts'].classList,'Sorcerer');
assert.equal(detailsFor('Wizard','Abjurer').find(row=>row[1]==='Spell Breaker')[0],10);
assert.equal(detailsFor('Ranger','Gloom Stalker').find(row=>row[1]==='Iron Mind')[0],7);
assert(detailsFor('Bard','College of Dance').find(row=>row[0]===14)[1].includes('Evasion'));
console.log('Subclass grants, sources, and corrected 2024 milestones passed');

for (const c of classes) {
  const shared = classProgression[c.name];
  assert(shared?.source?.startsWith('https://dungeonmister.com/'), `${c.name}: missing preferred class source`);
  assert.deepEqual(shared.levels.map(row => row.level), Array.from({length:20}, (_,i) => i + 1), `${c.name}: incomplete shared progression`);
  assert(shared.levels.every(row => row.features.every(feature => feature.name && feature.description)), `${c.name}: incomplete feature explanation`);
  for (const group of shared.spellList || []) {
    assert(group.level >= 1 && group.level <= 20, `${c.name}: invalid spell unlock`);
    for (const name of group.names) {
      const detail = classSpellDetails[name];
      assert(detail?.source && detail.rank === group.rank, `${name}: missing or mismatched spell metadata`);
      assert([...options.books,'D&D Beyond Drops'].includes(detail.book), `${name}: unknown book key ${detail.book}`);
    }
  }
  const advice = strategyFor(c.name);
  assert(advice.summary && advice.tips.length >= 2 && advice.sources.length, `${c.name}: missing class advice`);
  for (const sub of c.subs) {
    const pathAdvice = strategyFor(c.name, sub[0]);
    assert(pathAdvice.tips.length >= 2 && pathAdvice.summary.includes(sub[0]), `${sub[0]}: missing companion`);
    assert.notDeepEqual(pathAdvice.tips, advice.tips, `${sub[0]}: no path-specific advice`);
  }
}
console.log('All 13 class references and 76 play companions passed');
