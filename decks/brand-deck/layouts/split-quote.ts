import { Component, input } from '@angular/core';

// A big quote on the left (::quote::), an aside on the right (::aside::), the slide's own text as a header.
@Component({
  selector: 'brand-split-quote',
  host: { class: 'slidev-layout split-quote', '[style.--accent]': 'accent()' },
  templateUrl: './split-quote.html',
})
export class SplitQuoteLayout {
  author = input('Anonymous');
  role = input('');
  accent = input('#d9480f');
}
