---
theme: ../../themes/paper
title: Layouts and Sizes
issue: No. 18
date: October 2026
aspectRatio: 1/1
canvasWidth: 800
routerMode: hash
defaults:
  transition: fade
---

# Layouts & Sizes

Every built-in layout, on a square canvas

<!--
This deck sets `aspectRatio: 1/1` and `canvasWidth: 800` in the headmatter: an 800 by 800 slide, scaled to fit the window.
`defaults: { transition: fade }` gives every slide the same transition.
-->

---
hideInToc: true
---

# In this issue

<slide-ng-toc maxDepth="2" />

<p class="mt-8 text-sm opacity-60">Page <slide-ng-current-no /> of <slide-ng-total /></p>

<!-- `<slide-ng-toc>` lists the slides; sections are level 1, the slides under them `level: 2`. -->

---
layout: intro
---

# Introduction

A layout decides where the content of a slide goes. Pick one with `layout:` in the slide's frontmatter.

Twenty-one layouts come built in, and a theme can replace any of them: this one restyles `cover`, `section`, `fact` and `quote`.

---
layout: section
no: I
---

# Text layouts

<slide-ng-toc mode="onlyCurrentTree" class="mt-6 text-base" />

<!-- On a section slide, `mode="onlyCurrentTree"` lists only the slides of this section. -->

---
layout: center
class: text-center
title: Centred text
level: 2
---

# center

Content in the middle of the slide. Add `class: text-center` to centre the lines too.

---
layout: statement
level: 2
---

# Layouts are slots with opinions

---
layout: fact
level: 2
---

# 21

layouts come built in

---
layout: quote
level: 2
---

# "Make it square, and the world becomes a grid."

Marta Lindqvist, editor

---
layout: section
no: II
---

# Picture layouts

<slide-ng-toc mode="onlyCurrentTree" class="mt-6 text-base" />

---
layout: image
image: /landscape.svg
backgroundSize: contain
title: image
level: 2
---

<!-- `layout: image` with `backgroundSize: contain`: the whole picture, letterboxed. -->

---
layout: image-left
image: /portrait.svg
backgroundSize: cover
level: 2
---

# image-left

The picture fills the left half, cropped by `backgroundSize: cover`.

The text goes on the right.

---
layout: image-right
image: /landscape.svg
backgroundSize: cover
level: 2
---

# image-right

The same wide picture as before, cropped to the right half.

`backgroundSize` takes any CSS value: `cover`, `contain`, `80%`.

---
layout: iframe-right
url: colophon.html
scale: 0.8
level: 2
---

# iframe-right

A web page beside the text, here a page from the deck's `public/` folder, scaled to 80%.

<!--
`url: colophon.html` is relative to the deck's address. The deck uses `routerMode: hash`,
so the address stays the deck's folder on every slide and in the presenter.
-->

---
layout: section
no: III
---

# Columns and canvases

<slide-ng-toc mode="onlyCurrentTree" class="mt-6 text-base" />

---
layout: two-cols
layoutClass: gap-12
level: 2
---

# two-cols

The default slot is the left column.

<slide-ng-link to="2">Back to the contents</slide-ng-link>

::right::

# Right

`::right::` starts the right column. `layoutClass` sets the gap between them.

<slide-ng-arrow x1="430" y1="380" x2="200" y2="190" color="#c8412b" width="3" />

---
layout: two-cols-header
level: 2
---

# two-cols-header

::left::

### Left

A header across the top, then two columns.

::right::

### Right

The `::bottom::` slot runs under both.

::bottom::

<slide-ng-render-when context="print">
<p class="text-sm">This line is only in the printed PDF.</p>
<p fallback class="text-sm">On screen this line shows; in the PDF another one takes its place.</p>
</slide-ng-render-when>

---
layout: full
title: full
level: 2
---

<div class="w-full h-full grid place-items-center text-center" style="background: var(--paper-ink); color: var(--paper-bg)">
<div>
<p class="text-sm uppercase tracking-widest opacity-60">layout: full</p>
<p class="text-5xl font-serif">The whole canvas</p>
</div>
</div>

<!-- `full` gives the content the whole canvas, with the usual padding; the content brings its own background. -->

---
layout: none
title: none
level: 2
---

<div class="absolute inset-0 p-16 grid content-end" style="background: #c8412b; color: #f4efe6">
<p class="text-sm uppercase tracking-widest opacity-80">layout: none</p>
<p class="text-4xl font-serif leading-tight">No padding, no background, no styles: the slide is yours.</p>
</div>

---
layout: end
---

The end
