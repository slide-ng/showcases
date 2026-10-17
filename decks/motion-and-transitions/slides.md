---
theme: ../../themes/moss
title: Motion and Transitions
transition: fade
fonts:
  sans: Lora
---

# Motion & Transitions

How slides move, and how things move on them

<!--
The whole deck fades by default (`transition: fade` in the headmatter); each slide below overrides it to show one transition as you leave it.
The body font is swapped to Lora with `fonts:` in the headmatter, on top of the moss theme.
-->

---
transition: fade-out
---

# Fade out

<div class="flex items-center gap-12 mt-8">
<div class="text-2xl leading-relaxed flex-1">
<p class="text-2xl !leading-relaxed">When you leave this slide it fades away completely before the next one fades in: a clean break between two topics.</p>
<p class="mt-5 font-mono text-xl text-lime-200/80">transition: fade-out</p>
</div>
<moss-stat value="7" label="built-in transitions"></moss-stat>
</div>

<!--
A transition set on a slide is used between that slide and the next one, in both directions.
-->

---
transition: slide-left
---

# Slide left

<div class="flex items-center justify-between gap-12 mt-8">
<div class="text-2xl leading-relaxed">
<p class="text-2xl !leading-relaxed">The next slide pushes in from the right, like turning a page. The natural choice for walking forward through a sequence; going back, it runs the other way.</p>
<p class="mt-5 font-mono text-xl text-lime-200/80">transition: slide-left</p>
</div>
<carbon-arrow-left class="text-9xl opacity-60 shrink-0" />
</div>

---
transition: slide-right
---

# Slide right

<div class="flex items-center justify-between gap-12 mt-8">
<div class="text-2xl leading-relaxed">
<p class="text-2xl !leading-relaxed">The mirror image: the next slide comes in from the left. Good for a flashback, or a step back to the overview.</p>
<p class="mt-5 font-mono text-xl text-lime-200/80">transition: slide-right</p>
</div>
<carbon-arrow-right class="text-9xl opacity-60 shrink-0" />
</div>

---
transition: slide-up
---

# Slide up

<div class="flex items-center justify-between gap-12 mt-8">
<div class="text-2xl leading-relaxed">
<p class="text-2xl !leading-relaxed">The next slide rises from below, as if you were digging into the detail under this one.</p>
<p class="mt-5 font-mono text-xl text-lime-200/80">transition: slide-up</p>
</div>
<carbon-arrow-up class="text-9xl opacity-60 shrink-0" />
</div>

---
transition: slide-down
---

# Slide down

<div class="flex items-center justify-between gap-12 mt-8">
<div class="text-2xl leading-relaxed">
<p class="text-2xl !leading-relaxed">The next slide drops in from above: coming back up from the detail to the big picture.</p>
<p class="mt-5 font-mono text-xl text-lime-200/80">transition: slide-down</p>
</div>
<carbon-arrow-down class="text-9xl opacity-60 shrink-0" />
</div>

---
transition: view-transition
---

# View transition

<h2 style="view-transition-name: hero">The canopy</h2>

<div class="text-2xl leading-relaxed mt-6">
<p class="text-2xl !leading-relaxed">Elements with the same <span class="font-mono text-lime-200/80">view-transition-name</span> on both slides morph from one place to the other, using the browser's View Transitions API. Watch the heading above.</p>
</div>

---
transition: slide-left | slide-right
---

# Forward and backward

<h2 style="view-transition-name: hero" class="text-right">The canopy</h2>

<div class="text-2xl leading-relaxed mt-6">
<p class="text-2xl !leading-relaxed"><span class="font-mono text-lime-200/80">transition: slide-left | slide-right</span> picks one transition for going forward and another for going back.</p>
</div>

<div class="forward:text-lime-300 backward:text-amber-400 text-3xl mt-8">This line is tinted by the direction you came from.</div>

<!--
After a move the stage carries a forward or backward class, so `forward:` and `backward:` utility prefixes style things by direction.
Step back and forth here to see the colour change.
-->

---

# Motion

<div class="flex gap-10 mt-10 items-start">
<div slide-ng-motion
  :initial="{ x: -80, opacity: 0 }"
  :enter="{ x: 0, opacity: 1 }"
  :click-1="{ y: 30 }"
  :click-2-4="{ scale: 1.3, transition: { duration: 800 } }"
  :leave="{ x: 80 }"
  class="p-5 bg-green-800 rounded-lg w-64 origin-top-left">
  <div class="text-xl font-semibold">Seedling</div>
  <div class="text-sm opacity-80">slides in on arrival, drops at click 1, grows for clicks 2 and 3</div>
</div>

<div slide-ng-motion slide-ng-click="3"
  :initial="{ rotate: -30, opacity: 0 }"
  :enter="{ rotate: 0, opacity: 1, transition: { delay: 200 } }"
  class="p-5 bg-amber-800 rounded-lg w-64 ml-16">
  <div class="text-xl font-semibold">Sapling</div>
  <div class="text-sm opacity-80">swings into place at click 3</div>
</div>
</div>

<p class="absolute bottom-10 left-14 text-lg opacity-80">slide-ng-motion moves an element between named states: initial, enter, click-N and leave.</p>

---

# Every mark

<div class="grid grid-cols-2 gap-y-6 gap-x-10 text-2xl mt-4">
<div><span slide-ng-mark.underline.red="1">underline red</span></div>
<div><span slide-ng-mark.circle.blue="2">circle blue</span></div>
<div><span slide-ng-mark.box.green="3">box green</span></div>
<div><span slide-ng-mark.highlight.yellow="4">highlight yellow</span></div>
<div><span slide-ng-mark.strike-through.orange="5">strike-through orange</span></div>
<div><span slide-ng-mark.crossed-off.pink="6">crossed-off pink</span></div>
<div><span slide-ng-mark.bracket.cyan="7">bracket cyan</span></div>
<div><span slide-ng-mark="{ at: 8, type: 'box', color: '#e0a', strokeWidth: 3, padding: 8 }">object form, thicker</span></div>
</div>

<!--
Each mark is drawn at its click: the modifiers name the type and the colour, and the object form takes any rough-notation option.
-->

---

# Marks in prose

<div class="text-2xl leading-relaxed mt-6">
<p class="text-2xl !leading-relaxed">Forests store <span slide-ng-mark.circle.red>about 45%</span> of the carbon held on land,
but <span slide-ng-mark.highlight.lime.op50>deforestation</span> releases it back into the air.
A mark can follow a phrase across a line break: <span slide-ng-mark="{ type: 'underline', multiline: true, color: 'orange' }">replanting a hectare of mixed woodland takes decades to pay back what clearing it took in a day</span>.</p>
</div>

<div class="text-2xl mt-8">

<span slide-ng-mark.strike.delay300="[1, 3]">Struck through for the first two clicks</span>, and <span slide-ng-mark.cross="true">crossed out from the start</span>.

</div>

---
layout: fact
---

# 7

built-in transitions, plus motion and marks on top

---
layout: end
---

# Fin
