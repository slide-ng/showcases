import { Component, input } from '@angular/core';

// A big quote on the left (::quote::), an aside on the right (::aside::), the slide's own text as a header.
@Component({
  selector: 'brand-split-quote',
  host: { class: 'slidev-layout split-quote', '[style.--accent]': 'accent()' },
  template: `
    <header class="sq-head"><ng-content /></header>
    <div class="sq-body">
      <blockquote class="sq-quote"><ng-content select="[quote]" /></blockquote>
      <aside class="sq-aside"><ng-content select="[aside]" /></aside>
    </div>
    <footer class="sq-by">— {{ author() }}@if (role()) {<span>, {{ role() }}</span>}</footer>
  `,
})
export class SplitQuoteLayout {
  author = input('Anonymous');
  role = input('');
  accent = input('#d9480f');
}
