import assert from 'node:assert/strict';
import {classProgression, classSpellDetails} from './class-progression.mjs';
import {subclassSpells, spellNotes, featNotes} from './progression.mjs';
import {spellGlossary} from './spell-glossary.mjs';
import {spellReference} from './reference-spell-notes.mjs';
import {referenceEquipment} from './reference-equipment.mjs';
import {referenceCreatures} from './reference-creatures.mjs';
import {referenceFeats} from './reference-feats.mjs';
import {skills} from './reference-catalog.mjs';
import {skillEntries, ruleTerms} from './reference-rules.mjs';
import {featureDetails} from './reference-feature-details.mjs';
import {spellMechanics} from './reference-spell-mechanics.mjs';

const key = name => name.normalize('NFKC').replace(/[’‘]/g,"'").trim().toLowerCase();
const details = new Set(Object.keys(classSpellDetails).map(key));
const notes = new Map([...Object.entries(spellNotes),...Object.entries(spellGlossary),...Object.entries(spellReference).map(([name,value])=>[name,value.summary])].map(([name,value])=>[key(name),value]));
const listed = new Set();
for (const data of Object.values(classProgression)) for (const row of data.spellList || []) row.names.forEach(name=>listed.add(key(name)));
for (const rows of Object.values(subclassSpells)) for (const [,names] of rows) names.forEach(name=>listed.add(key(name)));
assert.deepEqual([...listed].filter(name=>!details.has(name)),[], 'Every listed spell needs metadata');
assert.deepEqual([...listed].filter(name=>!notes.get(name)),[], 'Every listed spell needs an inline effect summary');
assert.deepEqual(Object.entries(spellReference).filter(([,item])=>!item.summary||['castingTime','range','components','duration'].some(field=>!item[field]||/(?:Range|Components|Duration):/.test(item[field]))),[], 'New spell facts must be complete and separated');

assert.equal(skills.length,18);
assert.equal(skillEntries.length,18);
assert(skillEntries.every(item=>item.facts.some(([label])=>label==='Example uses')));
assert(ruleTerms.some(item=>item.name==='Light Armor'&&item.facts.some(([label])=>label==='AC')));
for (const term of ruleTerms.filter(item=>['Simple Weapons','Martial Weapons'].includes(item.name))) {
  const names=term.facts.filter(([label])=>['Melee','Ranged'].includes(label)).flatMap(([,value])=>value.split(', '));
  assert.deepEqual(names.filter(name=>!referenceEquipment.some(item=>key(item.name)===key(name))),[],`${term.name} list entries need in-app stats`);
}
assert(featureDetails['Unbreakable Majesty'].facts.some(([label])=>label==='Save'));
assert.deepEqual([...details].filter(name=>!Object.keys(spellMechanics).some(keyName=>key(keyName)===name)),[], 'Every indexed spell needs casting fields and a direct rules link');
assert(Object.values(spellMechanics).every(item=>item.castingTime&&item.range&&item.components&&item.duration&&item.source&&!/cart|marketplace/i.test(item.source)));
assert.deepEqual(referenceFeats.map(item=>item.name).sort(),Object.keys(featNotes).sort());
assert.deepEqual(referenceEquipment.filter(item=>!item.summary||!item.source||!item.facts?.length),[]);
assert.deepEqual(referenceCreatures.filter(item=>!item.summary||!item.source||['Type','CR','AC','HP','Speed'].some(label=>!item.facts.some(([name])=>name===label))),[]);
const armor=referenceEquipment.find(item=>key(item.name)==='studded leather armor');
assert.deepEqual(Object.fromEntries(armor.facts),{AC:'12 + Dex',Strength:'—',Stealth:'—',Weight:'13 lb.',Cost:'45 GP'});
console.log(`Reference check passed: ${listed.size} spells, ${referenceFeats.length} feats, ${skills.length} skills, ${referenceEquipment.length} equipment, ${referenceCreatures.length} creatures.`);
