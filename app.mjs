import {classes, species, guide, roleNames} from './catalog.mjs';
import {advise, availableClasses, availableSubclasses, bookForClass, bookForSubclass, classByName, rankSubclassesAcross} from './advisor.mjs';
import {clericDomains, clericSpellPlan, detailsFor, expansionChoices, expansionSpells, featLevelsFor, featNotes, graveDomainSpells, spellNotes, spellPlans as curatedSpellPlans, subclassGuideLinks} from './progression.mjs';

const $ = id => document.getElementById(id);
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || min));
const option = (value, selected, label = value) => `<option value="${escapeHtml(value)}" ${value === selected ? 'selected' : ''}>${escapeHtml(label)}</option>`;
const emptyMember = i => ({name:`Adventurer ${i}`, className:'', subclass:'', species:'', possible:[]});
const initial = {
  members:[
    {name:'Chip',className:'Paladin',subclass:'',species:'',possible:[]},
    {name:'Peter',className:'Rogue',subclass:'',species:'',possible:[]},
    {name:'Manish',className:'',subclass:'',species:'',possible:['Ranger','Wizard','Cleric']},
    {name:'You',className:'',subclass:'',species:'',possible:[]}
  ],
  reserve:[], level:3, books:['PHB','Eberron','Ravenloft','Heroes of Faerun','Arcana Unleashed'], priority:'monk', selectedClass:'', selectedSubclass:'', goal:'', browseAll:false, search:''
};

function cleanMember(member) {
  const legacy = member?.className === 'Ranger or caster';
  return {
    name:String(member?.name || '').slice(0,40),
    className:legacy ? '' : classByName(member?.className)?.name || '',
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
  state.level = clamp(state.level || 3,1,20);
  state.books = ['PHB', ...['Eberron','Ravenloft','Heroes of Faerun','Arcana Unleashed'].filter(book => state.books?.includes(book) || (!saved.catalogVersion && ['Heroes of Faerun','Arcana Unleashed'].includes(book)))];
  state.priority = ['monk','support','magic','control','open'].includes(state.priority) ? state.priority : 'monk';
  state.selectedClass = availableClasses(state.books).find(c => c.name === state.selectedClass)?.name || '';
  state.selectedSubclass = availableSubclasses(classByName(state.selectedClass) || {subs:[]},state.books).some(sub => sub[0] === state.selectedSubclass) ? state.selectedSubclass : '';
  state.goal = String(state.goal || '').slice(0,500);
  state.search = '';
  state.browseAll = false;
  return state;
}

let state = loadState();
const others = () => state.members.slice(0,-1).map(member => {
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
  try { localStorage.setItem('party-compass',JSON.stringify({catalogVersion:2,members:state.members,reserve:state.reserve,level:state.level,books:state.books,priority:state.priority,selectedClass:state.selectedClass,selectedSubclass:state.selectedSubclass,goal:state.goal})); } catch {}
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
  const allowed = availableClasses(state.books);
  $('party-members').innerHTML = state.members.map((member,index) => {
    const self = index === state.members.length - 1;
    const c = classByName(member.className);
    const subclasses = c ? availableSubclasses(c,state.books) : [];
    const unavailable = c && !allowed.some(item=>item.name===c.name);
    const unavailableSub = c?.subs.find(sub=>sub[0]===member.subclass) && !subclasses.some(sub=>sub[0]===member.subclass);
    return `<article class="member-card" data-index="${index}"><div class="member-head"><span class="member-avatar" aria-hidden="true">${escapeHtml((member.name || '?')[0].toUpperCase())}</span><input data-field="name" aria-label="Adventurer ${index+1} name" maxlength="40" value="${escapeHtml(member.name)}"><small>${self?'YOU':''}</small></div><div class="member-fields"><label>Class<select data-field="className" ${self?'disabled':''}>${option('',member.className,self?'Choose next':'Undecided')}${unavailable?option(c.name,member.className,`${c.name} · book off`):''}${allowed.map(item=>option(item.name,member.className)).join('')}</select></label><label>Species<input data-field="species" list="species-list" maxlength="60" value="${escapeHtml(member.species)}" placeholder="Choose later"></label></div>${unavailable?'<p class="field-warning">This class is not counted while its book is off.</p>':''}${!self && c ? `<div class="member-fields" style="margin-top:10px"><label>Subclass<select data-field="subclass">${option('',member.subclass,'Not chosen')}${unavailableSub?option(member.subclass,member.subclass,`${member.subclass} · book off`):''}${subclasses.map(sub=>option(sub[0],member.subclass)).join('')}</select></label></div>${unavailableSub?'<p class="field-warning">This subclass is not counted while its book is off.</p>':''}` : ''}${!self && !c ? `<label class="uncertain-field">Possible classes<input data-field="possible" value="${escapeHtml(member.possible.join(', '))}" placeholder="Ranger, Wizard, Cleric"><small>Separate class names with commas. “Caster” includes all allowed spellcasters.</small></label>` : ''}</article>`;
  }).join('') + `<datalist id="species-list">${species.map(name=>`<option value="${escapeHtml(name)}"></option>`).join('')}</datalist>`;
}

function renderBooks() {
  $('book-toggles').innerHTML = [['Eberron','Artificer'],['Ravenloft','Grave Domain'],['Heroes of Faerun','Bladesinger'],['Arcana Unleashed','Necromancer']].map(([book,example]) => `<label><input type="checkbox" value="${book}" ${state.books.includes(book)?'checked':''}> ${book}<span>${example}</span></label>`).join('');
}

function classCard(c, item, label = '') {
  const best = rankSubclassesAcross(c,others(),settings())[0];
  const why = best?.reasons?.length ? `${best.sub[0]} can add ${best.reasons[0]}` : item?.reasons?.length ? `Helps with ${item.reasons[0]}` : 'A flexible story choice';
  const badge = `${label || c.kind.toUpperCase()}${bookForClass(c)==='PHB'?'':` · ${bookForClass(c).toUpperCase()} EXPANSION`}`;
  return `<button type="button" class="class-card" data-class="${escapeHtml(c.name)}"><span class="icon" aria-hidden="true">${c.icon}</span><span class="eyebrow">${escapeHtml(badge)}</span><h3>${c.name}</h3><p>${c.line}</p><span class="fit">${escapeHtml(why)} →</span></button>`;
}

function renderClasses() {
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

const laterStrategy = {
  Artificer:'Choose whether your inventions cover protection, utility, or pressure, then coordinate that role with the party.',
  Barbarian:'Decide which threats you will hold in place and which enemies need your full attention.',
  Bard:'Build a dependable mix of inspiration, recovery, and control that your teammates can plan around.',
  Cleric:'Prepare for the threats your party struggles to answer, while keeping recovery ready for emergencies.',
  Druid:'Choose when to spend your magic on recovery, controlling space, or exploration.',
  Fighter:'Pick a clear combat job—protect, control, or focus damage—and choose later options around it.',
  Monk:'Spend Focus where movement, disruption, or support will change the outcome most.',
  Paladin:'Balance your place on the front line with the moments your party needs protection or recovery.',
  Ranger:'Use your scouting and positioning to set up safer fights and cover exploration gaps.',
  Rogue:'Lean into the skills and positioning that make your party more capable between fights.',
  Sorcerer:'Choose a small set of spells that answers the party’s biggest gaps and use them deliberately.',
  Warlock:'Shape your pact choices around the job your party needs you to repeat reliably.',
  Wizard:'Keep your spell choices flexible enough to answer problems the rest of the party cannot.'
};
const roleStrategy = {
  healing:'Keep a recovery option available for emergencies while contributing on turns when everyone is safe.',
  control:'Look for ways to limit enemy movement or choices before the party takes heavy damage.',
  frontline:'Take positions that protect allies and force enemies to deal with you.',
  scouting:'Give your party useful information before a fight or difficult conversation begins.',
  arcane:'Choose magic that answers problems the other characters cannot solve.',
  support:'Make your help predictable so teammates can plan their turns around it.',
  social:'Use your voice to open paths the party cannot win by fighting.'
};
const lateRoleStrategy = {
  healing:'Keep emergency recovery in your plan as threats become more dangerous.',
  control:'Coordinate your control with teammates who can capitalize on it.',
  frontline:'Choose later options that keep you effective when enemies hit harder.',
  scouting:'Turn what you learn ahead of the party into safer choices for everyone.',
  arcane:'Keep a magical answer ready for problems your party cannot solve with weapons.',
  support:'Make your best support option dependable across a long adventuring day.',
  social:'Use your growing influence to create options before combat starts.'
};

function renderPath() {
  const c = classByName(state.selectedClass);
  if (!c) return;
  const result = advise(others(),settings());
  const classRank = result.ranked.findIndex(item=>item.className === c.name);
  const classReasons = result.ranked[classRank]?.reasons || [];
  const ranked = rankSubclassesAcross(c,others(),settings());
  const chosen = ranked.find(item=>item.sub[0] === state.selectedSubclass);
  const focus = chosen || ranked[0];
  $('path-subtitle').textContent = `${c.name} · ${c.line}. Choose a path, then explore what it brings to your party.`;
  $('class-fit').innerHTML = `<span class="advisor-star" aria-hidden="true">✦</span><div><span class="kicker">PARTY FIT</span><p>${c.name === 'Monk' && state.priority === 'monk' ? 'You said Monk sounds fun.' : classRank < 3 ? 'A strong match for your party.' : 'Your choice still has a place in this party.'} ${focus?.reasons.length ? `${escapeHtml(focus.sub[0])} can help with ${escapeHtml(focus.reasons.join(' and '))}.` : classReasons.length ? `It brings ${escapeHtml(classReasons.join(' and '))}.` : 'Choose the style that tells the story you want.'}</p></div>`;
  $('subclass-grid').innerHTML = ranked.map((item,index) => {
    const capabilities = Object.entries(item.sub[2] || {}).filter(([,weight])=>weight >= 0.35).map(([role])=>roleNames[role]).filter(Boolean);
    return `<article class="subclass-card ${focus === item ? 'selected' : ''}"><button type="button" class="subclass-pick" data-subclass="${escapeHtml(item.sub[0])}" aria-pressed="${focus === item}" aria-controls="selected-path"><span class="badge">${index === 0 ? '✦ BEST PARTY FIT' : 'ANOTHER PATH'} · ${escapeHtml(bookForSubclass(c,item.sub))}</span><h3>${escapeHtml(item.sub[0])}</h3><p>${escapeHtml(item.sub[1])}</p><span class="why">${item.reasons.length ? `Helps with ${escapeHtml(item.reasons.join(' & '))}` : 'Follow the story that fits you'}${capabilities.length ? ` · ${escapeHtml(capabilities.join(' / '))}` : ''}</span></button></article>`;
  }).join('') || '<p>No subclasses from the selected books. Edit the books on the party screen.</p>';
  $('subclass-select').innerHTML = ranked.map(item=>option(item.sub[0],focus?.sub[0],`${item.sub[0]} · ${bookForSubclass(c,item.sub)}`)).join('');
  if (!focus) { $('selected-path').innerHTML = '<h2 id="selected-path-title">No available paths</h2><p>Enable this class’s books on the party screen.</p>'; return; }
  const sub = focus.sub;
  const source = sub[4] || subclassGuideLinks[c.name] || guide;
  const current = state.level < 3 ? `At level ${state.level}, practice your ${c.name.toLowerCase()} foundation. ${sub[0]} becomes your subclass at level 3.` : `At level ${state.level}, play into ${sub[1].charAt(0).toLowerCase()+sub[1].slice(1)} Keep your party role in view.`;
  const focusRole = Object.entries(sub[2] || {}).sort((a,b)=>b[1]-a[1])[0]?.[0] || focus.reasons[0] && Object.keys(roleNames).find(role=>roleNames[role].toLowerCase()===focus.reasons[0]);
  const middle = `${state.level < 4 ? 'At level 4, review your feat or Ability Score Improvement choice. ' : ''}${roleStrategy[focusRole] || 'Choose later options that make your role in the party more dependable.'}`;
  const longGame = `${laterStrategy[c.name]} ${lateRoleStrategy[focusRole] || ''}`.trim();
  const milestones = detailsFor(c.name,sub[0]);
  const nextMilestone = milestones.find(([level])=>level > state.level);
  const levelMarkup = milestones.length ? `<ol class="level-plan">${milestones.map(([level,name,description])=>`<li class="${level <= state.level ? 'reached' : ''}"><span class="plan-level">${level}</span><div><span class="feature-status">LEVEL ${level} · ${level <= state.level ? 'AVAILABLE AT YOUR LEVEL' : 'AHEAD'}</span><strong>${escapeHtml(name)}</strong><p>${escapeHtml(description)}</p></div></li>`).join('')}</ol>` : '<p>Open the source guide for feature levels and exact rules.</p>';
  const grantedSpells = expansionSpells[sub[0]] || (c.name === 'Cleric' ? (sub[0] === 'Grave Domain' ? graveDomainSpells : clericDomains[sub[0]]) : null);
  const thirdCaster = ['Warrior of the Mystic Arts','Eldritch Knight','Arcane Trickster'].includes(sub[0]);
  const selectedSpells = grantedSpells || (thirdCaster ? [[3,['Shield','Magic Missile']],[7,['Mirror Image']],[13,['Dispel Magic']],[19,['Greater Invisibility']]] : c.name === 'Cleric' ? clericSpellPlan.map(([level,_label,names])=>[level,names]) : (curatedSpellPlans[c.name] || []));
  const spellRows = selectedSpells.map(([level,names])=>{
    return `<li class="spell-level ${level <= state.level ? 'reached' : ''}"><span class="plan-level">${level}</span><div><strong>Level ${level} · ${grantedSpells ? 'Subclass spells' : 'Spell ideas'}</strong><div class="spell-list">${names.map(name=>{const note=spellNotes[name] || 'Open your source guide for the full spell rules.';return `<details class="spell-tip"><summary>${escapeHtml(name)}</summary><span class="spell-description">${escapeHtml(note)}</span></details>`;}).join('')}</div></div></li>`;
  }).join('');
  const spellMarkup = `<section class="path-section"><span class="kicker">MAGIC & UTILITY</span><h3>${grantedSpells ? 'Spells from your subclass' : 'Spell ideas to consider'}</h3><p class="section-note">${grantedSpells ? 'Subclass-granted spells at each class level. Follow the guide for preparation and casting rules.' : selectedSpells.length ? 'Optional examples, not automatically granted spells or a complete subclass spell list. Check your choices and prerequisites in the guide.' : 'This path centers on features and equipment. Check the guide for any individual cantrips or magical abilities.'}</p>${selectedSpells.length ? `<p class="section-note">Select a spell to read its summary.</p><ol class="level-plan spell-plan">${spellRows}</ol>` : ''}</section>`;
  const compareMarkup = ranked.length > 1 ? `<details class="compare-subclasses"><summary>Compare all ${ranked.length} paths</summary><div>${ranked.map(item=>`<article><strong>${escapeHtml(item.sub[0])}</strong><p>${escapeHtml(item.sub[1])}</p><span>${detailsFor(c.name,item.sub[0]).map(([level,name])=>`Lv ${level}: ${escapeHtml(name)}`).join(' · ') || 'See linked guide for feature-by-level details.'}</span></article>`).join('')}</div></details>` : '';
  const choices = expansionChoices[sub[0]];
  const featLevels = featLevelsFor(c.name);
  const nextFeat = featLevels.find(level=>level > state.level);
  $('selected-path').innerHTML = `
    <header class="path-overview"><span class="kicker">${escapeHtml(c.name.toUpperCase())} · ${escapeHtml(bookForSubclass(c,sub))}${sub[3] ? ' · EXPANSION' : ''}</span>
      <h2 id="selected-path-title">${escapeHtml(sub[0])}</h2><p class="summary">${escapeHtml(sub[1])}</p>
      <div class="path-meta"><span>${chosen ? '✓ Selected · saved on this device' : 'Suggested path · choose it to save'}</span><a class="source" href="${escapeHtml(source)}" target="_blank" rel="noopener noreferrer">Read the source guide ↗</a></div>
      ${chosen ? '' : `<button type="button" class="outline-button save-path" data-save-subclass="${escapeHtml(sub[0])}">Choose this path</button>`}
      <div class="path-at-a-glance"><div><span class="kicker">YOUR LEVEL</span><strong>${state.level}</strong><span>${state.level < 3 ? 'Subclass begins at level 3' : 'Features through this level are available'}</span></div><div><span class="kicker">NEXT SUBCLASS FEATURE</span><strong>${nextMilestone ? `Level ${nextMilestone[0]}` : 'Full subclass unlocked'}</strong><span>${escapeHtml(nextMilestone?.[1] || 'All listed subclass milestones are available')}</span></div></div>
    </header>
    <section class="path-section"><span class="kicker">WHAT YOU GAIN</span><h3>Your features, level by level</h3><p class="section-note">Levels refer to levels in ${escapeHtml(c.name)}, not total levels across multiple classes.</p>${levelMarkup}</section>
    <section class="path-section"><span class="kicker">BUILD YOUR WAY</span><h3>Choices & feat planning</h3><p>${escapeHtml(choices?.[0] || laterStrategy[c.name])}</p>
      <div class="choice-note"><strong>Ability scores or a feat</strong><p>Class levels ${featLevels.join(', ')}. ${nextFeat ? `Your next milestone is level ${nextFeat}.` : 'You have reached all these milestones.'} Level 19 adds an Epic Boon feat choice.</p></div>
      ${choices ? `<div class="choice-note"><strong>Optional feat ideas</strong>${choices[1].map(name=>`<h4>${escapeHtml(name)}</h4><p>${escapeHtml(featNotes[name])}</p>`).join('')}<p class="section-note">PHB examples from this path’s guide, not automatic rewards. Check ability, equipment, and level prerequisites before choosing.</p></div>` : '<p class="section-note">Compare an Ability Score Improvement with feats that support your preferred play style. Check prerequisites in your rulebook.</p>'}
    </section>
    ${spellMarkup}
    <section class="path-section"><span class="kicker">AT THE TABLE</span><h3>How to play this path</h3><div class="timeline"><div class="timeline-item"><strong>NOW · LEVEL ${state.level}</strong><span>${escapeHtml(current)}</span></div><div class="timeline-item"><strong>NEXT CHOICES</strong><span>${escapeHtml(middle)}</span></div><div class="timeline-item"><strong>LATER IN YOUR CAMPAIGN</strong><span>${escapeHtml(longGame)}</span></div></div></section>
    ${compareMarkup}<p class="section-note">These are short summaries and build suggestions. The linked guide and your DM determine exact rules and allowed books.</p>`;
  $('goal').value = state.goal;
}

function screenFromHash() {
  const hash = location.hash.slice(1);
  return ['party','classes','path'].includes(hash) && (hash !== 'path' || state.selectedClass) ? hash : 'party';
}
function renderScreen() {
  const screen = screenFromHash();
  for (const name of ['party','classes','path']) {
    $(`screen-${name}`).hidden = name !== screen;
    const button = document.querySelector(`.steps [data-screen="${name}"]`);
    button.classList.toggle('active',name===screen);
    button.setAttribute('aria-current',name===screen?'step':'false');
    button.disabled = name==='path' && !state.selectedClass;
  }
  if (screen === 'classes') renderClasses();
  if (screen === 'path') renderPath();
  window.scrollTo({top:0,behavior:'instant'});
}
const go = screen => {location.hash = screen; renderScreen();};
const render = () => {renderMembers();renderBooks();renderScreen();save();};

$('party-size').addEventListener('change', event => {
  const size = clamp(event.target.value,2,8);
  const self = state.members.pop();
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
  if (event.target.dataset.field === 'name' || event.target.dataset.field === 'species') {member[event.target.dataset.field]=event.target.value;save();}
});
$('party-members').addEventListener('change', event => {
  const card = event.target.closest('.member-card');
  if (!card) return;
  const member = state.members[Number(card.dataset.index)];
  const field = event.target.dataset.field;
  if (field === 'possible') member.possible = parsePossibilities(event.target.value);
  else if (field) member[field] = event.target.value;
  if (field === 'className') {member.subclass='';member.possible=[];}
  render();
});
$('party-next').addEventListener('click',()=>go('classes'));
$('edit-party').addEventListener('click',()=>go('party'));
$('change-class').addEventListener('click',()=>go('classes'));
document.querySelector('.steps').addEventListener('click',event=>{const button=event.target.closest('[data-screen]');if(button&&!button.disabled)go(button.dataset.screen);});
$('browse-all').addEventListener('click',()=>{state.browseAll=!state.browseAll;renderClasses();});
$('class-search').addEventListener('input',event=>{state.search=event.target.value;renderClasses();});
for (const id of ['suggested-grid','class-grid']) $(id).addEventListener('click',event=>{
  const button=event.target.closest('[data-class]');
  if(!button)return;
  if(state.selectedClass!==button.dataset.class)state.selectedSubclass='';
  state.selectedClass=button.dataset.class;
  state.members.at(-1).className=state.selectedClass;
  state.members.at(-1).subclass=state.selectedSubclass;
  save();go('path');
});
function chooseSubclass(name) {
  if (!availableSubclasses(classByName(state.selectedClass),state.books).some(sub=>sub[0] === name)) return;
  state.selectedSubclass=name;
  state.members.at(-1).subclass=name;
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
$('goal').addEventListener('input',event=>{state.goal=event.target.value;save();});
window.addEventListener('hashchange',renderScreen);
render();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
