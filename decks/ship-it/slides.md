---
theme: ../../themes/moss
title: Ship It
titleTemplate: '%s · Forest Ops Meetup'
author: Kai Okafor
info: How the forestry data team publishes every talk as a site, a PDF and an offline copy.
pwa: true
routerMode: hash
remoteAssets: true
favicon: /icon.png
fonts:
  sans: Manrope
  mono: IBM Plex Mono
  selfHost: true
download: true
exportFilename: ship-it
export:
  withClicks: false
---

# Ship It

Publishing a talk: site, PDF, offline, installable

<!--
Say hello. The slides you are looking at are the thing this talk is about:
this deck is a website, it has a PDF button in the bar, and it keeps working without a network.
-->

---
layout: section
---

# The pipeline

---

# One slides.md, three outputs

<div class="grid grid-cols-[1fr_auto] gap-10 items-center">
<div>

- **A website**: `slide-ng build --base /talk/`, for any static host
- **A folder that opens from disk**: `slide-ng build --offline`, for the USB stick at the venue
- **An installable app**: `pwa: true` adds a manifest, icons and a service worker

</div>

<moss-stat value="3" label="outputs from one file"></moss-stat>

</div>

<!-- `--base` and `--offline` do not mix: the offline folder uses relative addresses everywhere. -->

---

# How this gallery ships

The showcase decks live in one repository and go out together on every push to `main`.

<div class="grid grid-cols-2 gap-8">
<div>

```sh
npm run build
# runs scripts/build-all.mjs:
# every deck in showcases.json
#   -> site/<slug>/
# plus the gallery page site/index.html
```

</div>
<div>

1. GitHub Actions installs the packages
2. and a Chromium, for the PDFs and link pictures
3. `npm run build` with `BASE=/slide.ng-showcases/`
4. `site/` is deployed to GitHub Pages

</div>
</div>

<!-- One deck at a time while writing: `npm run build:one ship-it`. -->

---

# Local and remote pictures

<div class="grid grid-cols-2 gap-8">
  <figure class="m-0"><img src="/forest.svg" class="h-44 rounded" alt="A stylised forest at dusk" /><figcaption>public/forest.svg</figcaption></figure>
  <figure class="m-0"><img src="https://raw.githubusercontent.com/slide-ng/slide.ng/main/docs/screenshots/feature-diagrams-dark.png" class="h-44 rounded" alt="A diagram slide made with slide.ng" /><figcaption>a web address, copied into the build by <code>remoteAssets: true</code></figcaption></figure>
</div>

<style>
figcaption { margin-top: 0.5rem; font-size: 0.8rem; opacity: 0.7; }
</style>

<!-- With remoteAssets the built deck never asks another server for a picture: good for privacy, and for offline. -->

---

# Links between slides

With `routerMode: hash` the address of a slide looks like `/#/6`, and any static host will do.

- <slide-ng-link to="8">Jump to the release checklist</slide-ng-link>
- <slide-ng-link to="end">Jump to the end</slide-ng-link>, a slide with `routeAlias: end`

<div class="columns-2 text-sm opacity-80 mt-4">
<slide-ng-toc />
</div>

---
layout: fact
---

# 0 requests

to the network once the service worker has the deck

<!-- After one visit, the deck, its fonts, pictures and the PDF all come from the browser's cache. -->

---

# Release checklist

<slide-ng-clicks>

- Build with the base path of the host
- Click through every slide once
- Download the PDF from the bar
- Switch off the wifi and reload

</slide-ng-clicks>

---

# The commands

```bash
slide-ng build slides.md --base /talk/ --out dist
slide-ng build slides.md --offline --out usb
slide-ng build slides.md --without-notes --out public
slide-ng export slides.md --format pptx
```

<!-- `export` also makes pdf, png and md; `download: true` in the headmatter puts the PDF in the bar. -->

---
layout: statement
---

# Notes stay private

<!--
Build with `--without-notes` and this note is not in the published site.
The presenter view still has notes while you rehearse with the dev server.
-->

---
routeAlias: end
layout: end
---

# Thanks!
