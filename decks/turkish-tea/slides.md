---
theme: ../../themes/paper
title: Brewing Turkish Tea
layout: cover
issue: A talk in two languages
date: Autumn 2026
navPosition: top-right
languages:
  en: slides.md
  tr: slides.tr.md
info: |
  ## Brewing Turkish Tea
  A short talk on Turkish tea, written in English and in Turkish. The language button in the bar, at the top right, switches
  between them on the same slide.
---

# Brewing Turkish Tea

Two pots, one stove and fifteen minutes of patience

<!--
This deck is written twice: slides.md in English and slides.tr.md in Turkish. The language button in the bar, at the top right, switches between them and stays on this slide.
-->

---
layout: image-right
image: /caydanlik.svg
backgroundSize: contain
---

# Two pots, one stove

<slide-ng-clicks>

- The **çaydanlık** is two pots, one on top of the other
- The bottom one boils the water
- The top one, the **demlik**, holds the leaves
- The steam from below keeps the brew warm

</slide-ng-clicks>

<!--
[click] Every Turkish kitchen has one. [click] Water below. [click] Tea above. [click] That is why the brew can wait on the stove for an hour.
-->

---

# Four steps

<slide-ng-clicks>

1. Fill the bottom pot and bring the water to the boil
2. Put the dry leaves in the top pot, a spoonful for each glass
3. Pour a little boiling water on the leaves, fill the bottom pot again and turn the heat down
4. Leave it to steep for fifteen minutes, then pour

</slide-ng-clicks>

<!--
[click] Plenty of water: you need it for the brew and for the glasses. [click] Black tea from Rize, on the Black Sea coast. [click] Only enough water to cover the leaves; the bottom pot boils again. [click] Do not stir it while it steeps.
-->

---

# By the numbers

@let water = 1.5;
@let minutes = 15;
@let share = 0.5;
@let teaTime = '2026-11-02T16:30:00';

- Water in the bottom pot: **{{ water | number:'1.1-1' }} litres**
- Time on low heat: **{{ minutes }} minutes**
- Brew in a medium glass: **{{ share | percent }}**, the rest is hot water
- Next tea break: **{{ teaTime | date:'EEEE, HH:mm' }}**

<!--
These values come from Angular's number, percent and date pipes. Switch to Turkish and they follow: a decimal comma, the percent sign in front and the day's name in Turkish.
-->

---
layout: two-cols
---

# Light or dark?

- **Açık**, light: a little brew, a lot of water
- **Koyu**, dark: more brew, less water

::right::

<div class="pt-12">

Ask for **tavşan kanı**, “rabbit’s blood”: a deep, clear red that you can still see through.

Tea comes in a small tulip-shaped glass, with sugar cubes on the side and no milk.

</div>

<!--
Hold the glass by its rim: it is hot. A good host fills it again before you ask.
-->

---
layout: quote
---

# “A chat without tea is like a sky without a moon.”

A Turkish saying

<!--
Çaysız sohbet, aysız gök gibidir.
-->

---
layout: end
---

# Afiyet olsun!

Enjoy your tea

<!--
Thank the audience. "Afiyet olsun" is what you say to someone who is eating or drinking.
-->
