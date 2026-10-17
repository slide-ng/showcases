---
theme: ../../themes/paper
title: Pipes and i18n
issue: No. 12
date: October 2026
lang: de
---

# Pipes and i18n

Formatting values in Angular slides, with a German locale

<!--
The deck registers the German locale in setup/main.ts and provides LOCALE_ID 'de-DE', so every pipe below formats the German way unless told otherwise.
-->

---
layout: section
no: I
---

# Numbers

---

# Numbers, currency, percent

<stats-source #s />

@let n1 = s.revenue | number;
@let n2 = s.revenue | number:'1.0-0';
@let c1 = s.revenue | currency;
@let c2 = s.revenue | currency:'JPY';
@let p1 = s.ratio | percent:'1.1-1';

| expression | output |
| --- | --- |
| <code>revenue &#124; number</code> | {{ n1 }} |
| <code>revenue &#124; number:'1.0-0'</code> | {{ n2 }} |
| <code>revenue &#124; currency</code> | {{ c1 }} |
| <code>revenue &#124; currency:'JPY'</code> | {{ c2 }} |
| <code>ratio &#124; percent:'1.1-1'</code> | {{ p1 }} |

Inline in a paragraph: {{ 0.5 | percent }} of {{ 42 | currency:'GBP' }}.

<!--
Note the decimal comma and the euro sign after the amount: that is the de-DE locale at work.
-->

---
layout: section
no: II
---

# Dates and text

---

# Dates

<stats-source #s />

- short: {{ s.launched | date:'short' }}
- long: {{ s.launched | date:'longDate' }}
- with a time zone: {{ s.launched | date:'yyyy-MM-dd HH:mm':'UTC' }}
- weekday: {{ s.launched | date:'EEEE' }}
- in French, on request: {{ s.launched | date:'fullDate':'UTC':'fr' }}
- a number in German: {{ 1234.5 | number:'1.2-2':'de' }}

---

# Text pipes

<stats-source #s />

- uppercase: {{ 'quiet please' | uppercase }}
- lowercase: {{ 'SHOUTING' | lowercase }}
- titlecase: {{ 'the quick brown fox' | titlecase }}
- slice of a list: {{ s.sections | slice:1:3 | json }}
- slice of text: {{ 'Angular' | slice:0:3 }}
- json: <code>{{ s.team | json }}</code>

---

# Pipes in control flow

<stats-source #s />

@for (e of s.team | keyvalue; track e.key) {
<div><strong>{{ e.key | uppercase }}</strong>: {{ e.value }}</div>
}

@if (s.sections | slice:0:2; as firstTwo) {
The first two sections: {{ firstTwo.join(', ') }}
}

@let pct = s.ratio | percent;

@if (s.ratio > 0.5) {
Most readers finished the issue.
} @else {
{{ pct }} of readers finished the issue.
}

<!--
Pipes work in @for and @if headers, in `as` aliases and in @let.
-->

---

# Pipes in bound attributes

<stats-source #s />

<div [title]="s.revenue | currency:'EUR'" class="p-2 border cursor-help">Hover me: the tooltip is the revenue in euros</div>

<div [attr.data-year]="s.launched | date:'yyyy'" [class.font-bold]="(s.sections | slice:0:1).length > 0" class="mt-2">This line is bold because a piped expression said so</div>

<span paper-hint="Hello from a directive" class="mt-2 inline-block">A directive from components/ adds a tooltip</span>

---

# async

<stats-source #s />

Release: **{{ s.release$ | async }}**

@for (x of s.items$ | async; track x) {
- {{ x | titlecase }}
}

<price-feed />

<!--
The ticker counts up five times, every 400 ms, then stops: `async` subscribes and unsubscribes for us.
-->

---

# i18nPlural and i18nSelect

<stats-source #s />

@let msgs = { '=0': 'no letters', '=1': 'one letter', 'other': '# letters' };
@let pronoun = { female: 'She', male: 'He', other: 'They' };

- {{ 0 | i18nPlural:msgs }}, {{ 1 | i18nPlural:msgs }}, {{ s.sections.length | i18nPlural:msgs }} to the editor
- {{ s.editor.pronoun | i18nSelect:pronoun }} answered all of them; {{ 'n/a' | i18nSelect:pronoun | lowercase }} will be printed next month.

---
layout: section
no: III
---

# Your own pipe

---

# A custom pipe

`components/initials.pipe.ts` declares `@Pipe({ name: 'initials' })`, and any slide can use it.

<stats-source #s />

- {{ s.editor.name }} → **{{ s.editor.name | initials }}**
- with an argument: {{ 'lena marie vogt' | initials:' ' }}
- chained: {{ s.team.lead | initials | lowercase }}

```ts
@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(value: string, sep = '.'): string {
    return value.split(/\s+/).filter(Boolean)
      .map((w) => w[0].toUpperCase() + sep).join('');
  }
}
```

---

# In a component too

Components import the same pipe class themselves:

<price-feed owner="tomas arvidsson kell" />

<paper-pull by="The editor">Pipes keep templates honest.</paper-pull>

---
layout: end
---

# Fin
