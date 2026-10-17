---
title: Types You Can Touch
theme: ../../themes/moss
---

# Types You Can Touch

Live editors and type popups for a TypeScript talk

---

# An editor in the slide

```ts {monaco}
// Try editing: the colours come from setup/monaco.ts
type Celsius = number & { readonly __unit: 'C' };
const boil = 100 as Celsius;
```

<div class="flex items-center gap-8 mt-6">
<moss-stat value="0" label="CDN requests"></moss-stat>
<p class="text-lg opacity-80">Monaco ships with the deck, so the editor works offline. <code>setup/monaco.ts</code> defines the moss editor theme and turns off the minimap.</p>
</div>

---

# Before and after

```ts {monaco-diff}
function area(r) {
  return 3.14 * r * r;
}
~~~
function area(r: number): number {
  return Math.PI * r ** 2;
}
```

<p class="text-lg opacity-80 mt-4">A <code>{monaco-diff}</code> block splits the code at the <code>~~~</code> line and shows both sides, with the changes marked.</p>

---

# Run it: JavaScript

```js {monaco-run}
const primes = [];
for (let n = 2; primes.length < 10; n++) {
  if (primes.every((p) => n % p)) primes.push(n);
}
console.log(primes.join(', '));
```

<p class="text-lg opacity-80 mt-4">The code runs as soon as the slide opens, in a sandboxed frame. Change it and the output follows.</p>

---

# Run it: TypeScript, on a click

```ts {monaco-run} {autorun:false, showOutputAt:'+1', height:'auto'}
interface User { name: string; age: number }
const users: User[] = [{ name: 'Mira', age: 34 }, { name: 'Tomas', age: 29 }];
console.log(users.map((u) => `${u.name} (${u.age})`));
console.table(users);
```

<p class="text-lg opacity-80 mt-4">TypeScript is turned into JavaScript for you. With <code>autorun:false</code> nothing runs until you press play, and the output panel waits for the next click.</p>

---

# A file you can write

<<< ./snippets/demo.ts {monaco-write}

<p class="text-lg opacity-80 mt-4">While <code>npm start</code> runs, edits here are saved into <code>snippets/demo.ts</code>: live-code in the talk, keep the result in the repository. In a built deck it is a normal editor.</p>

---

# Twoslash: queries

```ts twoslash
const scores = [3, 7, 9];
//    ^?
const best = Math.max(...scores);
//    ^?
const label = `best: ${best}` as const;
//    ^?
```

<p class="text-lg opacity-80 mt-4">A <code>//    ^?</code> comment pins the type of the name above it. The types are worked out when the deck is built, so no compiler reaches the browser.</p>

---

# Twoslash: errors and cut

```ts twoslash
// @errors: 2322
interface Point { x: number; y: number }
// ---cut---
const p: Point = { x: 1, y: '2' };
```

<p class="text-lg opacity-80 mt-4"><code>// @errors: 2322</code> shows the expected error under its line, and everything above <code>// ---cut---</code> is checked but not shown.</p>

---

# Twoslash: hover popups

```ts twoslash
interface Order { id: string; total: number; paidAt?: Date }
const orders: Order[] = [{ id: 'A-17', total: 42 }, { id: 'B-03', total: 18 }];
const unpaid = orders.filter((o) => !o.paidAt);
const owed = unpaid.reduce((sum, o) => sum + o.total, 0);
```

<p class="text-lg opacity-80 mt-4">Hover any name to see its type, just like in your editor.</p>

---
layout: section
---

# Thanks
