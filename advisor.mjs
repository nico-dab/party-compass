import {classes, roleNames, roleWeights} from './catalog.mjs';

const MAX_SCENARIOS = 64;
const defaultBooks = ['PHB', 'Eberron', 'Ravenloft', 'Heroes of Faerun', 'Arcana Unleashed'];

export const classByName = name => classes.find(c => c.name === name);
export const bookForClass = c => c.book || 'PHB';
export const bookForSubclass = (c, sub) => sub[5] || (c.book || 'PHB');
export const availableClasses = (books = defaultBooks) => classes.filter(c => books.includes(bookForClass(c)));
export const availableSubclasses = (c, books = defaultBooks) => c.subs.filter(s => books.includes(bookForSubclass(c,s)));

export function roleFor(member, level = 3) {
  const c = classByName(member?.className);
  if (!c) return {};
  const roles = {...c.roles};
  if (level >= 3) {
    const sub = c.subs.find(s => s[0] === member.subclass);
    for (const [role, value] of Object.entries(sub?.[2] || {})) roles[role] = (roles[role] || 0) + value;
  }
  return roles;
}

export function partyCoverage(members, level = 3) {
  const coverage = Object.fromEntries(Object.keys(roleNames).map(role => [role, 0]));
  for (const member of members) for (const [role, value] of Object.entries(roleFor(member, level))) coverage[role] += value;
  return coverage;
}

const need = (role, coverage) => Math.max(0, 1 - coverage[role]) * roleWeights[role];
const fitScore = (roles, coverage) => Object.entries(roles).reduce((sum, [role, value]) => sum + value * need(role, coverage), 0);
export const gapsFor = coverage => Object.keys(roleNames).filter(role => coverage[role] < .85).sort((a,b) => need(b,coverage) - need(a,coverage));
export const strengthsFor = (roles, coverage) => Object.entries(roles).filter(([role]) => coverage[role] < 1).sort((a,b) => b[1]*need(b[0],coverage) - a[1]*need(a[0],coverage)).slice(0,2).map(([role]) => roleNames[role].toLowerCase());

export function rankSubclasses(c, members, {level = 3, books = defaultBooks} = {}) {
  const coverage = partyCoverage(members, level);
  return availableSubclasses(c, books).map(sub => ({sub, score:fitScore(roleFor({className:c.name, subclass:sub[0]}, 3), coverage), reasons:strengthsFor(roleFor({className:c.name, subclass:sub[0]}, 3), coverage)})).sort((a,b) => b.score - a.score);
}

export function rankClasses(members, {level = 3, books = defaultBooks, priority = 'monk'} = {}) {
  const coverage = partyCoverage(members, level);
  return availableClasses(books).map(c => {
    const base = fitScore(c.roles, coverage);
    const subclassBonus = Math.max(0, ...availableSubclasses(c, books).map(s => fitScore(s[2] || {}, coverage)));
    const personal = priority === 'monk' && c.name === 'Monk' ? 1.4 : priority === 'support' ? (c.roles.support || 0)*.6 : priority === 'magic' ? (c.roles.arcane || 0)*.6 : priority === 'control' ? (c.roles.control || 0)*.6 : 0;
    return {className:c.name, score:base + .65*subclassBonus + personal, reasons:strengthsFor(c.roles,coverage)};
  }).sort((a,b) => b.score - a.score);
}

export function expandScenarios(members) {
  let scenarios = [{members:[], labels:[]}];
  for (const member of members) {
    const choices = (member.possible || []).filter(name => classByName(name));
    const options = member.className ? [member.className] : [...new Set(choices)];
    if (options.length && scenarios.length * options.length > MAX_SCENARIOS) return {tooMany:true, scenarios:[]};
    scenarios = options.length ? scenarios.flatMap(s => options.map(name => ({members:[...s.members,{...member,className:name,subclass:name===member.className?member.subclass:''}],labels:[...s.labels,...(options.length>1?[`${member.name || 'Teammate'}: ${name}`]:[])]}))) : scenarios.map(s => ({...s,members:[...s.members,member]}));
  }
  // ponytail: 64 scenarios keep the UI responsive; ask for narrower choices if a group exceeds this.
  return {tooMany:false, scenarios};
}

export function advise(members, options = {}) {
  const expanded = expandScenarios(members);
  if (expanded.tooMany) return {tooMany:true, scenarios:[], ranked:[]};
  const scenarios = expanded.scenarios.map(s => {
    const coverage = partyCoverage(s.members, options.level);
    return {...s, coverage, gaps:gapsFor(coverage), ranked:rankClasses(s.members, options)};
  });
  const counts = scenarios.length || 1;
  const ranked = availableClasses(options.books).map(c => {
    const scores = scenarios.map(s => s.ranked.find(r => r.className === c.name).score);
    const coverage = Object.fromEntries(Object.keys(roleNames).map(role => [role,scenarios.reduce((sum,s) => sum + s.coverage[role],0)/counts]));
    return {className:c.name, score:scores.reduce((a,b)=>a+b,0)/counts, reasons:strengthsFor(c.roles,coverage)};
  }).sort((a,b)=>b.score-a.score);
  return {tooMany:false, scenarios, ranked};
}

export function rankSubclassesAcross(c, members, options = {}) {
  const expanded = expandScenarios(members);
  if (expanded.tooMany) return [];
  const count = expanded.scenarios.length || 1;
  return availableSubclasses(c, options.books).map(sub => {
    const scores = expanded.scenarios.map(s => rankSubclasses(c,s.members,options).find(r => r.sub[0] === sub[0]).score);
    const coverage = Object.fromEntries(Object.keys(roleNames).map(role => [role,expanded.scenarios.reduce((sum,s)=>sum+partyCoverage(s.members,options.level)[role],0)/count]));
    return {sub, score:scores.reduce((a,b)=>a+b,0)/count, reasons:strengthsFor(roleFor({className:c.name,subclass:sub[0]},3),coverage)};
  }).sort((a,b)=>b.score-a.score);
}
