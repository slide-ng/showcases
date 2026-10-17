import { Component, computed, inject } from '@angular/core';
import { Nav } from 'slide-ng/lib/nav';
import { ClicksContext } from 'slide-ng/lib/clicks';
import { SLIDE_NO } from 'slide-ng/lib/slide-context';

@Component({
  selector: 'nav-status',
  host: { class: 'block font-mono text-sm px-3 py-2 mt-4 border border-gray-500/50 rounded op80' },
  template: `slide {{ mine }} of {{ nav.total }} · click {{ clicks.current() }} of {{ clicks.total() }} · {{ left() }} {{ left() === 1 ? 'slide' : 'slides' }} to go`,
})
export class NavStatus {
  nav = inject(Nav);
  clicks = inject(ClicksContext);
  mine = inject(SLIDE_NO);
  left = computed(() => this.nav.total - this.mine);
}
