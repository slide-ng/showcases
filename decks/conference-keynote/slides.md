---
title: Blueprints for Fast Angular
titleTemplate: '%s | Draftline 2026'
theme: ../../themes/blueprint
addons:
  - ./addon-stamp
pwa: true
favicon: /favicon.svg
info: |
  ## Blueprints for Fast Angular
  Opening keynote of Draftline 2026: how one team took a slow storefront from 3.1 s to 1.0 s
  by measuring first, fixing the biggest cost, and repeating.
author: Noor Valdés
keywords: [angular, keynote, performance, signals, defer]
lang: en
seoMeta:
  ogTitle: Blueprints for Fast Angular
  ogDescription: Measure, fix the biggest cost, repeat. The Draftline 2026 opening keynote.
  ogUrl: https://example.org/keynote
  twitterCard: summary_large_image
download: true
exportFilename: blueprints-for-fast-angular
colorSchema: auto
sheet: SHEET K1 · DRAFTLINE 2026
---

# Blueprints for Fast Angular

Draftline 2026 · opening keynote · Noor Valdés

<!-- Welcome everyone, and thank the organisers and the volunteers at the door. Forty minutes, questions at the end. -->

---
layout: statement
---

# A slow page is a design problem,<br>not a hosting problem.

<!-- Most teams reach for a bigger server first. The page in this talk ran on the same servers before and after. -->

---

# The plan

<slide-ng-clicks>

- **Measure** on the phone your customers own, not on your laptop
- **Fix the biggest cost** first, even if it is boring
- **Repeat** until the numbers stop moving

</slide-ng-clicks>

<!--
The whole talk is these three lines.
[click] We test on a four-year-old mid-range phone over a throttled connection.
[click] Boring wins: an image size, a script that loads too early.
[click] Stop when the next fix buys less than a tenth of a second.
-->

---
layout: section
---

# Part one: measure

---

# The storefront, before

| Metric                        | Mid-range phone | Target   |
| ----------------------------- | --------------: | -------: |
| Largest Contentful Paint      |         3.1 s   |  < 1.5 s |
| Interaction to Next Paint     |       380 ms    | < 200 ms |
| JavaScript on first load      |      1.2 MB     | < 400 kB |
| Requests before first paint   |            46   |    < 20  |

<bp-note label="M">Measured on the Tidewell product page, median of 20 runs.</bp-note>

<!-- Tidewell is the storefront we rebuilt. Every number here was measured on the same phone. -->

---
layout: section
---

# Part two: fix

---

# Design review: the product page

<div class="grid grid-cols-[1fr_auto] gap-x-10 gap-y-5 items-center mt-6">

<bp-note label="A">Load the price chart only when it scrolls into view</bp-note>
<div slide-ng-click><kn-stamp text="APPROVED"></kn-stamp></div>

<bp-note label="B">Replace zone-wide change detection with signals</bp-note>
<div slide-ng-click><kn-stamp text="APPROVED"></kn-stamp></div>

<bp-note label="C">Serve the hero image at the size it is shown</bp-note>
<div slide-ng-click><kn-stamp text="APPROVED"></kn-stamp></div>

<bp-note label="D">Rewrite the page in another framework</bp-note>
<div slide-ng-click><kn-stamp text="REJECTED" color="#8a8f98"></kn-stamp></div>

</div>

<!--
This is the actual review sheet from the project, one proposal per line.
[click] A: the chart is below the fold on every phone.
[click] B: signals keep change detection local to the price and the cart badge.
[click] C: the hero was 2400 px wide and shown at 600.
[click] D: the rewrite would have taken a quarter and fixed none of the above.
-->

---

# Fix A: defer what nobody sees yet

```angular-html {1|2|3-5|all}
@defer (on viewport) {
  <price-history [sku]="sku()" />
} @placeholder {
  <div class="chart-skeleton"></div>
}
```

<bp-note label="A">The chart and its 180 kB of code load when the reader scrolls to it.</bp-note>

<!--
[click] The trigger: the block starts loading when its placeholder enters the viewport.
[click] The heavy component, in its own lazy chunk.
[click] A placeholder with the same height, so nothing jumps.
-->

---

# Fix B: signals keep updates local

```ts {1|2|3|all}
const quantity = signal(1);
const total = computed(() => quantity() * unitPrice());
effect(() => cartBadge.set(total()));
```

<bp-note label="B">Changing the quantity now updates two text nodes, not the whole page.</bp-note>

<!--
[click] The quantity is a signal.
[click] The total is derived from it and recomputed only when it changes.
[click] The badge follows. Interaction to Next Paint went from 380 ms to 90 ms.
-->

---
layout: fact
---

# 3.1 → 1.0

seconds to Largest Contentful Paint on a mid-range phone, after three fixes

<!-- No new servers, no rewrite. Three small changes, each one measured. -->

---

# Take this deck home

<div class="grid grid-cols-2 gap-10 mt-6">
<div>

### Offline

Open the deck once and it is installed: it keeps working on the train, without a network.

</div>
<div>

### On paper

The download button in the bar gives you the PDF, with every slide as you saw it.

</div>
</div>

<bp-note label="E">Press <kbd>o</kbd> for the overview, or the pen in the bar to sketch on any slide.</bp-note>

---
layout: center
class: text-center
---

# Thank you

Measure · fix the biggest cost · repeat

<div class="mt-10"><kn-stamp text="SHIPPED"></kn-stamp></div>

<!-- Questions. If there are none, ask the room what their slowest page is. -->
