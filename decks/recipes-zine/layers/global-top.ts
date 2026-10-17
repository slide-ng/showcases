import { Component, inject } from '@angular/core';
import { Nav } from 'slide-ng/lib/nav';

// The zine's running footer: the issue on the left, the page number on the right.
// It sits in the top layer because the theme paints each slide's background over the bottom one.
@Component({
  selector: 'zine-footer',
  host: { class: 'fixed bottom-0 left-0 right-0 flex justify-between px-6 py-2 text-xs zine-footer' },
  template: `<span>Kitchen Zine · Issue 3</span><span class="zine-page">page {{ nav.no() }} of {{ nav.total }}</span>`,
})
export default class ZineFooter {
  nav = inject(Nav);
}
