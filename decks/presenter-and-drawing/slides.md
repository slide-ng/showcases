---
theme: ../../themes/minimal
title: Presenter and Drawing
colorSchema: auto
duration: 20min
timer: countdown
drawings:
  enabled: true
  persist: true
  presenterOnly: false
  syncAll: true
---

# Presenter & Drawing

A talk about giving talks

<!--
Welcome, and thanks for coming. The presenter button in the bar opens this view in its own window.

- Twenty minutes, then questions
- Ask questions at the end, or draw them on the last slide
-->

---

# The plan

<div slide-ng-click class="text-2xl my-3">1. Rehearse with the presenter view</div>
<div slide-ng-click class="text-2xl my-3">2. Keep an eye on the timer</div>
<div slide-ng-click class="text-2xl my-3">3. Draw on the slides</div>

<!--
Three things today.

[click] Rehearse: the presenter view shows this note, the next step and the clicks slider.

[click] The timer in the presenter view counts down from `duration: 20min`.

[click] And drawing, which works in every window at once.
-->

---

# The presenter view

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

- The current slide and the next step
- These notes, with the click markers
- A countdown from `duration: 20min`
- The table of contents, to jump anywhere

</div>
<div>

<minimal-callout title="Two screens">
Open <code>/presenter</code> on your laptop and the deck on the projector. Every window of the browser follows the presenter; <code>/notes</code> shows only the notes.
</minimal-callout>

</div>
</div>

<!--
In the notes, `[click]` marks where the next click starts. Double click a marker in the presenter view to jump there.
-->

---

# Drawing board

Press <kbd>p</kbd> (or the pen in the bar) and sketch over the slide.

<div class="w-full h-56 border-2 border-dashed rounded-lg mt-4 grid place-items-center minimal-muted">
Room for a diagram
</div>

<p class="minimal-muted mt-4"><kbd>R</kbd> rectangle, <kbd>E</kbd> ellipse, <kbd>A</kbd> arrow, <kbd>L</kbd> line, digits pick a colour, <kbd>Esc</kbd> closes.</p>

<!--
Draw a box and an arrow here. With `syncAll: true` the audience window shows the drawing as it happens.
-->

---

# Keyboard

<div class="grid grid-cols-2 gap-10">
<div>

| Key | Action |
| --- | --- |
| <kbd>o</kbd> | overview |
| <kbd>g</kbd> | go to a slide |
| <kbd>d</kbd> or <kbd>x</kbd> | dark mode |
| <kbd>p</kbd> | drawing |
| <kbd>b</kbd> | back one slide |

</div>
<div>

<minimal-callout title="Your own keys">
This deck's <code>setup/shortcuts.ts</code> adds <kbd>x</kbd> and <kbd>p</kbd> and takes <kbd>f</kbd> (fullscreen) away, so a stray key cannot change the screen mid-talk. The theme adds <kbd>b</kbd>.
</minimal-callout>

</div>
</div>

---
layout: quote
---

# "Rehearse until the slides are the least interesting part."

Lena Okafor, conference coach

<!--
Pause after the quote. Let it land before moving on.
-->

---

# Laser pointer

Point at things without leaving the presenter view.

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div class="p-6 border rounded-lg"><carbon-settings class="text-3xl" /><p>Settings</p></div>
<div class="p-6 border rounded-lg"><carbon-cursor-1 class="text-3xl" /><p>Cursor Style</p></div>
<div class="p-6 border rounded-lg"><carbon-circle-solid class="text-3xl text-red-500" /><p>Laser</p></div>
</div>

<!-- The presenter's mouse shows on the audience screen as a red dot. -->

---

# Light or dark

<slide-ng-light-or-dark>
  <div dark class="text-3xl mt-6">🌙 Dark mode is on. Press <kbd>d</kbd> for light.</div>
  <div light class="text-3xl mt-6">☀️ Light mode is on. Press <kbd>d</kbd> for dark.</div>
</slide-ng-light-or-dark>

<p class="minimal-muted mt-6">The deck follows the system with <code>colorSchema: auto</code>, and remembers your choice.</p>

---

# Remote control

Run the dev server with a password, and every device on your network can follow along:

```sh
npm start -- --remote=rehearsal
```

Open the printed presenter address on your phone or tablet, and the deck on the projector follows it.

<!-- Use it on a network you trust: the password is sent without encryption. -->

---
layout: end
---

# Questions?
