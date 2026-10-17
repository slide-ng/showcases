---
theme: ../../themes/blueprint
title: مخطط النقل في مدينة الواحة
author: ليلى حداد
lang: ar
htmlAttrs: { dir: rtl, lang: ar }
fonts:
  sans: IBM Plex Sans Arabic, IBM Plex Sans Hebrew, Noto Sans JP
  mono: IBM Plex Mono
layout: cover
sheet: لوحة ٠١
exportFilename: al-waha-transit-plan-2030
hideInToc: true
info: |
  ## مخطط النقل في مدينة الواحة
  خطة النقل العام لعام ٢٠٣٠ في مدينة الواحة، مع ملخصات من المدن الشريكة باليابانية والألمانية والعبرية.
  Al-Waha Transit Plan 2030, an invented city, in Arabic with partner-city pages in Japanese, German and Hebrew.
---

# مخطط النقل في مدينة الواحة

خطة النقل العام لعام ٢٠٣٠ — Al-Waha Transit Plan 2030

<!-- مرحبًا بكم. نعرض الخطة في عشرين دقيقة ثم نفتح باب الأسئلة. -->

---
hideInToc: true
---

# المحتويات

<slide-ng-toc columns="2" listStyle="arabic-indic" />

---
layout: section
level: 1
---

# الفصل الأول: الشبكة

---
level: 2
---

# الأهداف الرئيسية

- تقليل زمن الرحلة بنسبة ٣٠٪
- ربط ١٢ حيًا بخط **BRT** جديد
- خدمة على مدار ٢٤ ساعة في عطلة نهاية الأسبوع
  - المرحلة الأولى: ٢٠٢٧
  - المرحلة الثانية: ٢٠٢٩

**مراحل العمل:**

1. الدراسة
2. التصميم
3. التنفيذ

<!-- خط BRT هو حافلات سريعة في مسار خاص بها، أرخص من المترو وأسرع في التنفيذ. -->

---
level: 2
---

# البيانات المفتوحة

نستخدم واجهة `GET /api/v2/routes` لجلب ٤٥ خطًا من بيانات GTFS، ثم ننشر مواقع الحافلات الحية عبر Kafka.

يصل الخط 12A إلى المحطة المركزية كل ٦ دقائق في ساعات الذروة.

<div class="flex gap-10 mt-8 text-xl">
<span>🚌 الحافلات</span>
<span>🚇 المترو</span>
<span>🚲 الدراجات</span>
</div>

<!-- كل البيانات متاحة للمطورين بترخيص مفتوح منذ يناير. -->

---
level: 2
---

# جدول المحطات

| المحطة          | الخط  | الركاب يوميًا | الافتتاح |
| --------------- | ----- | ------------- | -------- |
| الميناء         | أحمر  | ١٢٬٤٠٠        | ٢٠٢٧     |
| الجامعة         | أزرق  | ٨٬٩٠٠         | ٢٠٢٨     |
| المحطة المركزية | أخضر  | ٢١٬٠٠٠        | ٢٠٢٧     |

<bp-note label="أ">أرقام الركاب تقديرية من دراسة ٢٠٢٥.</bp-note>

---
level: 2
---

# حساب زمن الرحلة

نحسب زمن الرحلة في تطبيق الركاب بهذه الدالة:

```ts
// حساب زمن الرحلة بالدقائق
export function travelTime(km: number, speed = 40): number {
  return (km / speed) * 60; // دقائق
}
```

مثال: `travelTime(12)` تعطي ١٨ دقيقة لرحلة طولها ١٢ كيلومترًا.

<!-- الكود يُكتب من اليسار إلى اليمين حتى داخل شريحة عربية، والتعليقات العربية داخله تبقى مقروءة. -->

---
level: 2
---

# زمن الانتظار والسعة

زمن الانتظار المتوقع $E[W] = \frac{h}{2}$ حيث $h$ هو الفاصل الزمني بين حافلتين بالثواني.

$$
C = \frac{3600}{h} \times N
$$

حيث $C$ عدد الركاب في الساعة و $N$ عدد المقاعد في الحافلة.

<bp-note label="ب">جميع الأرقام تقديرية.</bp-note>

<!-- مثال: حافلة كل ١٢٠ ثانية بثمانين مقعدًا تنقل ٢٤٠٠ راكب في الساعة. -->

---
layout: section
level: 1
---

# الفصل الثاني: المدن الشريكة

---
level: 2
---

# 東京から学ぶこと

<div class="text-lg">

姉妹都市・東京の交通局からのまとめ:

- 定時運行率 99.9%
- 一日の乗客数 約 4,000 万人
- IC カード一枚で、バスも電車も乗り換えが簡単

</div>

<style>
.slidev-layout { direction: ltr; text-align: left; }
</style>

<!-- ملخص من شركائنا في طوكيو، كما وصلنا باليابانية. أهم درس: بطاقة واحدة لكل وسائل النقل. -->

---
level: 2
---

# Partnerstadt Graz

<div lang="de" class="text-lg">

Verkehrsberuhigungsmaßnahmen in der Innenstadt:

- Alle Straßenbahnhaltestellen werden bis 2028 barrierefrei umgebaut.
- Die Geschwindigkeitsbegrenzung in Wohngebieten sinkt auf 30 km/h.
- Fahrradabstellanlagen an jeder Haltestelle.

</div>

<style>
.slidev-layout { direction: ltr; text-align: left; }
.slidev-layout [lang='de'] { hyphens: auto; }
</style>

<!-- من غراتس: الكلمات الألمانية الطويلة تنقسم بشرطة عند نهاية السطر. -->

---
layout: two-cols
layoutClass: gap-10
level: 2
---

# حيفا

- الخط الأحمر يبدأ العمل في ٢٠٢٧
- يربط المحطة المركزية بالميناء
- نتبادل بيانات الركاب كل شهر

::right::

<div lang="he">

# חיפה

- הקו האדום יפעל מ־2027
- הוא יחבר את התחנה המרכזית לנמל
- אנחנו מחליפים נתוני נוסעים כל חודש

</div>

<!-- العمود الأول على اليمين لأن الشريحة من اليمين إلى اليسار. العبرية أيضًا تُكتب من اليمين. -->

---
layout: center
class: text-center
hideInToc: true
---

# شكرًا

<div class="text-xl mt-6">תודה · ありがとう · Danke</div>
