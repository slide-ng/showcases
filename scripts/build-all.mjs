// Builds every deck in showcases.json into site/<slug>/ and writes the gallery page site/index.html.
// BASE (default /) is the path the site is served from, such as /slide.ng-showcases/ on GitHub Pages.
// `--only <slug>` builds one deck (and still writes the gallery).
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = join(root, 'site');
const base = (process.env.BASE ?? '/').replace(/\/?$/, '/');
const catalog = JSON.parse(readFileSync(join(root, 'showcases.json'), 'utf8'));
const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const cli = createRequire(import.meta.url).resolve('@slide-ng/core/bin/slide-ng.mjs');

const titleOf = (slug) => /^title:\s*(.+)$/m.exec(readFileSync(join(root, 'decks', slug, 'slides.md'), 'utf8'))?.[1].trim() ?? slug;
const themeArg = (theme) => (theme === 'default' ? 'default' : join(root, 'themes', theme));

function build(slug, out, extra = []) {
  console.log(`\n== ${out}`);
  rmSync(join(site, out), { recursive: true, force: true });
  execFileSync(
    process.execPath,
    [cli, 'build', join(root, 'decks', slug, 'slides.md'), '--out', join(site, out), '--base', `${base}${out}/`, ...extra],
    // Chromium (for the PDFs of `download: true` decks) cannot use its sandbox as root, as in a container.
    { stdio: 'inherit', env: process.getuid?.() === 0 ? { ...process.env, SLIDE_NG_NO_SANDBOX: '1' } : process.env },
  );
}

mkdirSync(site, { recursive: true });
const failed = [];
for (const deck of catalog) {
  if (only && deck.slug !== only) continue;
  for (const theme of deck.variants ?? [null]) {
    const out = theme ? `${deck.slug}/${theme}` : deck.slug;
    try {
      build(deck.slug, out, theme ? ['--theme', themeArg(theme)] : []);
    } catch {
      failed.push(out);
    }
  }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const card = (deck) => {
  const links = deck.variants
    ? deck.variants.map((t) => `<a href="${deck.slug}/${t}/">${esc(t)}</a>`).join(' · ')
    : `<a href="${deck.slug}/">Open the deck</a>`;
  const href = deck.variants ? `${deck.slug}/${deck.variants[0]}/` : `${deck.slug}/`;
  return `<article class="card theme-${esc(deck.theme)}">
  <h2><a href="${href}">${esc(titleOf(deck.slug))}</a></h2>
  <p>${esc(deck.blurb)}</p>
  <p class="tags">${deck.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</p>
  <p class="links">${links} · <a href="https://github.com/slide-ng/slide.ng-showcases/tree/main/decks/${deck.slug}">Source</a></p>
</article>`;
};

writeFileSync(
  join(site, 'index.html'),
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>slide.ng showcases</title>
<meta name="description" content="Decks made with slide.ng: markdown slides with Angular inside.">
<style>
:root { --bg: #f7f5f0; --fg: #1d1d1b; --muted: #5d5b55; --line: #dcd8ce; --card: #fff; --accent: #c3002f; }
@media (prefers-color-scheme: dark) { :root { --bg: #131313; --fg: #ecebe7; --muted: #a3a19b; --line: #2e2e2c; --card: #1c1c1b; --accent: #ff4f6d; } }
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.5 system-ui, sans-serif; }
header, main { max-width: 1120px; margin: 0 auto; padding: 0 16px; }
header { padding-top: 56px; padding-bottom: 24px; }
h1 { font-size: clamp(2rem, 5vw, 3.2rem); margin: 0 0 8px; letter-spacing: -0.02em; }
header p { color: var(--muted); max-width: 640px; margin: 0; }
a { color: inherit; }
main { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; padding-bottom: 64px; }
.card { background: var(--card); border: 1px solid var(--line); border-top: 4px solid var(--edge, var(--accent)); border-radius: 8px; padding: 18px 20px; display: flex; flex-direction: column; }
.card h2 { font-size: 1.15rem; margin: 0 0 6px; }
.card h2 a { text-decoration: none; }
.card h2 a:hover { text-decoration: underline; }
.card p { margin: 0 0 10px; color: var(--muted); }
.tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tags span { font-size: 12px; border: 1px solid var(--line); border-radius: 99px; padding: 1px 8px; }
.links { margin-top: auto !important; font-size: 14px; }
.theme-paper { --edge: #e4572e; } .theme-moss { --edge: #5b7f4a; } .theme-blueprint { --edge: #2c6cb0; } .theme-minimal { --edge: #888; } .theme-default { --edge: #dd0031; }
</style>
</head>
<body>
<header>
<h1>slide.ng showcases</h1>
<p>${catalog.length} decks written in markdown with Angular inside, built with <a href="https://github.com/slide-ng/slide.ng">slide.ng</a>. Press <kbd>→</kbd> to step through and <kbd>o</kbd> for the overview.</p>
</header>
<main>
${catalog.map(card).join('\n')}
</main>
</body>
</html>
`,
);
console.log(`\nWrote ${join('site', 'index.html')}.`);
if (failed.length) {
  console.error(`These decks did not build: ${failed.join(', ')}`);
  process.exit(1);
}
