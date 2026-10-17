---
title: Signals Deep Dive
colorSchema: dark
author: Platform Guild
transition: slide-left
---

# Signals Deep Dive

Angular reactivity, live in the slides

<div class="abs-br m-6 text-sm op60">every widget here is a real component</div>

<!--
Each slide in this talk runs a small component from the deck's components/ folder. Click around while I talk.
-->

---
layout: two-cols-header
---

# signal / computed / effect

A counter with `input()` transforms: `start="5"` is a string, `numberAttribute` turns it into 5. Card B follows A through the `output()`.

::left::

<counter-card #a label="A" start="5" step="2" (changed)="b.count.set($event)" />

::right::

<counter-card #b label="B" locked />

::left::

Sum of both: **{{ a.count() + b.count() }}**, A doubled is **{{ a.double() }}**.

<!--
`double` and `parity` are computed. The grey line under each card is written by an effect that logs the last five values.
-->

---

# linkedSignal

The choice is derived from the list of options, but you can still set it. Switching the kind keeps your choice when it still exists, and falls back to the first option when it does not.

<linked-picker #p />

The slide reads the component: **{{ p.choice() }}**

```ts
choice = linkedSignal<string[], string>({
  source: this.options,
  computation: (opts, prev) => (prev && opts.includes(prev.value) ? prev.value : opts[0]),
});
```

---

# resource and rxResource

Async data as signals: the loader runs again whenever its params change.

<user-resource #u />

The slide reads the current id: **{{ u.id() }}**

<!--
Go to id 4 to show the error state of `resource`; rxResource falls back to a default value instead.
-->

---

# model() two-way binding

<rating-input #r />

<rating-view [(value)]="r.value" />

Stars from the slide: **{{ r.value() }}** / 5

```html
<rating-input #r />
<rating-view [(value)]="r.value" />
```

<!--
Both components declare `value = model()`. Clicking a star or the buttons updates the same signal.
-->

---

# viewChild and contentChild

<tab-group>
  <h4 #header>Release notes</h4>
  <tab-pane title="Core">Signals are stable, and effects run after render.</tab-pane>
  <tab-pane title="Forms">Reactive and template-driven forms, side by side.</tab-pane>
  <tab-pane title="Router">Typed routes and lazy components.</tab-pane>
</tab-group>

The tabs are `contentChildren(TabPane)`, the heading is a `contentChild('header')`, and the tab bar is a `viewChild` the group measures after render.

---

# Clicks inside a component's @for

<div slide-ng-click>1. Read the source</div>

<step-list [steps]="['parse', 'compile', 'render']" />

<div slide-ng-click>5. Ship it</div>

<slide-watch />

<!--
[click] The slide's own step. [click] [click] [click] The three steps come from a component's @for, in order. [click] Back on the slide.
-->

---

# Nested component clicks

Clicks follow document order, even through components inside components.

<div slide-ng-click>Freeze the release branch</div>

<reveal-outer title="Build" />

<div slide-ng-click>Publish</div>

<slide-watch />

---

# Every visit starts fresh

<counter-card label="Visits" />

A slide's components are created when the slide opens and destroyed when it closes. Count up, go forward and come back: the counter starts again at 0.

State that must survive navigation belongs in a service with `providedIn: 'root'`.

---

# Signals in control flow

<counter-card #d label="Flow" start="3" />

@let n = d.count();

@if (n > 5) {
**Big**: {{ n }}
} @else if (n > 2) {
**Medium**: {{ n }}
} @else {
**Small**: {{ n }}
}

<div class="flex gap-2 mt-2">
@for (i of [1, 2, 3, 4, 5, 6, 7, 8].slice(0, n > 0 ? n : 0); track i) {
<span class="w-6 h-6 rounded bg-emerald-500"></span>
}
</div>

---
layout: end
---

# Thanks
