---
title: Refactoring in Six Moves
theme: ../../themes/blueprint
sheet: SHEET 22
magicMoveDuration: 500
---

# Refactoring in Six Moves

A cart total, rewritten one step at a time

<!--
Six Magic Move blocks in this deck. Each click animates the code from one version to the next, so the audience sees what changed instead of reading two listings.
-->

---
layout: section
---

# Part 1: the long story

---

# From a loop to a one-liner

````md magic-move [cart.js] {lines: true}
```js {*|2-4}
function total(cart) {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum = sum + cart[i].price * cart[i].qty;
  }
  return sum;
}
```

```js
function total(cart) {
  let sum = 0;
  for (const item of cart) {
    sum += item.price * item.qty;
  }
  return sum;
}
```

```js
const total = (cart) =>
  cart.reduce((sum, item) => sum + item.price * item.qty, 0);
```

```ts {1|3-4}
interface Item { price: number; qty: number }

const total = (cart: Item[]): number =>
  cart.reduce((sum, item) => sum + item.price * item.qty, 0);
```

```ts
interface Item { price: number; qty: number }
const line = (i: Item) => i.price * i.qty;
const total = (cart: Item[]) => cart.map(line).reduce((a, b) => a + b, 0);
```

```py
def line(item): return item.price * item.qty
def total(cart): return sum(line(i) for i in cart)
```

```rust
fn total(cart: &[Item]) -> f64 {
    cart.iter().map(|i| i.price * i.qty as f64).sum()
}
```
````

<bp-note label="A">Seven versions in one block. A line range inside a step, like <code>{*|2-4}</code>, adds clicks of its own.</bp-note>

<!--
Start with the loop and point at its body (the range 2-4), then modernise it, add types, split out a helper, and finally port it to Python and Rust.
-->

---

# Two Magic Moves side by side

<div class="grid grid-cols-2 gap-6 mt-4">

````md magic-move [price.ts]
```ts
const price = (item) =>
  item.price;
```

```ts
const price = (item: Item) =>
  item.price;
```

```ts
const price = (item: Item) =>
  item.price * (1 - item.discount);
```
````

````md magic-move [price.go] {at: 3}
```go
func Price(i Item) float64 {
	return i.Price
}
```

```go
func Price(i Item) float64 {
	return i.Price * (1 - i.Discount)
}
```
````

</div>

<bp-note label="B">The Go block waits for <code>{at: 3}</code>, after the TypeScript one has finished.</bp-note>

---

# Starting from a snippet

````md magic-move [counter.ts]
<<< ./snippets/counter.ts

```ts
export const counter = () => {
  let n = 0;
  return () => ++n;
};
```
````

<bp-note label="C">The first step is read from <code>snippets/counter.ts</code>, so the slide always starts from the real file.</bp-note>

---

# For comparison: line ranges

```ts [checkout.ts] {1|2|3|all} {lines:true}
const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
const shipping = subtotal > 50 ? 0 : 4.9;
const total = subtotal + shipping;
```

<bp-note label="D">A plain code block with <code>{1|2|3|all}</code> walks through the lines without changing them.</bp-note>

---
layout: section
---

# Part 2: mixing with clicks

---

# Clicks before and after a Magic Move

<div slide-ng-click class="text-xl mb-4">The question: how much is waiting in each cart?</div>

````md magic-move [report.sql] {at: 2, duration: 1200}
```sql
SELECT * FROM cart;
```

```sql
SELECT SUM(price * qty) AS total FROM cart;
```

```sql
SELECT user_id, SUM(price * qty) AS total
FROM cart GROUP BY user_id;
```
````

<div slide-ng-click="4" class="text-xl mt-4">One query, one row per customer.</div>

<!--
Click 1 asks the question, the Magic Move starts at click 2 (and takes 1.2 s per step), and the answer comes at click 4, after its last step. A block placed with `at` does not move the click counter, so the note names its click too.
-->

---

# Breaking up a long line

````md magic-move [config.ts] {lines: true}
```ts
const config = { url: "/api/v1/carts", retries: 3, timeoutMs: 15000, cache: false };
```

```ts
const config = {
  url: "/api/v1/carts",
  retries: 3,
  timeoutMs: 15000,
  cache: false,
};
```
````

<bp-note label="E">What a formatter does, shown as one move: every token travels to its new line.</bp-note>

---
layout: center
---

# Six moves

<bp-note label="F">Write each version as a normal code fence, wrap them in four backticks, and let the clicks tell the story.</bp-note>
