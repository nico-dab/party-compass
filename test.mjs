import assert from 'node:assert/strict';
import {classes, species} from './catalog.mjs';
import {advise, availableClasses, availableSubclasses, classByName, partyCoverage, rankSubclassesAcross} from './advisor.mjs';
import {detailsFor, expansionChoices, expansionSpells, featLevelsFor, featNotes, spellNotes} from './progression.mjs';

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
