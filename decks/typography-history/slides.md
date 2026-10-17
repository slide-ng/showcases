---
theme: ../../themes/paper
title: A Short History of Typography
titleTemplate: '%s | Type Talks'
author: Ada Setter
issue: No. 07
date: Autumn 2026
hideInToc: true
info: |
  ## A Short History of Typography
  From Gutenberg's press to variable fonts: five hundred years of letters in a forty-minute talk.
---

# A Short History of Typography

From movable type to variable fonts

<!-- Welcome everyone. This talk is about forty minutes, with time for questions at the end. -->

---
hideInToc: true
---

# In this issue

<slide-ng-toc columns="2" />

<!-- Two parts: the press, then the machines. Each part ends where the next technology begins. -->

---
layout: section
level: 1
no: I
---

# The Press

The fifteenth century changes everything

<!-- Section one: Gutenberg and the press. -->

---
level: 2
---

# Movable type, 1450

<slide-ng-clicks>

- Johannes Gutenberg combines **metal type**, oil-based ink and a screw press[^1]
- The *42-line Bible* is printed around 1455
- By 1500, presses run in more than **250** European cities
- Blackletter (Textura) is the first typeface style

</slide-ng-clicks>

[^1]: The screw press was adapted from wine and olive-oil presses.

<!--
Mention that movable type existed earlier in China and Korea.
[click] Gutenberg's innovation was the system, not just the type.
[click] The Bible: about 180 copies, some on vellum.
[click] Venice alone had over a hundred print shops by 1500.
[click] Blackletter imitated the handwriting of the scribes it replaced.
-->

---
layout: quote
level: 2
---

# "Typography is what language looks like."

Ellen Lupton, *Thinking with Type*

---
layout: fact
level: 2
---

# 20,000,000

books printed in Europe before 1501

<!-- Estimates of the incunabula run from eight to twenty million copies. Either way: more books in fifty years than scribes made in the thousand before. -->

---
layout: image-right
image: /sorts.svg
backgroundSize: cover
level: 2
---

# The type foundry

Punchcutters carved each letter in steel, struck it into a copper matrix, and cast lead type from it.

- One **punch** per glyph per size
- A full fount took months
- <span slide-ng-mark.circle.orange="1">Claude Garamond</span> sold his punches widely

<!--
Each piece of type is a "sort"; running out of one letter is where "out of sorts" comes from.
[click] Garamond's punches outlived him by centuries: most "Garamonds" today descend from them, or from Jean Jannon's copies.
-->

---
layout: two-cols-header
level: 2
---

# Old style vs. modern

::left::

### Old style

Garamond, 1530s

- Diagonal stress
- Low contrast between thick and thin
- Bracketed serifs

::right::

### Modern

Bodoni, 1790s

- Vertical stress
- <span slide-ng-mark.red.underline="1">Extreme contrast</span>
- Hairline, unbracketed serifs

::bottom::

> The shift follows better paper and finer engraving tools.

<!-- [click] Hairlines this thin only print well on smooth, calendered paper. -->

---
layout: section
level: 1
no: II
---

# The Machine Age

Hot metal, photo type, and the screen

---
level: 2
---

# Timeline of key typefaces

| Year | Typeface    | Designer            | Classification |
| ---- | ----------- | ------------------- | -------------- |
| 1532 | Garamond    | Claude Garamond     | Old style      |
| 1757 | Baskerville | John Baskerville    | Transitional   |
| 1798 | Bodoni      | Giambattista Bodoni | Didone         |
| 1896 | Akzidenz    | Berthold foundry    | Grotesque      |
| 1957 | Helvetica   | Max Miedinger       | Neo-grotesque  |
| 1984 | Chicago     | Susan Kare          | Bitmap         |

Ottmar Mergenthaler's Linotype machine (1886) let one operator set a whole line of hot metal at once.

<!-- Thomas Edison reportedly called the Linotype the eighth wonder of the world. -->

<style>
td, th { padding-top: 0.3rem; padding-bottom: 0.3rem; }
</style>

---
level: 2
---

# Helvetica and the Swiss style

<paper-pull by="Massimo Vignelli">
You can say "I love you" in Helvetica. And you can say it with Helvetica Extra Light if you want to be really fancy.
</paper-pull>

<div slide-ng-click class="mt-8">

> [!NOTE]
> Neue Haas Grotesk was renamed **Helvetica** in 1960 to sell better abroad.

</div>

<!-- [click] Helvetia is the Latin name of Switzerland. -->

---
level: 2
---

# Digital type, 1984 onward

1. <span slide-ng-mark.highlight.yellow="1">PostScript</span> (Adobe, 1984) describes outlines, not bitmaps
2. TrueType (Apple, 1991) answers it
3. OpenType (1996) merges the two
4. Variable fonts (2016) put a whole family in one file

<div slide-ng-click="2" class="text-sm mt-6 opacity-80">

Today a font is software: `font-variation-settings: "wght" 650;`

</div>

<!--
[click] Outlines meant one font for every size and every printer.
[click] A variable font stores the extremes of each axis and interpolates everything in between.
-->

---
level: 2
---

# One family, many voices

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div><div class="specimen" style="font-weight: 200">Ag&amp;</div><div class="caption">Light · 200</div></div>
<div><div class="specimen" style="font-weight: 400">Ag&amp;</div><div class="caption">Regular · 400</div></div>
<div><div class="specimen" style="font-weight: 600">Ag&amp;</div><div class="caption">Semibold · 600</div></div>
</div>

<p class="mt-8 text-center">This deck is set in Fraunces, a variable serif: weight, optical size and "softness" are axes of a single font.</p>

<style>
.specimen { font-family: 'Fraunces', serif; font-size: 6rem; line-height: 1; color: var(--paper-ink); }
.caption { margin-top: 0.75rem; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--paper-muted); }
</style>

<!-- Point at the ampersand: the same drawing gets heavier, the contrast changes with it. -->

---
layout: end
hideInToc: true
---

# Thank you

Questions, corrections and favourite ampersands welcome.
