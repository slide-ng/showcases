---
title: The Diagram Zoo
theme: ../../themes/minimal
colorSchema: auto
---

# The Diagram Zoo

Every Mermaid animal, fed and photographed

<!--
Every diagram here is a Mermaid code block, drawn in the browser. The deck follows the system colour mode: press `d` to switch and watch the diagrams follow.
-->

---

# Flowcharts: left to right, top down

<div class="grid grid-cols-2 gap-6 items-start">

```mermaid
flowchart LR
  A[Request] --> B{Cached?}
  B -- yes --> C[Return cache]
  B -- no --> D[Query DB] --> E[Store] --> C
```

```mermaid {theme:'neutral', scale: 0.6}
flowchart TD
  S([Start]) --> P[/Parse input/] --> V{Valid?}
  V -->|no| X[[Reject]]
  V -->|yes| R[(Save)]
```

</div>

<!--
Options after `mermaid` pick the theme and the scale: the right-hand chart uses the neutral theme and is drawn at 60 %. Any other key goes to Mermaid's own initialize.
`setup/mermaid.ts` sets the font and the curved edges for every diagram in the deck.
-->

---

# A long pipeline, in three lanes

```mermaid
flowchart LR
  subgraph order[Order]
    direction TB
    s1[Receive order] --> s2[Validate] --> s3[Reserve stock] --> s4[Charge card]
  end
  subgraph warehouse[Warehouse]
    direction TB
    s5[Pick] --> s6[Pack] --> s7[Label] --> s8[Ship]
  end
  subgraph after[After sales]
    direction TB
    s9[Track] --> s10[Deliver] --> s11[Survey] --> s12[Archive]
  end
  order --> warehouse --> after
```

<!--
Twelve steps would never fit in one column; subgraphs with their own direction fold them into lanes, and the arrows link the lanes.
-->

---

# Sequence with autonumber

```mermaid {scale: 0.8}
sequenceDiagram
  autonumber
  participant B as Browser
  participant A as API
  participant D as DB
  B->>A: POST /orders
  A->>D: INSERT order
  D-->>A: id=42
  A-->>B: 201 Created
  Note over B,A: one round trip for the browser
```

---

# Class and state

<div class="grid grid-cols-2 gap-4">

```mermaid
classDiagram
  class Order { +String id +float total +pay() }
  class Item { +String sku +int qty }
  Order "1" --> "*" Item
```

```mermaid
stateDiagram-v2
  [*] --> New
  New --> Paid: pay
  Paid --> Shipped: ship
  Shipped --> [*]
  New --> Cancelled: cancel
```

</div>

---

# Entity relations

```mermaid
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE_ITEM : contains
  PRODUCT ||--o{ LINE_ITEM : "ordered in"
```

---

# A release plan

```mermaid
gantt
  title Release 1.0
  dateFormat YYYY-MM-DD
  axisFormat %b %d
  section Build
  Core engine      :a1, 2026-09-01, 30d
  Themes           :a2, after a1, 20d
  section Ship
  Beta             :b1, after a2, 14d
  Launch party     :milestone, after b1, 1d
```

---

# Pie, mindmap, timeline

<div class="grid grid-cols-3 gap-2">

```mermaid
pie title Traffic
  "Search" : 52
  "Direct" : 30
  "Social" : 18
```

```mermaid
mindmap
  root((Zoo))
    Mammals
      Lion
      Otter
    Birds
      Owl
```

```mermaid
timeline
  title History
  2024 : Idea
  2025 : Prototype
  2026 : 1.0
```

</div>

---

# gitGraph, journey, quadrant

<div class="grid grid-cols-3 gap-2">

```mermaid
gitGraph
  commit
  branch feature
  commit
  checkout main
  merge feature
  commit
```

```mermaid
journey
  title Checkout
  section Cart
    Add item: 5: Me
    Pay: 2: Me
```

```mermaid
quadrantChart
  title Effort vs impact
  x-axis Low effort --> High effort
  y-axis Low impact --> High impact
  Docs: [0.2, 0.8]
  Rewrite: [0.9, 0.3]
```

</div>

---

# As a tag, and PlantUML

<div class="grid grid-cols-2 gap-8 items-start">
<div>

<slide-ng-mermaid code="graph LR; X[A tag] --> Y[A diagram]" />

`<slide-ng-mermaid code="..." />` draws a diagram from an attribute, handy inside your own components.

</div>
<div>

```plantuml
@startuml
Alice -> Bob : Hello!
Bob --> Alice : Hi
@enduml
```

PlantUML diagrams are pictures from a PlantUML server, so they need the network.

</div>
</div>

---
class: bg-gray-900 text-white
---

# Night shift

```mermaid {theme:'dark'}
flowchart LR
  N[Night job] --> B[Backup] --> R[Report]
```

<p class="mt-6 opacity-80">This slide is dark in both colour modes (<span class="font-mono text-amber-300">class: bg-gray-900 text-white</span>), so its diagram asks for <span class="font-mono text-amber-300">theme:'dark'</span> instead of following the mode.</p>

---

# Light and dark

<div class="text-2xl mt-6">
<slide-ng-light-or-dark>
  <div dark>You are in dark mode: every diagram without its own theme is drawn with Mermaid's <code>dark</code> theme.</div>
  <div light>You are in light mode: every diagram without its own theme is drawn with Mermaid's <code>default</code> theme.</div>
</slide-ng-light-or-dark>
</div>

<p class="mt-6 opacity-70">Press <code>d</code> and go back through the zoo.</p>
