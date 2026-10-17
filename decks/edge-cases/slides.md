---
title: Robust by Design
---

# Robust by Design

Long titles, long lists, wide tables, odd characters: what slide.ng does with awkward content

<!--
Real decks are messy. This one collects the awkward bits and shows how each comes out.
-->

---

# Contents

<slide-ng-toc columns="2" />

---

# Quarterly review of the regional delivery network, with the warehouse consolidation plan, the new carrier contracts and the open questions from the last board meeting

A long title wraps onto as many lines as it needs, and the table of contents shows it in full.

---

# A long list, in columns

<div class="columns-3 text-sm gap-8">

1. Freeze the main branch
2. Bump the version
3. Update the changelog
4. Run unit tests
5. Run end-to-end tests
6. Check bundle size
7. Review open security notes
8. Rebuild the docs
9. Check broken links
10. Tag the release
11. Build the packages
12. Smoke-test the CLI
13. Try the starter deck
14. Export a PDF
15. Check the presenter page
16. Test on a phone
17. Test with a screen reader
18. Check dark mode
19. Publish to the registry
20. Deploy the docs site
21. Post the release notes
22. Close the milestone
23. Open the next milestone
24. Thank the contributors

</div>

Twenty-four steps fit when the list flows into three columns: `<div class="columns-3 text-sm">` around plain markdown.

---

# A wide table

<div class="text-xs">

| Region | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| North | 122 | 78 | 141 | 52 | 58 | 177 | 64 | 133 | 54 | 169 | 94 | 49 | **1,191** |
| Coast | 62 | 151 | 147 | 57 | 101 | 63 | 148 | 55 | 71 | 97 | 55 | 141 | **1,148** |
| Valley | 52 | 96 | 51 | 74 | 114 | 147 | 76 | 178 | 70 | 118 | 86 | 66 | **1,128** |
| Harbour | 88 | 135 | 64 | 180 | 56 | 55 | 92 | 167 | 176 | 149 | 120 | 159 | **1,441** |
| Uplands | 156 | 132 | 116 | 103 | 86 | 102 | 60 | 116 | 174 | 166 | 127 | 154 | **1,492** |
| Lakeside | 113 | 58 | 70 | 171 | 147 | 82 | 127 | 78 | 165 | 147 | 50 | 59 | **1,267** |
| Midlands | 120 | 127 | 129 | 167 | 156 | 57 | 63 | 109 | 161 | 56 | 55 | 119 | **1,319** |
| Islands | 154 | 112 | 138 | 128 | 45 | 158 | 130 | 83 | 69 | 166 | 55 | 95 | **1,333** |

</div>

Fourteen columns fit once the table sits in a `text-xs` wrapper; numeric columns are right-aligned with `---:`.

---

# Blocks in plain markdown

@let rows = [1, 2, 3, 4];

@for (r of rows; track r) {
@if (r % 2 === 0) {
<p class="text-sky-600">Row {{ r }} is even</p>
} @else {
<p class="text-amber-600">Row {{ r }} is odd</p>
}
}

```md
@for (r of rows; track r) {
@if (r % 2 === 0) { … } @else { … }
}
```

---

# Braces and @ in plain text

Angular reads `{{ }}`, but you can still print the braces: {{ '{{' }} name {{ '}}' }}

Prose with a single brace { and }, an email like team@example.com and @Component in a sentence are left alone.

The words @if (ready) and @for in a sentence stay words.

Inline code is always text: `{{ x }}`, `@if (a) { b }`, `@Component({})`, `<div>`.

```ts
@Component({ selector: 'greeting', template: '{{ name }}' })
export class Greeting {}
// @if (a) { } and {{ literal }} stay as written
```

---

# Entities and special characters

&copy; &amp; &lt;tag&gt; &mdash; &#x1F600;

Plain: 1 < 2 && 3 > 2, a & b, x<y, "quotes" and 'apostrophes'.

R&D, <not a tag, a -> b, a => b

---

# Markdown inside HTML

<div class="p-4 border rounded mb-4">

**Bold inside a div**, a [link](https://example.com) and a list:

- first
- second

</div>

<div class="p-4 border rounded">**Without blank lines around it, the text stays as written**</div>

<!--
Markdown inside an HTML block needs an empty line after the opening tag and before the closing one, as in Slidev.
-->

---

# Heading levels
## Second level, with an id and a class {#second .text-amber-600}
### Third level
#### Fourth level
##### Fifth level
###### Sixth level

<!--
`{#second .text-amber-600}` at the end of the second heading gives it an id and a class.
-->

---

# Unicode

Emoji: 🎉 🚀 👩‍💻 🇹🇷

<p dir="rtl">مرحبا بالعالم — שלום עולם</p>

CJK: 你好，世界。こんにちは世界。안녕하세요

Combining marks and ligatures: é ñ ü ﬁ

---

# File names with spaces

<div class="flex gap-8 items-end">
<div>

![quarterly chart](</chart (final) v2.svg>){width=320}

`chart (final) v2.svg`, sized with `{width=320}`

</div>
<div>

<img src="/floor plan.svg" width="200">

`floor plan.svg` in a plain `<img>`

</div>
</div>

---
hide: true
---

# Backup slide

Kept in the source for questions, left out of the deck with `hide: true`.

---

# Last slide

This is slide <slide-ng-current-no /> of <slide-ng-total />. The backup slide before it is not counted.
