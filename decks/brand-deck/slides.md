---
theme: ../../themes/paper
title: Brand Guide 2027
titleTemplate: '%s · Brasidal Coffee Roasters'
author: Brasidal Design Team
keywords: [brand, design system, coffee]
favicon: /favicon.svg
info: |
  ## Brasidal Coffee Roasters
  The **brand guide** for 2027: voice, colour, type and the logo. Brasidal is an invented roastery.
seoMeta:
  ogTitle: Brasidal Brand Guide 2027
  ogDescription: How Brasidal looks, sounds and pours.
  ogImage: auto
  ogUrl: https://brand.example.org/2027
  twitterCard: summary_large_image
fonts:
  sans: Space Grotesk
download: true
exportFilename: brasidal-brand-guide-2027
layout: cover
issue: Vol. 7
date: January 2027
---

# Brasidal Brand Guide

How we look, sound and pour — 2027 edition

<!-- Welcome. This deck is the reference for agencies and new staff; the PDF in the bar is the version to send around. -->

---
layout: section
no: '01'
---

# Who we are

---

# Our mission

Brasidal roasts **small-batch coffee** for people who read the back of the bag.

- Traceable beans from 14 farms
- Roasted within 48 hours of shipping
- Packaging that composts in 90 days

<div class="mt-6 text-sm op70">Founded 2014 in Porto · {{ 2027 - 2014 }} years of roasting</div>

<!-- The name comes from "brasa", the glow of embers: the moment a roast is right. -->

---
layout: split-quote
author: Inês Duarte
role: Founder & Head Roaster
accent: '#2f6f4e'
---

## Voice in one line

::quote::

We talk like a friend behind the counter, not like a label on a shelf.

::aside::

**Do:** short sentences, verbs first, numbers you can check.

**Don't:** superlatives, "artisanal", exclamation marks.

<!-- Read the quote aloud. If a sentence would sound odd said across the counter, rewrite it. -->

---
layout: split-quote
author: A regular at Rua das Flores
---

## How it sounds from the other side

::quote::

They told me the beans were from a farm in Huila, roasted on Tuesday. That was the whole pitch. I came back.

::aside::

The best copy we have is what customers repeat. Quote them, with their permission, before you write your own.

---
layout: section
no: '02'
---

# How we look

---

# Colour

@let palette = [{ name: 'Roast', hex: '#d9480f', use: 'The one action per page' }, { name: 'Ink', hex: '#2b1d14', use: 'Text and the logo disc' }, { name: 'Crema', hex: '#c9a77c', use: 'Paper, panels, packaging' }, { name: 'Leaf', hex: '#2f6f4e', use: 'Origin and farm stories' }];

<div class="flex mt-2">
@for (c of palette; track c.name) {
<div>
<brand-swatch [name]="c.name" [hex]="c.hex" />
<div class="swatch-caption mt-2">{{ c.use }}<br><span class="font-mono">rgb {{ c.hex | rgb }}</span></div>
</div>
}
</div>

<p class="mt-6">Use <span class="text-[#d9480f] font-bold">Roast</span> for one thing per page: the action.</p>

<!-- The RGB values are worked out from the hex codes on the slide, so the two can never disagree. -->

---

# Type

| Role     | Face           | Weight | Size    |
| -------- | -------------- | ------ | ------- |
| Headline | Fraunces       | 600    | 48 px   |
| Body     | Space Grotesk  | 400    | 18 px   |
| Numbers  | Space Grotesk  | 500    | tabular |
| Code     | JetBrains Mono | 400    | 14 px   |

<p class="font-sans mt-6 text-xl">Space Grotesk: The quick brown fox jumps over 1,234 lazy dogs.</p>
<p class="font-serif text-xl">Fraunces: Roasted on Tuesday, in your cup by Thursday.</p>

---

# The logo

<div class="flex items-center gap-12 mt-6">

![The Brasidal logo: a pale coffee bean on a dark disc, split by an ember-orange line](/logo.svg){width=180}

<div>

- Clear space: half the width of the disc, on every side
- Minimum size: 18 px on screen, 8 mm in print
- The split line is always Roast; never recolour it

</div>
</div>

---
layout: image-right
image: /bag.svg
backgroundSize: cover
---

# Logo on packaging

The mark sits top right on every bag; the farm name sits bottom left. The coffee's name gets the space in between.

<paper-pull by="Packaging team">The bag is the first page of our story.</paper-pull>

---
layout: fact
---

# 48 h

from roaster to your door

---

# Checklist for agencies

- [x] Use the colour tokens, not eyedropped values
- [x] Space Grotesk for text, Fraunces for headlines
- [ ] Ask before using the logo on dark photos

> [!TIP]
> The PDF of this deck is in the bar (download button): send it, don't screenshot it.

---
layout: end
---

# Thank you

brand@brasidal.example
