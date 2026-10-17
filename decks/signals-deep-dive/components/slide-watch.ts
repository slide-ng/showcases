import { Component, inject } from '@angular/core';
import { ClicksContext } from 'slide-ng/lib/clicks';
import { SLIDE_NO, RENDER_CONTEXT } from 'slide-ng/lib/slide-context';

/** Shows where the component is: its slide, the click it is at, and where it is drawn. */
@Component({
  selector: 'slide-watch',
  host: { class: 'block w-fit mt-4 px-3 py-1 rounded border border-gray-500/40 text-sm font-mono op80' },
  template: `slide {{ mine }} · click {{ clicks.current() }} of {{ clicks.total() }} · drawn for {{ ctx }}`,
})
export class SlideWatch {
  clicks = inject(ClicksContext);
  mine = inject(SLIDE_NO);
  ctx = inject(RENDER_CONTEXT);
}
