---
theme: ../../themes/blueprint
title: Markdown Extras
sheet: SHEET 19
---

# Markdown Extras

Footnotes, alerts, tables, task lists and more, on one site file

<!--
A tour of the markdown that goes beyond paragraphs and lists. Every slide is plain markdown in slides.md;
the running example is the site file for a small two-storey build, Kestrel Yard unit 4.
-->

---

# Footnotes

The steel beam over the studio deflects 11 mm under full load[^1], well within the limit for a floor
with a brittle finish[^2]. The check was repeated after the change to a 254 mm section[^3].

Write `[^1]` where the mark goes and `[^1]: text` anywhere on the slide: the notes are collected at the bottom.

[^1]: Measured at midspan on the load test of 14 March.
[^2]: Span / 360, the usual limit under a plastered ceiling.
[^3]: See the revised calculation on sheet 12.

<!-- Footnotes are numbered in the order they are used, not in the order they are written. -->

---

# GitHub alerts

<div class="grid grid-cols-2 gap-x-6">
<div>

> [!NOTE]
> The survey grid is set out from the **north-east** corner.

> [!TIP]
> Order the brick early: lead time is six weeks.

> [!IMPORTANT]
> Building control must see the footings before the pour.

</div>
<div>

> [!WARNING]
> The party wall is older than the drawings suggest.

> [!CAUTION]
> Do not cut the ring beam to run services.

</div>
</div>

<!-- The same five alert types GitHub renders: NOTE, TIP, IMPORTANT, WARNING and CAUTION. -->

---

# Tables

Column alignment comes from the colons in the divider row.

| Member    | Section    |  Load (kN) | Utilisation | Status     |
| :-------- | :--------: | ---------: | ----------: | ---------- |
| Beam B1   | `254UB37`  |       42.5 |        0.71 | ok         |
| Column C2 | `C30/37`   |      118.0 |        0.94 | **review** |
| Brace X3  | `L60x6`    |        7.2 |        0.38 | ok         |
| Lintel L4 | `100x225`  |       12.8 |        0.66 | ok         |

<!-- Left, centre, right: `:---`, `:---:`, `---:`. Inline code and bold work inside cells. -->

---

# Task lists and keys

<div class="grid grid-cols-2 gap-8">
<div>

### This week on site

- [x] Survey the plot ✅
- [x] Issue the setting-out drawing
- [ ] Building control visit
- [ ] Pour the strip footings 🏗️

</div>
<div>

### In the drawing tool

Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save the sheet, and <kbd>Shift</kbd> + <kbd>L</kbd> to lock a layer.

Emoji are typed as they are: 📐 🧱 🦺

</div>
</div>

<!-- `- [x]` and `- [ ]` make checkboxes. `<kbd>` is plain HTML. Emoji are characters, so type or paste them. -->

---

# HTML with markdown inside

<div class="grid grid-cols-2 gap-6">
<div class="border border-white/20 p-4">

### Ground floor

- **Kitchen** opens onto the yard
- Underfloor heating, `zone 1`
- [Finishes schedule](#finishes)

</div>
<div class="border border-white/20 p-4">

### First floor

1. Bedroom over the studio
2. Bathroom over the kitchen

<bp-note label="A">Roof light moved 400 mm east</bp-note>

</div>
</div>

<!-- Leave a blank line after the opening tag and before the closing one, and the markdown in between is rendered. -->

---

# Heading ids and classes

## Finishes {#finishes .dimensioned}

### Floors

Oak on the ground floor, carpet upstairs.

### Walls

Lime plaster throughout.

The link on the previous slide jumps to `#finishes`, and a style block on this slide draws the amber rule under it.

<style>
#finishes { color: var(--bp-amber); }
.dimensioned { display: inline-block; padding-bottom: 0.3rem; border-bottom: 2px dashed var(--bp-amber); }
</style>

<!-- `{#id .class}` at the end of a heading sets its id and classes. -->

---
layout: section
---

# Imported slides

The next three slides come from `pages/site-visit.md`

<style>
.bp-section h1 + p { margin-top: 1rem; color: var(--bp-muted); }
</style>

<!--
`src: ./pages/site-visit.md#1` takes the first slide of that file, `#2-3` the next two; keys set on the importing slide
(here `class: text-sm`) win over the imported ones. A slide with `hide: true` is left out of the deck.
-->

---
src: ./pages/site-visit.md#1
---

---
src: ./pages/site-visit.md#2-3
class: text-sm
---

---
hide: true
---

# Cost plan

Kept out of the deck until the client has signed off the numbers.

---

# Icons

<div class="grid grid-cols-3 gap-6 mt-6 text-center">
<div><carbon-rocket class="text-5xl" /><p>carbon-rocket</p></div>
<div><mdi-account-hard-hat class="text-5xl text-amber-400" /><p>mdi-account-hard-hat</p></div>
<div><ph-ruler class="text-5xl" /><p>ph-ruler</p></div>
<div><span class="i-mdi-crane text-5xl"></span><p>i-mdi-crane</p></div>
<div><span class="i-carbon:construction text-5xl"></span><p>i-carbon:construction</p></div>
<div><div class="i-mdi:home text-5xl inline-block"></div><p>i-mdi:home</p></div>
</div>

<!-- Icons from Carbon, MDI and Phosphor, written as tags or as classes. Colour and size follow the text. -->

---

# Image sizes

<div class="flex gap-6 items-end">
<figure class="m-0"><img src="/floor-plan.svg" class="w-32" /><figcaption>class w-32</figcaption></figure>
<figure class="m-0"><img src="/floor-plan.svg" class="w-56 shadow-lg" /><figcaption>class w-56</figcaption></figure>
<figure class="m-0">

![Floor plan](/floor-plan.svg){width=300}

<figcaption>markdown, {width=300}</figcaption>
</figure>
</div>

<style>
figcaption { font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; opacity: 0.7; margin-top: 0.4rem; }
</style>

<!-- `![alt](/file){width=300}` sets the size of a markdown picture; an `<img>` takes classes. -->

---

# Build sequence

<div class="columns-2 gap-10 text-sm">

1. Clear the site and strip the topsoil
2. Set out the grid lines and the levels
3. Pour the strip footings and the pads
4. Ground slab with membrane and insulation
5. Erect the ground floor steel frame
6. Fix the composite floor deck
7. Pour the first floor slab, cure seven days
8. External walls with cavity insulation
9. Roof trusses, membrane and tiles
10. Windows, doors and cladding
11. First fix of electrics and plumbing
12. Plaster and screed
13. Second fix and finishes
14. Snagging and hand-over

</div>

<!-- A long list in two columns: `columns-2` on a wrapping div keeps one numbered list flowing. -->

---
layout: center
class: text-center
---

# End of sheet

All of it plain markdown, in one `slides.md`
