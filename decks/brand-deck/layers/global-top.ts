import { Component, inject } from '@angular/core';
import { Nav } from 'slide-ng/lib/nav';
import { SLIDE_NO } from 'slide-ng/lib/slide-context';

// Brand footer: logo, company name, and "slide N of M".
@Component({
  selector: 'brand-footer',
  host: { class: 'brand-footer' },
  template: `<img src="logo.svg" alt="" class="brand-footer-logo" /><span>Brasidal Coffee Roasters · Brand Guide 2027</span>
    <span class="brand-footer-no" >{{ no() }} / {{ total }}</span>`,
})
export default class BrandFooter {
  private nav = inject(Nav, { optional: true });
  private slideNo = inject(SLIDE_NO);
  protected total = this.nav?.total ?? 0;
  protected no = () => this.nav?.no() ?? this.slideNo;
}
