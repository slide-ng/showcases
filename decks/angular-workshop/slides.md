---
title: Angular Signals Workshop
colorSchema: dark
author: Workshop Team
transition: slide-left
lineNumbers: false
---

# Angular Signals Workshop

Hands-on, 90 minutes · <carbon-logo-angular class="text-red-400" /> every demo runs live in the slides

<div class="abs-br m-6 text-sm op60">press → to start</div>

<!--
Welcome everyone. Laptops open: every code block in this deck can be edited or run, and the widgets are real Angular components.
-->

---

# Agenda

<slide-ng-clicks>

- Why signals?
- `signal`, `computed`, `effect`
- Components with `input()` / `output()`
- Control flow: `@if`, `@for`, `@switch`, `@defer`
- Live coding

</slide-ng-clicks>

<nav-status />

<!--
[click] Motivation first. [click] The three primitives. [click] Component APIs. [click] Template control flow. [click] Then we code together.
The bar at the bottom is a component too: it injects the deck's navigation service.
-->

---

# Your first signal

```ts {monaco}
import { signal, computed } from '@angular/core';

const count = signal(0);
const double = computed(() => count() * 2);
count.set(21);
console.log(double()); // 42
```

Edit the code above: it is a real Monaco editor, with Angular's types.

<!--
Ask someone to hover `double` and see `Signal<number>`.
-->

---

# Run it

```ts {monaco-run} {autorun:false, showOutputAt:'+1'}
const prices = [12.5, 7.25, 30];
const total = prices.reduce((a, b) => a + b, 0);
console.log('total', total);
console.log({ count: prices.length, avg: total / prices.length });
```

<!--
Press Run. The output appears one click later, below the editor.
-->

---

# Before / after: zone to signals

```ts {monaco-diff}
@Component({ template: '{{ count }}' })
export class Counter {
  count = 0;
  inc() { this.count++; }
}
~~~
@Component({ template: '{{ count() }}' })
export class Counter {
  count = signal(0);
  inc() { this.count.update((c) => c + 1); }
}
```

---

# Types at a glance (Twoslash)

```ts twoslash
import { signal, computed } from '@angular/core';
const user = signal({ name: 'Mira', age: 34 });
const greeting = computed(() => `Hi ${user().name}`);
//    ^?
const age = user().age;
//    ^?
```

---

# Refactoring a counter (Magic Move)

````md magic-move {lines: true}
```ts
export class Counter {
  count = 0;
  inc() {
    this.count++;
  }
}
```

```ts
export class Counter {
  count = signal(0);
  inc() {
    this.count.update((c) => c + 1);
  }
}
```

```ts
export class Counter {
  count = signal(0);
  double = computed(() => this.count() * 2);
  inc() {
    this.count.update((c) => c + 1);
  }
}
```

```ts {2|3|*}
export class Counter {
  readonly start = input(0);
  readonly changed = output<number>();
  count = linkedSignal(() => this.start());
  double = computed(() => this.count() * 2);
}
```
````

---

# Components: input(), output(), signal()

<signal-counter label="apples" [start]="3" (changed)="pears.count.set($event)" #c />

@let doubled = c.double();

The slide reads the child through a template reference: **{{ c.count() }}** apples, doubled **{{ doubled }}**.

<signal-counter label="pears" #pears />

The pears follow the apples: the slide wires `(changed)` of one counter to the signal of the other.

```html
<signal-counter label="apples" [start]="3" (changed)="pears.count.set($event)" #c />
<signal-counter label="pears" #pears />
```

---

# @for with track and @empty

<div class="grid grid-cols-2 gap-6">
<div>

### With items

<todo-list [initial]="['Install the CLI', 'Write a signal', 'Ship it']" />

</div>
<div>

### Nothing yet

<todo-list />

</div>
</div>

```html
@for (t of todos(); track t.id; let i = $index) {
  <li>{{ i + 1 }}. {{ t.text }}</li>
} @empty {
  <li>Nothing to do!</li>
}
```

---

# @switch and @let

@let track = ['beginner', 'intermediate', 'advanced'][1];
@let seats = 24;
@let taken = 17;
@let fee = 1234.5;

@switch (track) {
@case ('beginner') {
<p class="text-green-400 text-2xl">Beginner track</p>
}
@case ('intermediate') {
<p class="text-yellow-400 text-2xl">Intermediate track</p>
}
@default {
<p class="text-2xl">Open track</p>
}
}

- seats left: **{{ seats - taken }}** of {{ seats }}
- team fee: {{ fee.toFixed(2) }} €
- status: {{ taken / seats > 0.5 ? 'filling up' : 'plenty of room' }}

```html
@let track = ['beginner', 'intermediate', 'advanced'][1];
@switch (track) { @case ('beginner') { … } @case ('intermediate') { … } @default { … } }
```

<!--
@let names a value once and reuses it below, right in the markdown.
-->

---

# @defer

<div class="grid grid-cols-2 gap-6">
<div>

`on timer(500ms)`

@defer (on timer(500ms)) {
<div class="p-4 bg-green-700 rounded">Loaded half a second after the slide opened</div>
} @placeholder {
<div class="p-4 bg-gray-700 rounded">placeholder…</div>
}

</div>
<div>

`on viewport`

@defer (on viewport) {
<signal-counter label="lazy" />
} @placeholder {
<p>the counter loads when it scrolls into view</p>
}

</div>
</div>

The deferred code is a separate chunk: it is fetched only when the trigger fires.

---

# Clicks inside a component

<click-steps />

<div slide-ng-click class="p-2 bg-amber-800/40 rounded">3. Back on the slide, the next click goes on in order</div>

<nav-status />

<!--
[click] The first two steps live inside a component. [click] [click] The slide's own step follows them.
-->

---
layout: center
class: text-center
---

# Thanks!

Questions? <mdi-github class="text-3xl" /> · `@if (questions) { ask() }`
