---
theme: ../../themes/moss
title: Forms and DI
author: Garden Systems
---

# Forms and DI

A tour of Angular forms, services and directives, for a community garden's booking app

<!--
Everything on these slides is a component from the deck's components/ folder, running live.
-->

---

# Reactive forms

<div class="grid grid-cols-2 gap-8">
<div>

<signup-reactive #r />

</div>
<div>

```ts
form = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required,
               Validators.email]],
  plot: ['', Validators.required],
});
```

@let v = r.value();

The slide reads the form through a signal: **{{ v.name ? v.name + ' wants the ' + (v.plot || '…') + ' bed' : 'no reservation yet' }}**.

</div>
</div>

<!--
`ReactiveFormsModule` comes with slide.ng. `toSignal(form.valueChanges)` turns the form's value into a signal the slide can read.
-->

---

# Template-driven forms

<div class="grid grid-cols-2 gap-8">
<div>

<note-template #n />

</div>
<div>

```html
<input name="title" [(ngModel)]="title"
       required minlength="3" />
```

`[(ngModel)]` binds straight to a signal: `title = signal('Spring sowing')`.

On the slide: **{{ n.title() }}**{{ n.pinned() ? ' (pinned)' : '' }}

</div>
</div>

---

# Or no forms module at all

For a two-field form, signals and native events are enough.

<signal-form #f />

The slide reads it: email = {{ f.email() || '(empty)' }}

---
layout: two-cols
---

# A root service

The shelf injects `CartService` (`providedIn: 'root'`).

<shop-shelf />

::right::

<moss-stat value="root" label="one instance for the whole deck"></moss-stat>

---

# Same service, another slide

<cart-summary />

Add a few things on the previous slide and come back: the cart keeps them. Both slides inject the same instance, and it lives as long as the deck.

---

# Injecting Nav and ClicksContext

<nav-panel />

<div slide-ng-click class="mt-4">A component can read the deck's position…</div>
<div slide-ng-click>…and move it: the buttons call `nav.go()` and `nav.next()`.</div>

---

# Host bindings and listeners

<nav-panel #np />

The panel lights up on hover through `@HostBinding('class')` and `@HostListener('mouseenter')`, and it publishes `data-progress` = **{{ np.progress() }} %** on its host element.

---

# A directive in markdown

<span mossGlow="#e0b15e">Hover this amber text</span> and <span mossGlow>this default moss one</span>.

- list item with a <strong mossGlow="#ff6b6b">red glow</strong>
- the directive sits in `components/moss-glow.ts`

<div [mossGlow]="'#6bd3c8'" class="mt-4 p-2 border rounded">bound with brackets</div>

---
layout: fact
---

# 3

ways to build a form, one service for every slide

---
layout: end
---

# Thanks
