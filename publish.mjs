import {copyFile, mkdir} from 'node:fs/promises';

const files = ['index.html','styles.css','app.mjs','catalog.mjs','advisor.mjs','progression.mjs','class-progression.mjs','strategy.mjs','spell-glossary.mjs','reference-catalog.mjs','reference-equipment.mjs','reference-creatures.mjs','reference-feats.mjs','reference-spell-notes.mjs','reference-rules.mjs','reference-feature-details.mjs','reference-spell-mechanics.mjs','sw.js','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'];
await mkdir('dist', {recursive:true});
await Promise.all(files.map(file=>copyFile(file, `dist/${file}`)));
