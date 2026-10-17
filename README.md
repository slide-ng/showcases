# slide.ng showcases

Decks made with [slide.ng](https://github.com/slide-ng/slide.ng): slides written in markdown, with Angular templates, components,
signals and pipes inside, plus the Slidev features you know (clicks, Magic Move, Monaco, Twoslash, KaTeX, Mermaid, drawing,
presenter view, PDF export).

Every deck is a normal slide.ng project in `decks/<name>/`: a `slides.md` and, where it needs them, `components/`, `setup/`, `styles/`,
`layouts/`, `layers/`, `snippets/` and `public/`. Read one next to its built version to see how a feature is written.

## Decks

<!-- DECKS -->
| Deck | What it shows | Theme |
| --- | --- | --- |
| [Angular Signals Workshop](decks/angular-workshop) | A hands-on signals workshop: live components, Twoslash types, Magic Move refactors and a runnable editor. | default |
| [Signals Deep Dive](decks/signals-deep-dive) | signal, computed, effect, linkedSignal, resource, model() and view queries, each running on its slide. | default |
| [Forms and DI](decks/forms-and-di) | Reactive and template-driven forms with @angular/forms, a root service shared across slides, host bindings and a directive in markdown. | moss |
| [Pipes and i18n](decks/pipes-and-i18n) | Angular's number, currency, date and text pipes in German, async and i18n pipes, and a custom pipe used straight from a slide. | paper |
| [Control Flow in Slides](decks/control-flow-torture) | @if, @for, @switch, @let and @defer written straight into markdown, nested and mixed with tables, code and clicks. | blueprint |
| [Animations and Styles](decks/angular-animations-and-styles) | animate.enter and animate.leave, view encapsulation, per-slide styles and CSS animations on clicks. | minimal |
| [Signals in Practice](decks/scaffold-flow) | The deck `slide-ng create` gives you, grown into a short talk on signals. | moss |
| [Clicks Masterclass](decks/clicks-masterclass) | Absolute and relative clicks, ranges, hide, nested lists, switches, fixed totals and click markers in notes. | default |
| [Motion and Transitions](decks/motion-and-transitions) | All seven slide transitions, view transitions, forward and backward pairs, slide-ng-motion and hand-drawn marks. | moss |
| [Refactoring in Six Moves](decks/magic-move-stories) | A cart total refactored in six Shiki Magic Moves: long stories, ranges, side-by-side blocks, snippets and clicks. | blueprint |
| [Types You Can Touch](decks/monaco-and-twoslash) | Editors in slides, diffs, code you can run in JavaScript and TypeScript, and Twoslash types. | moss |
| [One API, Twenty Languages](decks/polyglot-code) | One API in twenty languages: titles, line steps, diffs, scrolling blocks, snippet regions and code groups. | default |
| [The Diagram Zoo](decks/diagram-zoo) | Mermaid flowcharts, sequences, classes, states, ER diagrams and Gantt charts, in light and dark. | minimal |
| [Linear Algebra, Lecture 7](decks/math-lecture) | A 4:3 linear algebra lecture with KaTeX, stepped derivations and draggable vectors. | default |
| [Gradient Descent, Honestly](decks/math-heavy) | Gradient descent: math in titles, derivations one line per click, matrices and footnotes. | paper |
| [Markdown Extras](decks/markdown-extras) | A site file in markdown: footnotes, GitHub alerts, tables, task lists, keys, heading ids, image sizes, imported slides and HTML with markdown inside. | blueprint |
| [Layouts and Sizes](decks/layouts-and-sizes) | Every built-in layout on a square 1:1 canvas, from cover to iframe, with a table of contents per section. | paper |
| [Layouts and Sizes (portrait)](decks/layouts-and-sizes-portrait) | The same layouts on a 9:16 portrait canvas, for phones and vertical screens. | paper |
| [Presenter and Drawing](decks/presenter-and-drawing) | A talk about giving talks: presenter notes with clicks, a countdown, drawing, the laser pointer, custom keys and remote control. | minimal |
| [Every setup hook](decks/all-setup-hooks) | One slide per setup hook: Shiki, KaTeX, transformers, a preparser, Mermaid, Monaco, custom code runners, keys and the right-click menu. | default |
| [Caching at the Edge](decks/theme-switcher) | A talk on edge caching that builds unchanged with any of the five themes. | all five |
| [A Short History of Typography](decks/typography-history) | A short history of type in the paper theme: a contents page, marks, footnotes and a type specimen. | paper |
| [Kitchen Zine — Issue 3](decks/recipes-zine) | A kitchen zine with its own recipe layout, a running footer layer and reader notes in four scripts. | paper |
| [Brand Guide 2027](decks/brand-deck) | A brand guide for an invented roastery: its own layouts, fonts, a custom pipe and a PDF download. | paper |
| [Forest Carbon Field Report 2026](decks/forest-carbon-report) | A field report in the moss theme: KaTeX, Mermaid charts, a live plot table and a custom pipe. | moss |
| [Order Platform Architecture Review](decks/architecture-review) | An architecture review: topology diagrams, code imported from files, Twoslash and an outbox refactor. | blueprint |
| [Blueprints for Fast Angular](decks/conference-keynote) | A keynote on Angular performance with a stamp addon, review notes, PWA install and a PDF download. | blueprint |
| [Q3 Product Update](decks/product-update) | A quarterly product update that uses every built-in layout: big numbers, quotes, charts and a live changelog. | minimal |
| [Ship It](decks/ship-it) | How a talk ships as a site, a PDF, an offline folder and an installable app, and how this gallery goes out to GitHub Pages. | moss |
| [مخطط النقل في مدينة الواحة](decks/rtl-and-languages) | A transit plan in Arabic: right-to-left slides with left-to-right code, plus Japanese, German and Hebrew pages. | blueprint |
| [Robust by Design](decks/edge-cases) | Long titles, long lists, wide tables, braces, entities and file names with spaces, all laid out cleanly. | default |
<!-- /DECKS -->

## Themes

`themes/` holds the four example themes the decks use: **paper** (editorial, light), **moss** (dark green and clay), **blueprint**
(a drafting grid, light and dark) and **minimal**. A deck picks one with `theme: ../../themes/<name>` in its headmatter; decks without
a `theme:` use slide.ng's built-in default theme.

## Run a deck

```bash
npm install
npx slide-ng dev decks/angular-workshop/slides.md     # live, with the presenter view and the editor
npx slide-ng build decks/angular-workshop/slides.md   # a static site in dist/
npx slide-ng export decks/angular-workshop/slides.md  # a PDF
```

## Build the whole gallery

```bash
npm run build                        # every deck into site/<name>/ and the gallery page site/index.html
BASE=/slide.ng-showcases/ npm run build       # for a site served under /slide.ng-showcases/
npm run build:one -- typography-history
```

Decks with `download: true` also get a PDF when Chromium is available (`CHROME_PATH`, or the Playwright browser).
The workflow in `.github/workflows/pages.yml` builds everything and publishes it with GitHub Pages.

## Add a deck

1. Make a folder in `decks/` with a `slides.md`.
2. Add it to `showcases.json` (`slug`, `theme`, a one-line `blurb` and a few `tags`).
3. Run `node scripts/readme.mjs` to update the table above, and `npm run build:one -- <slug>` to check it.

## License

MIT
