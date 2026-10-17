---
title: Clicks Masterclass
info: |
  ## Every click form
  A tour of click animations for people coming from Slidev.
---

# Clicks Masterclass

Every way to reveal a slide, one click at a time

<!--
Welcome. Each slide shows one way to reveal content, and the small grey line at the bottom of a slide is the markup that does it.
Press the right arrow to step through the clicks.
-->

---

# Absolute and relative

<div class="grid grid-cols-3 gap-4 mt-6 text-lg">
<div class="p-4 rounded-lg bg-sky-100 text-sky-900" slide-ng-click><code>slide-ng-click</code><br>next click: <b>1</b></div>
<div class="p-4 rounded-lg bg-sky-100 text-sky-900" slide-ng-click="3"><code>="3"</code><br>exactly click <b>3</b></div>
<div class="p-4 rounded-lg bg-sky-100 text-sky-900" slide-ng-click="+1"><code>="+1"</code><br>one after the last: <b>2</b></div>
<div class="p-4 rounded-lg bg-sky-100 text-sky-900" slide-ng-click="-1"><code>="-1"</code><br>one before: <b>1</b></div>
<div class="p-4 rounded-lg bg-sky-100 text-sky-900" slide-ng-click><code>slide-ng-click</code><br>next again: <b>2</b></div>
<div class="p-4 rounded-lg bg-sky-100 text-sky-900" slide-ng-click="+2"><code>="+2"</code><br>skips one: <b>4</b></div>
</div>

<p class="mt-8 opacity-70">A number is an absolute click. A sign makes it relative to the element before. This slide takes four clicks.</p>

<!--
Read the cards in order: bare clicks count up, "+n" counts from the previous relative element, "-n" goes back, and an absolute number stands on its own.
[click] Card one and card four arrive together.
[click] Then three and five.
[click] The absolute "3".
[click] And "+2" lands on four.
-->

---

# Ranges, after and hide

<div class="flex flex-col gap-3 mt-6 text-lg">
<div class="px-4 py-2 rounded-lg bg-rose-100 text-rose-900" slide-ng-click="2" slide-ng-click-hide>On screen from the start, hidden at click 2 &nbsp;<code>slide-ng-click-hide</code></div>
<div class="px-4 py-2 rounded-lg bg-amber-100 text-amber-900" slide-ng-click>Click 1 &nbsp;<code>slide-ng-click</code></div>
<div class="px-4 py-2 rounded-lg bg-amber-200 text-amber-900" slide-ng-after>Arrives with the line above &nbsp;<code>slide-ng-after</code></div>
<div class="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-900" [slide-ng-click]="[2, 4]">Shown for clicks 2 and 3 &nbsp;<code>[slide-ng-click]="[2, 4]"</code></div>
<div class="px-4 py-2 rounded-lg bg-teal-100 text-teal-900" [slide-ng-click]="['+2', '+1']">Two after click 1, for one click &nbsp;<code>['+2', '+1']</code></div>
<div class="px-4 py-2 rounded-lg bg-slate-200 text-slate-900" slide-ng-click="5">The conclusion, at click 5 &nbsp;<code>slide-ng-click="5"</code></div>
</div>

<!--
A range has a start and an end; the end is not included. The square brackets make it an Angular binding, so the array is real data.
-->

---

# Two at a time

<div class="grid grid-cols-2 gap-10 mt-4">
<div class="text-2xl">

<slide-ng-clicks every="2">

- 🍎 Apples
- 🍌 Bananas
- 🍒 Cherries
- 🌴 Dates
- 🫐 Elderberries

</slide-ng-clicks>

</div>
<div>

```md
<slide-ng-clicks every="2">

- Apples
- Bananas
- ...

</slide-ng-clicks>
```

Five items, two per click: three clicks.

</div>
</div>

---

# Nested lists

<div class="grid grid-cols-2 gap-10 mt-4">
<div class="text-2xl">

<slide-ng-clicks depth="2">

- Frontend
  - Angular
  - Signals
- Backend
  - Node
- Ops

</slide-ng-clicks>

</div>
<div>

`depth="2"` walks into nested lists too, so each sub-item gets a click of its own: six clicks for three groups.

Without it, a nested list arrives together with its parent.

</div>
</div>

---

# Switch and gap

<div class="grid grid-cols-2 gap-10 mt-6">
<div class="h-40 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-900 text-5xl font-semibold">
<slide-ng-switch>
  <div at="1">Ready</div>
  <div at="2">Set</div>
  <div at="3-5">Go!</div>
</slide-ng-switch>
</div>
<div>

`<slide-ng-switch>` shows one child at a time: `at="1"`, `at="2"`, then `at="3-5"` for clicks 3 and 4.

<slide-ng-click-gap size="2" />

<div slide-ng-click class="mt-6 p-3 rounded-lg bg-indigo-100 text-indigo-900">After a pause of two empty clicks (<code>&lt;slide-ng-click-gap size="2" /&gt;</code>), this note.</div>

</div>
</div>

---
clicks: 5
---

# A fixed number of clicks

<div class="mt-6 text-xl">

`clicks: 5` in the frontmatter gives this slide five clicks, however many elements it has.

</div>

<div slide-ng-click class="mt-6 p-4 rounded-lg bg-amber-100 text-amber-900">The only click element. The other four clicks are yours: talk over them, or let a video or drawing use them.</div>

---
clicksStart: 1
---

# Starting at click 1

<div class="mt-6 text-xl">

`clicksStart: 1` opens the slide with its first click already taken.

</div>

<div class="flex flex-col gap-3 mt-6 text-lg">
<div slide-ng-click="1" class="p-3 rounded-lg bg-sky-100 text-sky-900">Already here when the slide opens (click 1)</div>
<div slide-ng-click="2" class="p-3 rounded-lg bg-sky-100 text-sky-900">Click 2</div>
<div slide-ng-click="3" class="p-3 rounded-lg bg-sky-100 text-sky-900">Click 3</div>
</div>

---

# Click markers in notes

<div class="flex flex-col gap-3 mt-6 text-lg">
<div slide-ng-click class="p-3 rounded-lg bg-emerald-100 text-emerald-900">First point</div>
<div slide-ng-click class="p-3 rounded-lg bg-emerald-100 text-emerald-900">Second point</div>
<div slide-ng-click class="p-3 rounded-lg bg-emerald-100 text-emerald-900">Third point</div>
</div>

<p class="mt-8 opacity-70">Open the presenter view (the presenter button in the bar, or <code>/presenter</code>): the <code>[click]</code> markers in these notes split them by click and follow along.</p>

<!--
Introduce the topic before anything appears. Notes take **markdown** too.

[click] Now the *first* point appears.

[click:2] `[click:2]` skips a click: this part belongs to the third point.
-->

---

# Everything shares one counter

<div class="grid grid-cols-2 gap-8">
<div>

<ul class="text-lg">
  <li slide-ng-click>A list item (click 1)</li>
  <li slide-ng-click>Another one (click 2)</li>
</ul>

```ts {1|2|3}
const price = 40;
const tax = price * 0.2;
const total = price + tax;
```

</div>
<div>

````md magic-move
```js
let total = 0;
```

```js
let total = 0;
total += 40;
```

```js
const total = [40].reduce((a, b) => a + b, 0);
```
````

<div slide-ng-click class="mt-4 p-3 rounded-lg bg-slate-200 text-slate-900">Closing remark, last of all</div>

</div>
</div>

<!--
Clicks, code line ranges and Magic Move steps all take their turn in page order: the two list items, then the code ranges, then the Magic Move steps, then the closing remark.
-->

---

# Lists that hide

<div class="grid grid-cols-2 gap-10 mt-4">
<div class="text-2xl">

<slide-ng-clicks hide at="3">

- Write the outline
- Draft the slides
- Rehearse once

</slide-ng-clicks>

</div>
<div>

`hide` makes items leave instead of arrive; `at="3"` waits until click 3 to start. A to-do list that empties as you go.

</div>
</div>

---
layout: end
---

# Thanks
