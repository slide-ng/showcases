---
title: Signals in Practice
theme: ../../themes/moss
duration: 25min
timer: countdown
author: Sam Speaker
---

# Signals in Practice

A conference talk, built with slide.ng

<!--
Welcome! Introduce yourself and mention the conference hashtag.
-->

---

# Agenda

<slide-ng-toc />

<!--
Run through the agenda quickly.
-->

---

# Why signals?

<slide-ng-clicks>

- Fine-grained reactivity
- No zone.js required
- Easy to read

</slide-ng-clicks>

<!--
[click] Only what reads a signal updates. [click] Change detection no longer needs zone.js. [click] The data flow is in plain sight.
-->

---
layout: two-cols
---

# Before

```ts
count = 0;
inc() { this.count++; }
```

::right::

# After

```ts
count = signal(0);
inc() { this.count.update(n => n + 1); }
```

<!--
Same counter, before and after: a field and a mutation become a signal and an update.
-->

---

## Computed values

```ts {1|2|all}
const price = signal(10);
const total = computed(() => price() * 1.2);
```

@let price = 10;
@let total = price * 1.2;

Live on the slide: with a price of {{ price }}, `total()` is **{{ total }}**.

<!--
The source signal first. [click] The computed value, recalculated only when price changes. [click] Both lines together.
-->

---
layout: section
---

# Effects

<!--
Section break.
-->

---

# Effects run on change

<div slide-ng-click>`effect()` re-runs when a signal it reads changes</div>
<div slide-ng-click>it runs after rendering, so the DOM is up to date</div>

> [!WARNING]
> Do not write to signals inside effects without care.

<!--
Writing to a signal you also read inside the same effect can loop. Prefer computed for derived values.
-->

---
layout: quote
---

# "Make it work, make it right, make it fast."

Kent Beck

<!--
Pause here.
-->

---
layout: fact
---

# 42%

less code in our app

<!--
From our own migration of the settings screens.
-->

---
layout: end
---

# Thank you

<!--
Take questions.
-->
