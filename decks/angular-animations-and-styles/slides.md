---
theme: ../../themes/minimal
title: Animations and Styles
---

# Animations and Styles

Component styles, encapsulation and motion

<pulse-dot label="on air" />

<!--
The dot is a component with its own styles and a CSS animation. No @angular/animations needed.
-->

---
class: bg-slate-800 text-amber-200
---

# A class for one slide

`class: bg-slate-800 text-amber-200` in this slide's frontmatter paints it amber on slate.

<pulse-dot class="warn" label="warning variant via :host(.warn)" />

```css
:host(.warn) { background: rgb(234 179 8 / .2); }
:host(.warn) .dot { background: #eab308; }
```

---

# ViewEncapsulation

<encap-emulated />

<encap-none />

<encap-shadow>

projected **markdown** inside a shadow root slot

</encap-shadow>

<p class="encap-p">A paragraph of the slide with the same class as the teal and purple ones: their styles stay inside their components.</p>
<p class="leaky">This paragraph has the class <code>.leaky</code>: the component with <code>None</code> turned it orange.</p>

<!--
Emulated scopes styles with attributes, None makes them global, ShadowDom uses a real shadow root (UnoCSS classes still work inside).
-->

---

# animate.enter / animate.leave

<fade-list #f />

{{ f.items().length }} items.

```html
<li animate.enter="slide-in" animate.leave="slide-out">item {{ i }}</li>
```

<!--
Add and remove items: Angular adds the class while the element enters or leaves, and waits for the CSS animation to finish.
-->

---

# Per-slide style

<div class="card">styled by this slide's &lt;style&gt;</div>

<div class="card nested"><span>a nested <code>&amp;</code> rule colours this</span></div>

```html
<style>
h1 { color: #38bdf8; }
.card { border: 2px dashed #38bdf8; animation: wobble 2s infinite; }
.card.nested { & span { color: #f472b6; } }
</style>
```

<style>
h1 { color: #38bdf8; letter-spacing: .1em; }
.card { padding: 1rem; border: 2px dashed #38bdf8; margin: .5rem 0; animation: wobble 2s ease-in-out infinite; }
.card.nested { & span { color: #f472b6; } }
@keyframes wobble { 0%,100% { transform: rotate(0) } 50% { transform: rotate(2deg) } }
</style>

---

# Styles stay on their slide

The previous slide coloured its `h1` and dashed its `.card`. Here both are back to the theme:

<div class="card">a .card on another slide</div>

A slide's `<style>` is nested inside that slide's own element, so its selectors cannot reach the rest of the deck.

---

# UnoCSS from components

<uno-only />

Utility classes that appear only in a component's template are generated too.

---
layout: center
class: text-center
---

# CSS animation on a click

<div slide-ng-click class="spin-box">spin</div>

Appears on the next click, then a CSS animation keeps it turning.

<style>
.spin-box { display: inline-flex; align-items: center; justify-content: center; width: 6rem; height: 6rem; margin: 2.5rem 0 1.5rem; border-radius: .75rem; background: #0ea5e9; color: white; font-weight: 700; animation: spin 3s linear infinite; }
@keyframes spin { to { transform: rotate(360deg) } }
</style>

---

# Theme component

<minimal-callout title="Note">A callout from the theme, next to a <pulse-dot label="dot" /> of mine.</minimal-callout>

The theme's components and the deck's own components mix freely.

---
layout: end
---

# The end
