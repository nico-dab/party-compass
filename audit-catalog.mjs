import {classes, guide} from './catalog.mjs';
import {bookForSubclass} from './advisor.mjs';

const html = await fetch(guide).then(response => {
  if (!response.ok) throw Error(`Index returned ${response.status}`);
  return response.text();
});
const normalize = name => name.toLowerCase().replace(/\b(of|the)\b/g, '').replace(/[^a-z0-9]/g, '');
const books = {HoF:'Heroes of Faerun', FotA:'Eberron', RHW:'Ravenloft', AU:'Arcana Unleashed'};
const missing = [];
const counts = [];
let listed = 0;
for (const characterClass of classes) {
  const id = `${characterClass.name.toLowerCase()}-subclasses`;
  const section = html.slice(html.indexOf(`<h4 id="${id}"`));
  if (!section || section === html) throw Error(`Cannot find ${id} in source index`);
  const list = section.match(/<ul[^>]*>([\s\S]*?)<\/ul>/)?.[1];
  if (!list) throw Error(`Cannot read ${id} list`);
  const items = [...list.matchAll(/<li>([\s\S]*?)<\/li>/g)].map(([, item]) => item);
  if (!items.length) throw Error(`No subclasses parsed for ${characterClass.name}`);
  listed += items.length;
  counts.push(`${characterClass.name} ${items.length}/${characterClass.subs.length}`);
  for (const item of items) {
    const link = item.match(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
    const name = link?.[2].replace(/<[^>]*>/g, '').trim();
    const sub = characterClass.subs.find(option => normalize(option[0]) === normalize(name || ''));
    if (!sub) { missing.push(`${characterClass.name}: ${name || 'unreadable link'}`); continue; }
    const expectedBook = books[item.match(/\((HoF|FotA|RHW|AU)\)/)?.[1]] || 'PHB';
    if (bookForSubclass(characterClass, sub) !== expectedBook) missing.push(`${characterClass.name}: ${name} has the wrong book`);
    if (sub[4] && sub[4] !== link[1]) missing.push(`${characterClass.name}: ${name} has the wrong guide URL`);
  }
}
console.log(`Source index: ${listed} subclasses; local catalog: ${classes.reduce((sum, c) => sum + c.subs.length, 0)}. ${counts.join(', ')}`);
if (missing.length) throw Error(`Missing subclasses:\n${missing.join('\n')}`);
