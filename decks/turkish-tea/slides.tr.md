---
title: Türk Çayı Demlemek
issue: İki dilde bir konuşma
date: Sonbahar 2026
info: |
  ## Türk Çayı Demlemek
  Türk çayı üzerine kısa bir konuşma, İngilizce ve Türkçe yazıldı. Sağ üstteki çubukta bulunan dil düğmesi, aynı slaytta kalarak
  iki dil arasında geçiş yapar.
---

# Türk Çayı Demlemek

İki kap, bir ocak ve on beş dakikalık sabır

<!--
Bu sunum iki kez yazıldı: İngilizcesi slides.md, Türkçesi slides.tr.md dosyasında. Sağ üstteki çubukta bulunan dil düğmesi ikisi arasında geçiş yapar ve bu slaytta kalır.
-->

---

# İki kap, bir ocak

<slide-ng-clicks>

- **Çaydanlık**, üst üste duran iki kaptan oluşur
- Alttaki kapta su kaynar
- Üstteki kaba, yani **demliğe**, çay konur
- Alttan gelen buhar demi sıcak tutar

</slide-ng-clicks>

<!--
[click] Her Türk mutfağında bir tane vardır. [click] Su altta. [click] Çay üstte. [click] Bu yüzden demlik ocakta bir saat bekleyebilir.
-->

---

# Dört adım

<slide-ng-clicks>

1. Alttaki kabı doldurun ve suyu kaynatın
2. Kuru çayı üstteki kaba koyun, her bardak için bir kaşık
3. Yaprakların üzerine biraz kaynar su dökün, alttaki kabı yeniden doldurun ve ocağın altını kısın
4. On beş dakika demlenmeye bırakın, sonra bardaklara koyun

</slide-ng-clicks>

<!--
[click] Bol su koyun: hem dem hem bardaklar için gerekir. [click] Karadeniz kıyısındaki Rize'den siyah çay. [click] Yalnızca yaprakları örtecek kadar su; alttaki kap yeniden kaynar. [click] Demlenirken karıştırmayın.
-->

---

# Rakamlarla

@let water = 1.5;
@let minutes = 15;
@let share = 0.5;
@let teaTime = '2026-11-02T16:30:00';

- Alttaki kapta su: **{{ water | number:'1.1-1' }} litre**
- Kısık ateşte süre: **{{ minutes }} dakika**
- Orta demli bir bardakta dem: **{{ share | percent }}**, gerisi sıcak su
- Bir sonraki çay molası: **{{ teaTime | date:'EEEE, HH:mm' }}**

<!--
Bu değerler Angular'ın number, percent ve date pipe'larından geliyor. İngilizceye geçtiğinizde onlar da değişir: ondalık ayırıcı nokta olur, yüzde işareti sayının sonuna geçer ve gün İngilizce yazılır.
-->

---

# Açık mı, koyu mu?

- **Açık**: az dem, bol su
- **Koyu**: bol dem, az su

::right::

<div class="pt-12">

**Tavşan kanı** isteyin: koyu ama berrak, içi görünen bir kırmızı.

Çay, ince belli küçük bir bardakta gelir; yanında kesme şeker olur, süt olmaz.

</div>

<!--
Bardağı kenarından tutun, sıcaktır. İyi bir ev sahibi, siz istemeden bardağınızı yeniden doldurur.
-->

---

# “Çaysız sohbet, aysız gök gibidir.”

Bir Türk sözü

<!--
İngilizcesi: “A chat without tea is like a sky without a moon.”
-->

---

# Afiyet olsun!

Teşekkürler

<!--
Dinleyicilere teşekkür edin. "Afiyet olsun", yiyen ya da içen birine söylenir.
-->
