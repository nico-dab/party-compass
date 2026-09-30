import {classes, species, guide, roleNames} from './catalog.mjs';
import {advise, availableClasses, availableSubclasses, bookForClass, bookForSubclass, classByName, rankSubclassesAcross} from './advisor.mjs';
import {clericSpellPlan, detailsFor, expansionChoices, featNotes, spellNotes, spellPlans as curatedSpellPlans, subclassGuideLinks, subclassSources, subclassSecondarySources, subclassSpells, subclassSpellChoices, subclassSpellcasting, subclassCastingProgression, subclassSpellNotes} from './progression.mjs';
import {classProgression, classSpellDetails} from './class-progression.mjs';
import {strategyFor} from './strategy.mjs';
import {spellGlossary} from './spell-glossary.mjs';
import {skills} from './reference-catalog.mjs';
import {referenceEquipment} from './reference-equipment.mjs';
import {referenceCreatures} from './reference-creatures.mjs';
import {referenceFeats} from './reference-feats.mjs';
import {spellReference} from './reference-spell-notes.mjs';

const $ = id => document.getElementById(id);
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const spellKey = name => String(name).normalize('NFKC').replace(/[’‘]/g,"'").trim().toLocaleLowerCase();
const spellReferenceByKey = new Map(Object.entries(spellReference).map(([name,note]) => [spellKey(name),note]));
const spellNotesByKey = new Map([...Object.entries(spellNotes),...Object.entries(spellGlossary),...Object.entries(spellReference).map(([name,note])=>[name,note.summary])].map(([name,note]) => [spellKey(name),note]));
const spellDetailsByKey = new Map(Object.entries(classSpellDetails).map(([name,detail]) => [spellKey(name),detail]));
const spellBookFor = name => spellDetailsByKey.get(spellKey(name))?.book || 'PHB';
const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || min));
const option = (value, selected, label = value) => `<option value="${escapeHtml(value)}" ${value === selected ? 'selected' : ''}>${escapeHtml(label)}</option>`;
const emptyMember = i => ({id:globalThis.crypto?.randomUUID?.() || `adventurer-${Date.now()}-${i}`,name:`Adventurer ${i}`,className:'',subclass:'',species:'',possible:[]});
const initial = {
  members:[
    {id:'chip',name:'Chip',className:'Paladin',subclass:'',species:'',possible:[]},
    {id:'peter',name:'Peter',className:'Rogue',subclass:'',species:'',possible:[]},
    {id:'manish',name:'Manish',className:'',subclass:'',species:'',possible:['Ranger','Wizard','Cleric']},
    {id:'nico',name:'Nico',className:'Monk',subclass:'',species:'',possible:[]}
  ],
  activePlayer:'nico', reserve:[], level:3, books:['PHB','Eberron','Ravenloft','Heroes of Faerun','Arcana Unleashed'], priority:'monk', selectedClass:'Monk', selectedSubclass:'', goal:'', browseAll:false, search:''
};

function cleanMember(member, index = 0) {
  const legacy = member?.className === 'Ranger or caster';
  const id = {Chip:'chip',Peter:'peter',Manish:'manish',You:'nico',Nico:'nico'}[member?.name] || `legacy-${index}`;
  return {
    id:String(member?.id || id),
    name:String(member?.name === 'You' ? 'Nico' : member?.name || '').slice(0,40),
    className:legacy ? '' : classByName(member?.className)?.name || (member?.name === 'You' ? 'Monk' : ''),
    subclass:String(member?.subclass || ''),
    species:String(member?.species || '').slice(0,60),
    possible:legacy ? ['Ranger','Wizard','Cleric'] : Array.isArray(member?.possible) ? member.possible.filter(name => classByName(name)) : []
  };
}

function loadState() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem('party-compass') || '{}') || {}; } catch {}
  const state = {...initial, ...saved};
  state.members = Array.isArray(saved.members) && saved.members.length >= 2 && saved.members.length <= 8 ? saved.members.map(cleanMember) : structuredClone(initial.members);
  state.reserve = Array.isArray(saved.reserve) ? saved.reserve.slice(0,7).map(cleanMember) : [];
  state.activePlayer = state.members.some(member => member.id === state.activePlayer) ? state.activePlayer : state.members.at(-1).id;
  state.level = clamp(state.level || 3,1,20);
  state.books = ['PHB', ...['Eberron','Ravenloft','Heroes of Faerun','Arcana Unleashed','D&D Beyond Drops'].filter(book => state.books?.includes(book) || (!saved.catalogVersion && ['Heroes of Faerun','Arcana Unleashed'].includes(book)))];
  state.priority = ['monk','support','magic','control','open'].includes(state.priority) ? state.priority : 'monk';
  const active = state.members.find(member => member.id === state.activePlayer);
  const legacyClass = saved.selectedClass || (active.name === 'Nico' && !active.className ? 'Monk' : active.className);
  if (!active.className && classByName(legacyClass)) active.className = legacyClass;
  state.selectedClass = availableClasses(state.books).find(c => c.name === active.className)?.name || '';
  state.selectedSubclass = availableSubclasses(classByName(state.selectedClass) || {subs:[]},state.books).some(sub => sub[0] === active.subclass) ? active.subclass : '';
  state.goal = String(state.goal || '').slice(0,500);
  state.search = '';
  state.browseAll = false;
  return state;
}

let state = loadState();
const currentMember = () => state.members.find(member => member.id === state.activePlayer) || state.members.at(-1);
const others = () => state.members.filter(member => member.id !== state.activePlayer).map(member => {
  const c = classByName(member.className);
  const enabled = c && state.books.includes(bookForClass(c));
  return {...member,
    className:enabled ? member.className : '',
    subclass:enabled && availableSubclasses(c,state.books).some(sub=>sub[0]===member.subclass) ? member.subclass : '',
    possible:member.possible.filter(name=>availableClasses(state.books).some(item=>item.name===name))
  };
});
const settings = () => ({level:state.level,books:state.books,priority:state.priority});
const save = () => {
  try { localStorage.setItem('party-compass',JSON.stringify({catalogVersion:3,members:state.members,reserve:state.reserve,activePlayer:state.activePlayer,level:state.level,books:state.books,priority:state.priority,selectedClass:state.selectedClass,selectedSubclass:state.selectedSubclass,goal:state.goal})); } catch {}
};

function parsePossibilities(value) {
  return [...new Set(value.replace(/\bor\b/gi,',').split(',').flatMap(part => {
    const name = part.trim();
    if (name.toLowerCase() === 'caster') return availableClasses(state.books).filter(c => c.kind === 'caster').map(c => c.name);
    return availableClasses(state.books).find(c => c.name.toLowerCase() === name.toLowerCase())?.name || [];
  }))];
}

function renderMembers() {
  $('party-size').value = state.members.length;
  $('party-level').value = state.level;
  $('priority').value = state.priority;
  if (!state.members.some(member => member.id === state.activePlayer)) state.activePlayer = state.members.at(-1).id;
  const active = currentMember();
  $('party-title').innerHTML = `Your party, <em>${escapeHtml(active.name)}</em>`;
  const allowed = availableClasses(state.books);
  const ordered = state.members.map((member,index) => ({member,index})).sort((a,b) => Number(b.member.id === state.activePlayer) - Number(a.member.id === state.activePlayer));
  $('party-members').innerHTML = ordered.map(({member,index}) => {
    const isActive = member.id === state.activePlayer;
    const c = classByName(member.className);
    const subclasses = c ? availableSubclasses(c,state.books) : [];
    const unavailable = c && !allowed.some(item=>item.name===c.name);
    const unavailableSub = c?.subs.find(sub=>sub[0]===member.subclass) && !subclasses.some(sub=>sub[0]===member.subclass);
    return `<article class="member-card ${isActive ? 'active-player' : ''}" data-index="${index}" data-player-id="${escapeHtml(member.id)}"><div class="member-head"><span class="member-avatar" aria-hidden="true">${escapeHtml((member.name || '?')[0].toUpperCase())}</span><input data-field="name" aria-label="Adventurer ${index+1} name" maxlength="40" value="${escapeHtml(member.name)}"><small>${isActive ? 'YOU' : ''}</small>${isActive ? '' : `<button type="button" class="profile-switch" data-make-mine aria-label="Switch to ${escapeHtml(member.name)}">Make mine</button>`}</div><div class="member-fields"><label>Class<select data-field="className">${option('',member.className,'Choose class')}${unavailable?option(c.name,member.className,`${c.name} · book off`):''}${allowed.map(item=>option(item.name,member.className)).join('')}</select></label><label>Species<input data-field="species" list="species-list" maxlength="60" value="${escapeHtml(member.species)}" placeholder="Choose later"></label></div>${unavailable?'<p class="field-warning">This class is not counted while its book is off.</p>':''}${c ? `<div class="member-fields subclass-fields"><label>Subclass<select data-field="subclass">${option('',member.subclass,'Choose subclass')}${unavailableSub?option(member.subclass,member.subclass,`${member.subclass} · book off`):''}${subclasses.map(sub=>option(sub[0],member.subclass)).join('')}</select></label></div>${unavailableSub?'<p class="field-warning">This subclass is not counted while its book is off.</p>':''}` : `<label class="uncertain-field">Possible classes<input data-field="possible" value="${escapeHtml(member.possible.join(', '))}" placeholder="Ranger, Wizard, Cleric"><small>Separate class names with commas. “Caster” includes all allowed spellcasters.</small></label>`}</article>`;
  }).join('') + `<datalist id="species-list">${species.map(name=>`<option value="${escapeHtml(name)}"></option>`).join('')}</datalist>`;
}

function renderBooks() {
  $('book-toggles').innerHTML = [['Eberron','Artificer'],['Ravenloft','Grave Domain'],['Heroes of Faerun','Bladesinger'],['Arcana Unleashed','Necromancer'],['D&D Beyond Drops','DM review · 2026 spells']].map(([book,example]) => `<label><input type="checkbox" value="${book}" ${state.books.includes(book)?'checked':''}> ${book}<span>${example}</span></label>`).join('');
}

function classCard(c, item, label = '') {
  const best = rankSubclassesAcross(c,others(),settings())[0];
  const why = best?.reasons?.length ? `${best.sub[0]} can add ${best.reasons[0]}` : item?.reasons?.length ? `Helps with ${item.reasons[0]}` : 'A flexible story choice';
  const badge = `${label || c.kind.toUpperCase()}${bookForClass(c)==='PHB'?'':` · ${bookForClass(c).toUpperCase()} EXPANSION`}`;
  return `<button type="button" class="class-card" data-class="${escapeHtml(c.name)}" aria-pressed="${state.selectedClass === c.name}"><span class="icon" aria-hidden="true">${c.icon}</span><span class="eyebrow">${escapeHtml(badge)}</span><h3>${c.name}</h3><p>${c.line}</p><span class="fit">${escapeHtml(why)} →</span></button>`;
}

function renderClasses() {
  renderClassReference();
  const result = advise(others(),settings());
  if (result.tooMany) {
    $('advisor-summary').textContent = 'There are more than 64 possible party combinations. Narrow the uncertain class lists on the party screen to compare them clearly.';
    $('scenario-list').innerHTML = '';
    $('suggested-grid').innerHTML = '';
    $('class-grid').innerHTML = '';
    return;
  }
  const top = result.ranked.slice(0,3);
  const gapCount = {};
  for (const scenario of result.scenarios) for (const gap of scenario.gaps.slice(0,2)) gapCount[gap] = (gapCount[gap] || 0) + 1;
  const primary = Object.keys(gapCount).sort((a,b)=>gapCount[b]-gapCount[a]).slice(0,2).map(role=>roleNames[role].toLowerCase());
  $('advisor-summary').textContent = `${result.scenarios.length > 1 ? `${result.scenarios.length} possible parties compared. ` : ''}${primary.length ? `The clearest openings are ${primary.join(' and ')}. ` : 'Your party covers the main roles well. '}Your favorite class can still be the right pick.`;
  $('scenario-list').innerHTML = result.scenarios.length > 1 ? result.scenarios.slice(0,6).map(s => `<div class="scenario-card"><strong>${escapeHtml(s.labels.join(' · ') || 'Possible party')}</strong><span>Try ${escapeHtml(s.ranked.slice(0,3).map(r=>r.className).join(', '))}</span></div>`).join('') + (result.scenarios.length > 6 ? `<div class="scenario-card"><strong>+${result.scenarios.length-6} more</strong><span>Narrow the possibilities to focus your comparison.</span></div>` : '') : '';
  const suggested = [...top];
  if (state.priority === 'monk' && !suggested.some(item=>item.className === 'Monk')) suggested.push(result.ranked.find(item=>item.className === 'Monk'));
  $('suggested-grid').innerHTML = suggested.filter(Boolean).map(item => classCard(classByName(item.className),item,item.className === 'Monk' && state.priority === 'monk' ? 'YOUR INTEREST' : '✦ PARTY SUGGESTION')).join('');
  const matches = result.ranked.filter(item=>`${item.className} ${classByName(item.className).line}`.toLowerCase().includes(state.search.toLowerCase()));
  $('class-grid').innerHTML = matches.map(item=>classCard(classByName(item.className),item)).join('') || '<p>No classes match that search.</p>';
  $('all-classes').hidden = !state.browseAll;
  $('browse-all').setAttribute('aria-expanded',String(state.browseAll));
  $('browse-all').innerHTML = state.browseAll ? 'Hide class list <span aria-hidden="true">−</span>' : 'Browse every class <span aria-hidden="true">＋</span>';
}

function spellList(names) {
  return `<div class="spell-list">${names.map(name => {
    const detail = spellDetailsByKey.get(spellKey(name));
    const bookTag = detail?.book && detail.book !== 'PHB' ? `<small class="spell-book">${escapeHtml({'Arcana Unleashed':'AU','Heroes of Faerun':'HoF'}[detail.book] || detail.book)}</small>` : '';
    return `<button type="button" class="spell-tip" data-spell-name="${escapeHtml(name)}" aria-haspopup="dialog">${escapeHtml(name)}${bookTag}</button>`;
  }).join('')}</div>`;
}

function showSpell(name) {
  const detail=spellDetailsByKey.get(spellKey(name));
  const extra=spellReferenceByKey.get(spellKey(name));
  const summary=spellNotesByKey.get(spellKey(name)) || detail?.summary || 'Effect summary is still being checked. Use the linked rules for the exact effect.';
  const facts=[['Level',detail?.rank===0?'Cantrip':detail?.rank!=null?String(detail.rank):'—'],['School',detail?.school],['Casting time',extra?.castingTime],['Range',extra?.range],['Components',extra?.components],['Duration',extra?.duration],['Concentration',detail?.concentration?'Yes':'No'],['Ritual',detail?.ritual?'Yes':'No'],['Sourcebook',detail?.bookLabel || detail?.book]];
  const dialog=$('spell-dialog');
  dialog.innerHTML=`<button type="button" class="dialog-close" data-close-spell aria-label="Close spell details">×</button><span class="kicker">SPELL LOOKUP</span><h2 id="spell-dialog-title">${escapeHtml(name)}</h2><dl class="reference-facts">${facts.filter(([,value])=>value).map(([label,value])=>`<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl><p>${escapeHtml(summary)}</p>${detail?.source?`<a href="${escapeHtml(detail.source)}" target="_blank" rel="noopener noreferrer">Full spell rules ↗</a>`:''}`;
  dialog.showModal();
}

function classSpellChoices(classNames, maxRank) {
  return classNames.map(className => {
    const rows = (classProgression[className]?.spellList || []).filter(row => row.rank <= maxRank)
      .map(row => ({...row,names:row.names.filter(name => state.books.includes(spellBookFor(name)))})).filter(row => row.names.length);
    return rows.length ? `<details class="class-spell-ideas"><summary>${escapeHtml(className)} spell list · ${rows.reduce((count,row)=>count+row.names.length,0)} choices</summary><p class="section-note">Choose a spell level your character can cast. These are options, not automatic grants.</p>${rows.map(row=>`<details class="class-spell-ideas"><summary>${row.rank===0?'Cantrips':`Level ${row.rank}`} · ${row.names.length}</summary>${spellList(row.names)}</details>`).join('')}</details>` : '';
  }).join('');
}

function referenceEntries() {
  const spells = new Map();
  const addSpell = name => { const key=spellKey(name); if (!spells.has(key)) spells.set(key,name); };
  for (const data of Object.values(classProgression)) for (const row of data.spellList || []) row.names.forEach(addSpell);
  for (const notes of Object.values(subclassSpells)) for (const [,names] of notes) names.forEach(addSpell);
  for (const name of spellNotesByKey.keys()) if (spellDetailsByKey.has(name)) addSpell(name);
  const spellItems = [...spells.values()].filter(name=>state.books.includes(spellBookFor(name))).map(name=>{
    const detail=spellDetailsByKey.get(spellKey(name));
    const summary=spellNotesByKey.get(spellKey(name)) || detail?.summary || `${detail?.rank===0?'Cantrip':`Level ${detail?.rank ?? '?'} spell`}${detail?.school?` · ${detail.school}`:''}. Open the linked spell rules for its full effect.`;
    return {name,category:'Spells',summary,detail,source:detail?.source};
  });
  return [...spellItems,...referenceFeats,...skills.map(item=>({...item,facts:[['Ability',item.ability]]})),...referenceEquipment.map(item=>({...item,kind:item.category,category:'Equipment'})),...referenceCreatures];
}

let referenceCategory='All';
function renderReference() {
  const entries=referenceEntries();
  const categories=['All','Spells','Feats','Skills','Equipment','Creatures'];
  $('reference-categories').innerHTML=categories.map(category=>`<button type="button" class="reference-filter ${referenceCategory===category?'active':''}" data-reference-category="${category}" aria-pressed="${referenceCategory===category}">${category}</button>`).join('');
  const query=$('reference-search').value.trim().toLocaleLowerCase();
  const matches=!query&&referenceCategory==='All'?[]:entries.filter(item=>(referenceCategory==='All'||item.category===referenceCategory) && (!query||`${item.name} ${(item.aliases||[]).join(' ')} ${item.summary} ${item.category} ${item.kind||''} ${item.ability||''} ${item.detail?.school||''}`.toLocaleLowerCase().includes(query)));
  $('reference-count').textContent=query ? `${matches.length} ${matches.length===1?'match':'matches'}${referenceCategory==='All'?'':' in '+referenceCategory}.` : 'Type to search. Choose a category to browse its entries.';
  $('reference-results').innerHTML=matches.length ? matches.slice(0,80).map(item=>item.category==='Spells'
    ? `<article class="reference-result"><span class="kicker">${item.detail?.rank===0?'CANTRIP':`LEVEL ${item.detail?.rank ?? '?'} SPELL`}${item.detail?.school?` · ${escapeHtml(item.detail.school)}`:''}</span>${spellList([item.name])}<p>${escapeHtml(item.summary)}</p></article>`
    : `<article class="reference-result"><span class="kicker">${escapeHtml(item.kind||item.category)}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.summary)}</p>${item.facts?.length?`<dl class="reference-facts">${item.facts.map(([label,value])=>`<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>`:''}${item.source?`<a href="${escapeHtml(item.source)}" target="_blank" rel="noopener noreferrer">Full rules ↗</a>`:''}</article>`).join('') : query||referenceCategory!=='All' ? '<p class="section-note">No matches. Try a shorter name or another category.</p>' : '<p class="section-note">Start typing to search everything, or choose a category to browse.</p>';
  if(matches.length>80) $('reference-count').textContent+=` Showing 80 of ${matches.length}; refine your search.`;
}

function spellRows(rows, label) {
  return `<ol class="level-plan spell-plan">${rows.map(([level,names]) => `<li class="${level <= state.level ? 'reached' : ''}"><span class="plan-level">${level}</span><div><strong>Level ${level} · ${escapeHtml(label)}</strong>${spellList(names)}</div></li>`).join('')}</ol>`;
}

function renderCompanion(id, c, sub) {
  const advice = strategyFor(c.name, sub?.[0]);
  const choices = sub && expansionChoices[sub[0]];
  const milestones = sub ? detailsFor(c.name, sub[0]) : [];
  const next = milestones.find(([level]) => level > state.level);
  $(id).innerHTML = `<span class="kicker">YOUR TABLE COMPANION</span><h2 tabindex="-1">${sub ? 'Make this path yours.' : 'Find your rhythm.'}</h2>
    <p class="companion-label">${escapeHtml(sub?.[0] || c.name)} · Level ${state.level}</p>
    ${sub && state.level < 3 ? '<p class="choice-note">Your subclass starts at level 3. These are future build ideas.</p>' : ''}
    <p>${escapeHtml(advice.summary)}</p><ul class="advice-list">${advice.tips.map(tip => `<li>${escapeHtml(tip)}</li>`).join('')}</ul>
    ${next ? `<div class="choice-note"><strong>Next · level ${next[0]}</strong><p>${escapeHtml(next[1])}</p></div>` : ''}
    ${choices ? `<details class="advice-extra"><summary>Optional feat ideas</summary><p>These are choices, not subclass grants. Check prerequisites and your class’s feat levels.</p>${choices[1].map(name => `<h3>${escapeHtml(name)}</h3><p>${escapeHtml(featNotes[name])}</p>`).join('')}</details>` : ''}
    <p class="section-note">${escapeHtml(advice.caveat || 'Play suggestions, not rules or a power ranking. Party needs and your table’s style matter.')}</p>
    <details class="advice-extra"><summary>Advice & sources</summary><ul>${advice.sources.map((source,index) => `<li><a href="${escapeHtml(index === 0 ? (sub ? subclassSources[sub[0]] || source.url : classProgression[c.name].source) : source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} ↗</a></li>`).join('')}</ul></details>`;
}

function renderClassReference() {
  const c = classByName(state.selectedClass);
  $('class-reference').hidden = !c;
  if (!c) return;
  const data = classProgression[c.name];
  const spellOptions = (data.spellList || []).map(list => ({...list,names:list.names.filter(name => state.books.includes(spellBookFor(name)))})).filter(list => list.names.length);
  const ideas = curatedSpellPlans[c.name] || (c.name === 'Cleric' ? clericSpellPlan.map(([level,_label,names]) => [level,names]) : []);
  $('selected-class').innerHTML = `<header class="path-overview"><span class="kicker">THE SHARED FOUNDATION · ${escapeHtml(bookForClass(c))}</span><h2 id="selected-class-title" tabindex="-1">${escapeHtml(c.name)}</h2><p class="summary">${escapeHtml(c.line)}</p>
    <p class="section-note">Every ${escapeHtml(c.name)} starts here. Subclass additions live in Your path. Levels below are levels in this class.</p>
    <ul class="class-basics">${(data.basics || []).map(note => `<li>${escapeHtml(note)}</li>`).join('')}</ul>
    <a class="source" href="${escapeHtml(data.source)}" target="_blank" rel="noopener noreferrer">Class rules & choices ↗</a>
    <div class="class-actions"><button type="button" class="primary-button" data-open-path>Explore ${escapeHtml(c.name)} subclasses →</button><button type="button" class="text-button companion-jump" data-companion="class-companion">Play suggestions ↓</button></div></header>
    <section class="path-section"><span class="kicker">LEVELS 1–20</span><h3>Your class, at every level</h3><p class="section-note">Gold markers are available at your level (${state.level}). Open a feature for a short explanation. Spell slots allow choices from your class spell list; they do not grant named spells.</p>
    <ol class="level-plan class-levels">${data.levels.map(row => `<li class="${row.level <= state.level ? 'reached' : ''}" ${row.level === state.level ? 'aria-current="step"' : ''}><span class="plan-level">${row.level}</span><div><span class="feature-status">LEVEL ${row.level}${row.level === state.level ? ' · YOU ARE HERE' : ''}</span>
      ${row.features.length ? row.features.map(feature => `<details class="feature-tip"><summary>${escapeHtml(feature.name)}</summary><p>${escapeHtml(feature.description)}</p>${c.name==='Bard'&&feature.name==='Magical Secrets'?`<p class="section-note">Explore the shared spell lists:</p>${classSpellChoices(['Bard','Cleric','Druid','Wizard'],5)}`:''}</details>`).join('') : '<p class="section-note">Your existing class features continue. Check Your path for subclass gains at this level.</p>'}
      ${row.spellcasting ? `<p class="spell-progression">${escapeHtml(row.spellcasting)}</p>` : ''}
      ${row.resources ? `<p class="resource-progression">${escapeHtml(row.resources)}</p>` : ''}
      ${row.grantedSpells?.length ? `<p class="section-note">Class-feature spell access · the feature above explains any conditions.</p>${spellList(row.grantedSpells)}` : ''}
      ${spellOptions.filter(list => list.level === row.level).map(list => `<details class="class-spell-ideas"><summary>${list.rank === 0 ? 'Cantrips' : `Level ${list.rank} spells`} · ${list.names.length} class options</summary><p class="section-note">${escapeHtml(data.spellListNote)} Options follow your selected books. This is when this spell level first becomes available; these options remain available at later levels.</p>${spellList(list.names)}</details>`).join('')}
      ${ideas.some(([level]) => level === row.level) ? `<details class="class-spell-ideas"><summary>Optional spell picks at this level</summary><p class="section-note">Examples to choose or prepare, not automatically granted spells.</p>${spellList(ideas.filter(([level]) => level === row.level).flatMap(([,names]) => names))}</details>` : ''}
      </div></li>`).join('')}</ol></section>
    <div class="class-actions"><button type="button" class="primary-button" data-open-path>Choose your subclass →</button></div>`;
  renderCompanion('class-companion', c);
}

function renderPath() {
  const c = classByName(state.selectedClass);
  if (!c) return;
  const ranked = rankSubclassesAcross(c,others(),settings());
  const chosen = ranked.find(item => item.sub[0] === state.selectedSubclass);
  const focus = chosen || ranked[0];
  $('path-subtitle').textContent = `${c.name} · Compare what each subclass adds to your shared class foundation.`;
  $('class-fit').innerHTML = `<span class="advisor-star" aria-hidden="true">✦</span><div><span class="kicker">PARTY FIT</span><p>${focus?.reasons.length ? `${escapeHtml(focus.sub[0])} can help with ${escapeHtml(focus.reasons.join(' and '))}.` : 'Choose the play style that suits your story.'} <button type="button" class="text-button" data-class-reference>Read shared ${escapeHtml(c.name)} features ↗</button></p></div>`;
  $('subclass-grid').innerHTML = ranked.map((item,index) => `<article class="subclass-card ${focus === item ? 'selected' : ''}"><button type="button" class="subclass-pick" data-subclass="${escapeHtml(item.sub[0])}" aria-pressed="${focus === item}" aria-controls="selected-path"><span class="badge">${index === 0 ? '✦ PARTY FIT' : 'ANOTHER PATH'} · ${escapeHtml(bookForSubclass(c,item.sub))}</span><h3>${escapeHtml(item.sub[0])}</h3><p>${escapeHtml(item.sub[1])}</p></button></article>`).join('');
  $('subclass-select').innerHTML = ranked.map(item => option(item.sub[0],focus?.sub[0],`${item.sub[0]} · ${bookForSubclass(c,item.sub)}`)).join('');
  if (!focus) { $('selected-path').innerHTML = '<h2 id="selected-path-title">No available paths</h2><p>Enable this class’s books on the party screen.</p>'; $('path-companion').innerHTML = ''; return; }
  const sub = focus.sub;
  const source = subclassSources[sub[0]] || sub[4] || subclassGuideLinks[c.name] || guide;
  const milestones = detailsFor(c.name, sub[0]);
  const grants = subclassSpells[sub[0]] || [];
  const alternatives = subclassSpellChoices[sub[0]] || [];
  const spellcasting = subclassSpellcasting[sub[0]];
  const casting = subclassCastingProgression[sub[0]];
  const castingMarkup = casting ? `<details class="casting-progression"><summary>Spellcasting level by level</summary><p class="section-note">${escapeHtml(casting.note)}</p><ol class="level-plan">${casting.levels.map(row => `<li class="${row.level <= state.level ? 'reached' : ''}"><span class="plan-level">${row.level}</span><div><strong>Level ${row.level}</strong><p>${escapeHtml(row.spellcasting)}</p>${row.newSpellRank || row.level === 3 ? (classProgression[casting.classList]?.spellList || []).filter(list => list.rank === row.newSpellRank || (row.level === 3 && list.rank === 0)).map(list => {const names=list.names.filter(name => state.books.includes(spellBookFor(name)));return names.length ? `<details class="class-spell-ideas"><summary>${list.rank === 0 ? 'Cantrip choices' : `Level ${list.rank} spell choices`} · ${escapeHtml(casting.classList)} list</summary><p class="section-note">Choose from spells your table allows; these are not automatic grants.</p>${spellList(names)}</details>` : '';}).join('') : ''}</div></li>`).join('')}</ol><a href="${escapeHtml(casting.source)}" target="_blank" rel="noopener noreferrer">Subclass spellcasting table ↗</a></details>` : '';
  const compare = ranked.length > 1 ? `<details class="compare-subclasses"><summary>Compare all ${ranked.length} paths side by side</summary><div>${ranked.map(item => `<article><strong>${escapeHtml(item.sub[0])}</strong><p>${escapeHtml(item.sub[1])}</p><span>${detailsFor(c.name,item.sub[0]).map(([level,name]) => `Lv ${level}: ${escapeHtml(name)}`).join(' · ')}</span>${subclassSpells[item.sub[0]]?.length ? `<p>Subclass spells</p>${spellList(subclassSpells[item.sub[0]].flatMap(([,names]) => names))}` : ''}</article>`).join('')}</div></details>` : '';
  $('selected-path').innerHTML = `<header class="path-overview"><span class="kicker">${escapeHtml(c.name.toUpperCase())} · ${escapeHtml(bookForSubclass(c,sub))}${sub[3] ? ' · EXPANSION' : ''}</span><h2 id="selected-path-title" tabindex="-1">${escapeHtml(sub[0])}</h2><p class="summary">${escapeHtml(sub[1])}</p>
    <div class="path-meta"><span>${chosen ? '✓ Saved as your path' : 'Preview · choose to save'}</span><a class="source" href="${escapeHtml(source)}" target="_blank" rel="noopener noreferrer">Subclass guide ↗</a>${subclassSecondarySources[sub[0]] ? `<a class="source" href="${escapeHtml(subclassSecondarySources[sub[0]])}" target="_blank" rel="noopener noreferrer">2024 rules cross-check ↗</a>` : ''}</div>
    ${chosen ? '' : `<button type="button" class="outline-button save-path" data-save-subclass="${escapeHtml(sub[0])}">Choose this path</button>`}<button type="button" class="text-button companion-jump" data-companion="path-companion">Play suggestions ↓</button></header>
    <section class="path-section"><span class="kicker">WHAT THIS PATH ADDS</span><h3>Your subclass features</h3><p class="section-note">Subclass-specific abilities and choices, in addition to your class features. Some spells or proficiencies are also available to other paths; they are not necessarily exclusive.</p>
    <ol class="level-plan">${milestones.map(([level,name,description]) => `<li class="${level <= state.level ? 'reached' : ''}"><span class="plan-level">${level}</span><div><span class="feature-status">LEVEL ${level} · ${level <= state.level ? 'AVAILABLE' : 'AHEAD'}</span><strong>${escapeHtml(name)}</strong><p>${escapeHtml(description)}</p>${sub[0]==='College of Lore'&&name==='Magical Discoveries'?'<button type="button" class="text-button" data-open-spell-choices="lore-spell-choices">Browse the two-spell choices ↓</button>':''}</div></li>`).join('')}</ol></section>
    ${grants.length || alternatives.length || spellcasting || subclassSpellNotes[sub[0]] ? `<section class="path-section"><span class="kicker">YOUR PATH’S MAGIC</span><h3>Subclass spells & choices</h3><p class="section-note">${escapeHtml(subclassSpellNotes[sub[0]] || 'Spells added by this subclass at each class level. Follow its guide for preparation and casting conditions.')}${grants.length || alternatives.length ? ' Select a spell for its summary.' : ''}</p>${spellcasting ? `<p>${escapeHtml(spellcasting)}</p>` : ''}${sub[0]==='College of Lore'?`<details id="lore-spell-choices" class="advice-extra"><summary>Magical Discoveries · pick two spells</summary><p class="section-note">At Bard level 6, choose from the Cleric, Druid, or Wizard lists up to spell level 3.</p>${classSpellChoices(['Cleric','Druid','Wizard'],3)}</details>`:''}${spellRows(grants,'Subclass spells')}${alternatives.map(list => `<details class="advice-extra"><summary>${escapeHtml(list.name)}</summary>${spellRows(list.rows,'Choice of spell list')}</details>`).join('')}</section>` : ''}
    ${castingMarkup}${compare}<p class="section-note">Planning summaries, not a complete character sheet. Shared feats, spell progression, and class features are in the class reference.</p><button type="button" class="outline-button" data-class-reference>Back to ${escapeHtml(c.name)} foundation</button>`;
  renderCompanion('path-companion', c, sub);
  $('goal').value = state.goal;
}

function screenFromHash() {
  const hash = location.hash.slice(1);
  return ['party','classes','path','reference'].includes(hash) && (hash !== 'path' || state.selectedClass) ? hash : 'party';
}
function renderScreen() {
  const screen = screenFromHash();
  for (const name of ['party','classes','path','reference']) {
    $(`screen-${name}`).hidden = name !== screen;
    const button = document.querySelector(`.steps [data-screen="${name}"]`);
    button.classList.toggle('active',name===screen);
    button.setAttribute('aria-current',name===screen?'step':'false');
    button.disabled = name==='path' && !state.selectedClass;
  }
  if (screen === 'classes') renderClasses();
  if (screen === 'path') renderPath();
  if (screen === 'reference') renderReference();
  window.scrollTo({top:0,behavior:'instant'});
}
const go = screen => {if (location.hash !== `#${screen}`) history.pushState(null,'',`#${screen}`); if (screen === 'party') renderMembers(); renderScreen();};
const render = () => {renderMembers();renderBooks();renderScreen();save();};

$('party-size').addEventListener('change', event => {
  const size = clamp(event.target.value,2,8);
  const self = state.members.splice(state.members.findIndex(member => member.id === state.activePlayer),1)[0];
  if (state.members.length > size-1) state.reserve = [...state.members.splice(size-1),...state.reserve];
  while (state.members.length < size-1) state.members.push(state.reserve.shift() || emptyMember(state.members.length+1));
  state.members.push(self);
  render();
});
$('party-level').addEventListener('change', event => {state.level=clamp(event.target.value,1,20);render();});
$('priority').addEventListener('change', event => {state.priority=event.target.value;render();});
$('book-toggles').addEventListener('change', event => {
  const book = event.target.value;
  state.books = event.target.checked ? [...state.books,book] : state.books.filter(item=>item!==book);
  if (!availableClasses(state.books).some(c=>c.name===state.selectedClass)) {state.selectedClass='';state.selectedSubclass='';}
  const selected = classByName(state.selectedClass);
  if (selected && !availableSubclasses(selected,state.books).some(sub=>sub[0]===state.selectedSubclass)) state.selectedSubclass='';
  render();
});
$('party-members').addEventListener('input', event => {
  const card = event.target.closest('.member-card');
  if (!card) return;
  const member = state.members[Number(card.dataset.index)];
  if (event.target.dataset.field === 'name' || event.target.dataset.field === 'species') {member[event.target.dataset.field]=event.target.value;if(member.id===state.activePlayer)$('party-title').innerHTML=`Your party, <em>${escapeHtml(member.name)}</em>`;save();}
});
$('party-members').addEventListener('click', event => {
  const button = event.target.closest('[data-make-mine]');
  if (!button) return;
  const card = button.closest('.member-card');
  const member = state.members.find(item => item.id === card.dataset.playerId);
  if (!member) return;
  state.activePlayer = member.id;
  state.selectedClass = member.className;
  state.selectedSubclass = member.subclass;
  render();
  $('party-title').focus({preventScroll:true});
});
$('party-members').addEventListener('change', event => {
  const card = event.target.closest('.member-card');
  if (!card) return;
  const member = state.members[Number(card.dataset.index)];
  const field = event.target.dataset.field;
  if (field === 'possible') member.possible = parsePossibilities(event.target.value);
  else if (field) member[field] = event.target.value;
  if (field === 'className') {member.subclass='';member.possible=[];if(member.id===state.activePlayer){state.selectedClass=member.className;state.selectedSubclass='';}}
  if (field === 'subclass' && member.id===state.activePlayer) state.selectedSubclass=member.subclass;
  render();
});
$('party-next').addEventListener('click',()=>go('classes'));
$('edit-party').addEventListener('click',()=>go('party'));
$('change-class').addEventListener('click',()=>go('classes'));
document.querySelector('.steps').addEventListener('click',event=>{const button=event.target.closest('[data-screen]');if(button&&!button.disabled)go(button.dataset.screen);});
$('browse-all').addEventListener('click',()=>{state.browseAll=!state.browseAll;renderClasses();});
$('class-search').addEventListener('input',event=>{state.search=event.target.value;renderClasses();});
$('reference-search').addEventListener('input',renderReference);
$('reference-categories').addEventListener('click',event=>{const button=event.target.closest('[data-reference-category]');if(button){referenceCategory=button.dataset.referenceCategory;renderReference();}});
for (const id of ['suggested-grid','class-grid']) $(id).addEventListener('click',event=>{
  const button=event.target.closest('[data-class]');
  if(!button)return;
  if(state.selectedClass!==button.dataset.class)state.selectedSubclass='';
  state.selectedClass=button.dataset.class;
  currentMember().className=state.selectedClass;
  currentMember().subclass=state.selectedSubclass;
  save();renderScreen();
  $('selected-class-title').focus({preventScroll:true});
  $('class-reference').scrollIntoView({block:'start',behavior:'instant'});
});
function chooseSubclass(name) {
  if (!availableSubclasses(classByName(state.selectedClass),state.books).some(sub=>sub[0] === name)) return;
  state.selectedSubclass=name;
  currentMember().subclass=name;
  save();renderPath();
  $('path-announcement').textContent = `${name} selected. Features and build choices updated.`;
  const heading = $('selected-path-title');
  if (heading.getBoundingClientRect().top < 0 || heading.getBoundingClientRect().top > innerHeight) heading.scrollIntoView({block:'start',behavior:'instant'});
}
$('subclass-grid').addEventListener('click',event=>{
  const button=event.target.closest('[data-subclass]');
  if(!button)return;
  chooseSubclass(button.dataset.subclass);
  [...$('subclass-grid').querySelectorAll('[data-subclass]')].find(item=>item.dataset.subclass === state.selectedSubclass)?.focus({preventScroll:true});
});
$('subclass-select').addEventListener('change',event=>chooseSubclass(event.target.value));
$('selected-path').addEventListener('click',event=>{
  const button=event.target.closest('[data-save-subclass]');
  if (!button) return;
  chooseSubclass(button.dataset.saveSubclass);
  $('selected-path-title').setAttribute('tabindex','-1');
  $('selected-path-title').focus({preventScroll:true});
});
document.addEventListener('click', event => {
  const spell=event.target.closest('[data-spell-name]');
  if (spell) {showSpell(spell.dataset.spellName);return;}
  if (event.target.closest('[data-close-spell]')) $('spell-dialog').close();
  const choicesButton=event.target.closest('[data-open-spell-choices]');
  if (choicesButton) {const choices=$(choicesButton.dataset.openSpellChoices);if(choices){choices.open=true;choices.scrollIntoView({block:'start',behavior:'smooth'});choices.querySelector('summary').focus({preventScroll:true});}}
  const companion = event.target.closest('[data-companion]');
  if (companion) {$(companion.dataset.companion).querySelector('h2').focus();}
  if (event.target.closest('[data-open-path]')) go('path');
  if (event.target.closest('[data-class-reference]')) {
    go('classes');
    $('selected-class-title').focus({preventScroll:true});
    $('class-reference').scrollIntoView({block:'start',behavior:'instant'});
  }
});
$('goal').addEventListener('input',event=>{state.goal=event.target.value;save();});
window.addEventListener('hashchange',renderScreen);
render();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
