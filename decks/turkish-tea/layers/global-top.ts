import { Component, LOCALE_ID, inject } from '@angular/core';
import { Nav } from 'slide-ng/lib/nav';

// A running footer: the talk's name in the language on screen, and the page number.
// The navigation bar sits at the top right (navPosition in the headmatter), so the footer has the bottom to itself.
// The page loads again when the language changes, so reading LOCALE_ID once is enough.
@Component({
  selector: 'tea-footer',
  host: { class: 'fixed bottom-0 left-0 right-0 flex justify-between px-6 py-2 text-xs op70' },
  template: `<span>{{ name }}</span><span>{{ nav.no() }} / {{ nav.total }}</span>`,
})
export default class TeaFooter {
  nav = inject(Nav);
  name = inject(LOCALE_ID).startsWith('tr') ? 'Türk Çayı Demlemek' : 'Brewing Turkish Tea';
}
