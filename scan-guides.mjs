import {classes} from './catalog.mjs';
import {detailsFor, expansionChoices, subclassGuideLinks} from './progression.mjs';
import {mkdir, writeFile, access, readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';

// Research cache stays outside the offline app; no fetched HTML is rendered to users.
const directory = join(tmpdir(), 'party-compass-guides');
await mkdir(directory, {recursive:true});
const entries = classes.flatMap(c=>c.subs.filter(s=>s[3]).map(s=>({className:c.name,name:s[0],url:s[4] || subclassGuideLinks[c.name]})));
for (const url of new Set(entries.map(e=>e.url))) {
  const slug = new URL(url).pathname.split('/').filter(Boolean).at(-1);
  if (!process.argv.includes('--refresh') && await access(join(directory, `${slug}.html`)).then(()=>true,()=>false)) continue;
  const response = await fetch(url);
  if (!response.ok) throw Error(`${response.status}: ${url}`);
  const html = await response.text();
  await writeFile(join(directory, `${slug}.html`), html);
  console.log(`${slug}: ${html.length} bytes`);
}
await writeFile(join(directory,'index.json'), JSON.stringify(entries,null,2));
for (const entry of entries) {
  const slug = new URL(entry.url).pathname.split('/').filter(Boolean).at(-1);
  const html = await readFile(join(directory,`${slug}.html`),'utf8');
  // Guides use different heading ranks and sometimes nest links/spans inside headings.
  const headings = [...html.matchAll(/<h[2-4]\b[^>]*>([\s\S]*?)<\/h[2-4]>/gi)].map(match=>match[1].replace(/<[^>]*>/g,''));
  const levels = [...new Set(headings.flatMap(heading=>{
    const match=heading.match(/\b(?:Lv\.?|Level)\s*(\d+)/i);
    return match ? [Number(match[1])] : [];
  }))].sort((a,b)=>a-b);
  const local = [...new Set(detailsFor(entry.className,entry.name).map(([level])=>level))];
  if (!levels.length || levels.join() !== local.join()) throw Error(`${entry.name}: source levels ${levels}; local levels ${local}. Review this guide.`);
  if (!expansionChoices[entry.name]) throw Error(`Missing build choices: ${entry.name}`);
  console.log(`${entry.name}: verified feature levels ${levels.join(', ')}`);
}
console.log(`Checked ${entries.length} expansion subclasses against cached source headings. Use --refresh to fetch all guides again. Cache: ${directory}`);
