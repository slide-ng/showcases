import { Component, computed, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

// A colour chip: <brand-swatch name="Roast" hex="#d9480f" />. The label turns dark on light colours.
@Component({
  selector: 'brand-swatch',
  host: { class: 'swatch', '[style.background]': 'hex()', '[style.color]': 'ink()' },
  template: '<strong>{{ name() }}</strong><span>{{ hex() | uppercase }}</span>',
  imports: [UpperCasePipe],
})
export class BrandSwatch {
  name = input('');
  hex = input('#000');
  protected ink = computed(() => {
    const h = this.hex().replace('#', '');
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
    return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? '#2b1d14' : '#ffffff';
  });
}
