// Writes the table of decks in README.md (between the DECKS markers) from showcases.json.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(readFileSync(join(root, 'showcases.json'), 'utf8'));
const titleOf = (slug) =>
  /^title:\s*(.+)$/m.exec(readFileSync(join(root, 'decks', slug, 'slides.md'), 'utf8'))?.[1].trim() ?? slug;
const cell = (s) => String(s).replace(/\|/g, '\\|');

const rows = catalog.map(
  (d) =>
    `| [${cell(titleOf(d.slug))}](decks/${d.slug}) | ${cell(d.blurb)} | ${d.variants ? 'all five' : d.theme} |`,
);
const table = ['| Deck | What it shows | Theme |', '| --- | --- | --- |', ...rows].join('\n');

const file = join(root, 'README.md');
const text = readFileSync(file, 'utf8');
writeFileSync(
  file,
  text.replace(/(<!-- DECKS -->)[\s\S]*?(<!-- \/DECKS -->)/, `$1\n${table}\n$2`),
);
console.log(`README.md lists ${catalog.length} decks.`);
