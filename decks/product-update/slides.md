---
theme: ../../themes/minimal
title: Q3 Product Update
layout: cover
background: /bg.svg
author: Tallyfold Product Team
exportFilename: tallyfold-q3-update
info: |
  ## Q3 Product Update
  Tallyfold, October 2026: what shipped, how the numbers moved, and the plan for Q4. Tallyfold is an invented company.
---

# Q3 Product Update

Tallyfold · October 2026

<!-- Welcome everyone. Twenty minutes, then questions. The numbers are preliminary until the board meeting. -->

---
layout: intro
---

# Who we are

<div class="flex items-center gap-3 mt-6 text-lg"><carbon-chart-line class="text-4xl text-teal-400" /> Analytics for small teams: dashboards without a data team</div>
<div class="flex items-center gap-3 mt-4 text-lg"><span class="i-carbon:user-multiple text-4xl text-teal-400"></span> 42 people in 6 squads, 3,100 paying teams</div>

<!-- Two squads are new this quarter: Mobile and Alerts. -->

---
transition: slide-up
class: px-20
---

# Highlights

<div class="space-y-3 text-xl mt-6">
<div slide-ng-click>✅ Launched Dashboards v2</div>
<div slide-ng-after class="pl-8 text-base op70">↳ 1,200 teams moved over in the first month</div>
<div slide-ng-click>✅ SOC 2 Type II report</div>
<div slide-ng-click>✅ New pricing page, old billing switched off</div>
<div slide-ng-click="3" slide-ng-click-hide class="text-amber-400">⏳ Old billing pages, still live</div>
</div>

<!--
Start with what is still open: the old billing pages.
[click] Dashboards v2, our biggest release this year.
[click] SOC 2: the report is on the trust page.
[click] And the old billing pages are gone: the new pricing page replaced them on 30 September.
-->

---

# Metrics

| Metric | Q2 | Q3 | Change |
| --- | ---: | ---: | :---: |
| Monthly active users | 12,400 | 15,900 | <mdi-arrow-up class="text-green-400" /> 28% |
| Monthly churn | 3.1% | 2.4% | <mdi-arrow-down class="text-green-400" /> 0.7 pt |
| Net Promoter Score | 41 | 47 | <ph-star-fill class="text-yellow-400" /> +6 |

<minimal-callout title="Heads up">Numbers are preliminary until the board meeting on 4 November.</minimal-callout>

---
layout: center
class: text-center
---

# Revenue up 31%

<div class="text-lg op70 mt-4">compared to Q2, mostly from teams upgrading to the Growth plan</div>

---
layout: fact
---

# 15.9k

monthly active users

---
layout: statement
---

# We ship every week.

<!-- 64 releases this quarter; the full-bleed slide later shows them. -->

---
layout: quote
---

# "Tallyfold replaced three spreadsheets and two tools for us."

<div class="text-base op70 not-italic mt-4">Operations lead at a twelve-store bakery chain</div>

---
layout: image
image: /hero.svg
title: Dashboards v2
backgroundSize: contain
---

<!-- Dashboards v2: tiles you drag into place, filters shared across a whole dashboard, and a query engine three times faster. -->

---
layout: image-left
image: /chart.svg
backgroundSize: cover
class: flex flex-col justify-center
---

# Growth

- **15.9k** monthly active users in September
- Up from **12.4k** at the end of June
- The jump in August is the Dashboards v2 launch

---
layout: image-right
image: /team.svg
backgroundSize: cover
class: flex flex-col justify-center
---

# The team

- **Mobile** and **Alerts** started in July
- Every squad owns its roadmap and its on-call rota
- We are hiring two engineers for Alerts

---
layout: iframe-right
url: /changelog.html
---

# The changelog

Every release since July, on the page customers read.

<span class="minimal-muted">The page on the right is live: scroll it.</span>

---
layout: full
---

@let weeks = [2, 3, 1, 4, 5, 3, 6, 5, 7, 6, 8, 7, 7];

<div class="w-full h-full flex flex-col justify-center px-16 bg-[#14171b]">
  <div class="text-sm uppercase tracking-widest op60">Releases per week, Q3</div>
  <div class="text-6xl font-bold mt-2 mb-10">64 releases in 13 weeks</div>
  <div class="flex items-end gap-3 h-60">
    @for (n of weeks; track $index) {
    <div class="flex-1 rounded-t bg-amber-500" [style.height.%]="n * 12" [style.opacity]="0.45 + n * 0.07"></div>
    }
  </div>
  <div class="flex justify-between text-xs op60 mt-2"><span>1 July</span><span>30 September</span></div>
</div>

---
layout: section
---

# Q4 roadmap

---
layout: two-cols
layoutClass: gap-6
---

# Done in Q3

- Single sign-on
- Audit log export
- Dashboards v2

::right::

# Next in Q4

- Mobile app beta
- Alerts on any metric
- Usage-based pricing

---
layout: two-cols-header
---

# Q4 plan

::left::

### Engineering

- Ship the mobile beta to 200 teams
- Alerts on any dashboard tile

::right::

### Design

- New onboarding: first dashboard in five minutes
- Accessible colour palettes for charts

::bottom::

<div class="text-sm op70">Dates are targets, not promises.</div>

---
layout: none
---

<div class="p-16 h-full flex flex-col justify-center">
  <div class="text-sm uppercase tracking-widest op60 mb-4">Appendix</div>
  <h1 class="text-4xl mb-6">How we count</h1>
  <dl class="grid grid-cols-[12rem_1fr] gap-y-3 text-lg">
    <dt class="op60">Active user</dt><dd>opened a dashboard at least once in the month</dd>
    <dt class="op60">Churn</dt><dd>paying teams that cancelled, over paying teams at the start of the month</dd>
    <dt class="op60">NPS</dt><dd>in-app survey, 1,140 answers in Q3</dd>
  </dl>
</div>

---
layout: end
transition: fade
---

Thank you · questions in #product-updates
