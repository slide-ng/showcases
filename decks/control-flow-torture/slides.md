---
theme: ../../themes/blueprint
title: Control Flow in Slides
sheet: SHEET 14
---

# Control Flow in Slides

@if, @for, @switch, @let and @defer, written straight into markdown

<!--
All the data on these sheets comes from one hidden component, data-box, that holds a small parts list for a workshop bench.
-->

---

# Nested @if / @else if / @else

<data-box #d />

@for (r of d.rows; track r.id) {
@if (!r.ok) {
- **{{ r.part }}**: on hold, failed inspection
} @else if (r.qty >= 10) {
@if (d.rows.length > 3) {
- **{{ r.part }}**: bulk order, {{ r.qty }} pieces
} @else {
- **{{ r.part }}**: bulk order
}
} @else {
- **{{ r.part }}**: ready, {{ r.qty }} on the shelf
}
}

<bp-note label="A">Blocks nest as deep as you need, and each branch can hold plain markdown.</bp-note>

---

# @for context variables

<data-box #d />

@for (r of d.rows; track r.id; let i = $index, c = $count, first = $first, odd = $odd) {
<div class="flex gap-4" [class.font-bold]="first" [class.op60]="odd">
<span class="inline-block w-12">{{ i + 1 }}/{{ c }}</span>
<span class="inline-block w-28">{{ r.part }}</span>
<span class="inline-block text-amber-300">{{ $first ? 'first' : $last ? 'last' : $even ? 'even' : 'odd' }}</span>
</div>
}

@for (x of d.backorders; track x) {
- {{ x }}
} @empty {
> [!NOTE]
> No back orders. The `@empty` branch can hold any markdown, this alert included.
}

---

# @switch with many cases

<data-box #d />

<button class="px-3 py-1 border" (click)="d.cycle()">next status</button>

@switch (d.status()) {
@case ('draft') {
**Draft**: nobody has looked at it yet
}
@case ('review') {
**In review**
1. Ines checks the dimensions
2. Bram checks the tolerances
}
@case ('approved') {
**Approved** ✅
}
@case ('rejected') {
**Rejected** ❌
}
@case ('archived') {
*Archived*
}
@default {
Status `{{ d.status() }}` is not on the sheet
}
}

---

# @let chains

<data-box #d />

@let rows = d.rows;
@let okRows = rows.filter(r => r.ok);
@let qty = okRows.reduce((t, r) => t + r.qty, 0);
@let label = qty > 40 ? 'large' : 'small';
@let summary = okRows.length + ' of ' + rows.length + ' parts passed, ' + qty + ' pieces (' + label + ' batch)';

**{{ summary }}**

@let doubled = qty * 2;

Two benches need {{ doubled }} pieces.

```html
@let okRows = rows.filter(r => r.ok);
@let qty = okRows.reduce((t, r) => t + r.qty, 0);
```

---

# Control flow in a table

<data-box #d />

<table>
<thead><tr><th>id</th><th>part</th><th>qty</th><th>passed</th></tr></thead>
<tbody>
@for (r of d.rows; track r.id) {
<tr><td>{{ r.id }}</td><td>{{ r.part }}</td><td>{{ r.qty }}</td><td>{{ r.ok ? 'yes' : 'no' }}</td></tr>
}
</tbody>
</table>

<bp-note label="B">Write the table in HTML and let each pass of @for add one row.</bp-note>

---

# Code inside control flow

<data-box #d />

@if (d.rows.length) {

```ts
// Inside a block, code stays code: { }, @for (x of y) and {{ x }} are text.
const rows = [{ id: 'A-1' }];
@Component({ selector: 'part-row' })
```

}

<bp-note label="C">Leave an empty line around the fence, and the block shows it only when its condition holds.</bp-note>

---

# @defer triggers

@defer (on idle) {
<heavy-chart label="on idle" />
} @placeholder {
<div class="p-2 border">placeholder (idle)</div>
}

@defer (on timer(1500ms)) {
<heavy-chart label="on timer(1500ms)" [values]="[5, 10, 15, 20, 25]" />
} @placeholder (minimum 200ms) {
<div class="p-2 border">waiting for the timer</div>
} @loading (after 100ms; minimum 300ms) {
<div class="p-2 border">loading...</div>
}

<!--
The chart component is a separate chunk. It is only downloaded when a trigger fires.
-->

---

# @defer on viewport, interaction and hover

@defer (on viewport) {
<heavy-chart label="on viewport" />
} @placeholder {
<div class="p-2 border">viewport placeholder</div>
}

<div class="grid grid-cols-2 gap-6">
<div>

@defer (on interaction) {
<heavy-chart label="on interaction" />
} @placeholder {
<button class="px-3 py-1 border">click to load the chart</button>
} @error {
<div>the chart could not be loaded</div>
}

</div>
<div>

@defer (on hover; prefetch on idle) {
<spec-card />
} @placeholder {
<div class="p-2 border">hover to load the spec card</div>
}

</div>
</div>

---

# Clicks with control flow

<data-box #d />

@for (r of d.rows; track r.id) {
<div slide-ng-click>{{ r.id }} · {{ r.part }}</div>
}

@if (d.rows.length > 2) {
<div slide-ng-click class="mt-2 font-bold">All {{ d.rows.length }} parts are on the bench</div>
}

<!--
Elements made by @for and @if take part in the click order like any other.
-->

---
layout: section
---

# The end
