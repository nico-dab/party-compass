import {copyFile, mkdir} from 'node:fs/promises';

const files = ['index.html','styles.css','app.mjs','catalog.mjs','advisor.mjs','progression.mjs','class-progression.mjs','strategy.mjs','spell-glossary.mjs','sw.js','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'];
await mkdir('dist', {recursive:true});
await Promise.all(files.map(file=>copyFile(file, `dist/${file}`)));
