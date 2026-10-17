---
title: One API, Twenty Languages
colorSchema: light
lineNumbers: true
codeCopy: false
info: |
  A tour of one tiny "orders" API written in many languages.
---

# One API, Twenty Languages

A polyglot tour of the `orders` service

<!--
Every block on these slides is coloured by Shiki while the deck is built, so the browser receives finished HTML and no highlighter.
Line numbers are on for the whole deck (`lineNumbers: true`); one block turns them off again.
-->

---

# TypeScript and JavaScript

```ts [orders.ts] {*}
export interface Order { id: string; total: number; items: string[] }
export async function loadOrders(api: string): Promise<Order[]> {
  const res = await fetch(`${api}/orders`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as Order[];
}
```

```js [legacy.js] {2-3}
const total = (orders) =>
  orders.reduce((sum, o) => sum + o.total, 0);
module.exports = { total };
```

<!--
`[orders.ts]` puts a title bar on the block; `{2-3}` highlights two lines and dims the rest.
-->

---

# Python, Go and Rust

```py [orders.py] {1|3-5|all}
from dataclasses import dataclass
@dataclass
class Order:
    id: str
    total: float
```

```go [orders.go]
package orders

func Total(orders []Order) float64 {
	sum := 0.0
	for _, o := range orders {
		sum += o.Total
	}
	return sum
}
```

```rust [lib.rs] {lines:false}
pub fn total(orders: &[Order]) -> f64 {
    orders.iter().map(|o| o.total).sum()
}
```

<!--
The Python block steps through its lines with clicks. Go keeps its tab indentation. The Rust block switches line numbers off with `{lines:false}`.
-->

---

# JVM and Apple

```java [Order.java] {2|3|4} {finally:'all'}
public record Order(String id, double total) {
  public static double sum(List<Order> xs) {
    return xs.stream().mapToDouble(Order::total).sum();
  }
}
```

```kotlin [Order.kt] {1|2} {at:3}
data class Order(val id: String, val total: Double)
fun List<Order>.sum() = sumOf { it.total }
```

```swift [Order.swift]
struct Order: Codable { let id: String; let total: Double }
let sum = orders.reduce(0) { $0 + $1.total }
```

<!--
Java walks lines 2, 3, 4 and then shows everything (`finally:'all'`). Kotlin starts its own steps at click 3, so the two blocks hand over to each other.
-->

---

# Data and shell

```sql [report.sql] {2-3}
SELECT customer_id, SUM(total) AS spent
FROM orders
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY customer_id ORDER BY spent DESC LIMIT 10;
```

```bash [deploy.sh] {startLine:10}
#!/usr/bin/env bash
set -euo pipefail
docker build -t orders:"$(git rev-parse --short HEAD)" .
kubectl rollout restart deployment/orders
```

```graphql [schema.graphql]
type Order { id: ID! total: Float! items: [String!]! }
type Query { orders(first: Int = 10): [Order!]! }
```

<!--
`startLine:10` numbers the shell script as if it were cut from the middle of a longer file.
-->

---

# Config files

```yaml [compose.yaml]
services:
  orders:
    image: orders:latest
    ports: ["8080:8080"]
```

```json [package.json]
{ "name": "orders", "version": "1.0.0", "scripts": { "start": "node dist/main.js" } }
```

```dockerfile [Dockerfile]
FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
CMD ["node", "dist/main.js"]
```

---

# Web front end

```html [index.html]
<main id="app"><h1 class="title">Orders</h1><orders-table></orders-table></main>
```

```css [app.css]
.title { font: 600 2rem/1.2 system-ui; color: #0b6e4f; }
```

```scss [app.scss]
$accent: #0a7;
.table { tr:hover { background: rgba($accent, .1); } }
```

```angular-html [orders.component.html]
@for (o of orders(); track o.id) { <li>{{ o.id }}: {{ o.total | currency }}</li> }
```

```angular-ts [orders.component.ts]
@Component({ selector: 'app-orders', template: `<li>{{ count() }}</li>` })
export class OrdersComponent { count = signal(0); }
```

<!--
Angular templates get their own grammars: control flow and interpolation in the HTML, and the inline template inside the TypeScript decorator.
Nothing inside a code block is read as Angular by the slides themselves.
-->

---

# Ruby, PHP and the fix

```ruby [order.rb]
Order = Struct.new(:id, :total)
def total(orders) = orders.sum(&:total)
```

```php [Order.php]
<?php
function total(array $orders): float {
    return array_sum(array_column($orders, 'total'));
}
```

```diff [fix.diff]
- const total = orders.reduce((s, o) => s + o.total);
+ const total = orders.reduce((s, o) => s + o.total, 0);
```

<!--
The JavaScript version forgot the initial value of reduce, which throws on an empty list. The diff shows the one-line fix.
-->

---

# A long block, one step at a time

```ts [paginate.ts] {1-4|13-16|20-25|all} {maxHeight:'240px'}
export interface Page<T> {
  items: T[];
  number: number;
  last: boolean;
}

export function paginate<T>(items: T[], size: number): Page<T>[] {
  if (size <= 0) throw new RangeError('size must be positive');
  const pages: Page<T>[] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push({
      items: items.slice(i, i + size),
      number: pages.length + 1,
      last: i + size >= items.length,
    });
  }
  return pages;
}

export function pageOf<T>(items: T[], size: number, n: number): Page<T> {
  const pages = paginate(items, size);
  const page = pages[n - 1];
  if (!page) throw new RangeError(`no page ${n}`);
  return page;
}
```

With `maxHeight` the block scrolls inside itself, and each click scrolls the highlighted lines into view.

---

# Install the client

::code-group

```sh [npm]
npm install orders-client
```

```sh [pnpm]
pnpm add orders-client
```

```sh [yarn]
yarn add orders-client
```

::

`::code-group` turns the blocks inside it into tabs, named after each block's `[title]`.

---

# One region of a long file

<<< ./snippets/orders-service.ts#core {13-15} {maxHeight:'320px'}

<!--
`#core` takes only the lines between `// #region core` and `// #endregion core`, so the slide stays in sync with the real file.
-->

---

# The whole file

<<< ./snippets/orders-service.ts ts {*} {maxHeight:'380px'}

<!--
All 146 lines, scrolling inside the block. Good for a reference slide you come back to when someone asks.
-->

---
layout: center
---

# Thanks

Questions? `orders@example.org`
