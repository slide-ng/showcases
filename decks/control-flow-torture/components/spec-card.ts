import { Component } from '@angular/core';

/** A small card that is only loaded when the reader hovers its placeholder. */
@Component({
  selector: 'spec-card',
  host: { class: 'block p-2 border' },
  template: `
    <div class="font-bold">B-7 · Rail</div>
    <div class="text-sm">aluminium, 1200 mm, anodised</div>
    <div class="text-xs op70">loaded on hover, prefetched when the browser was idle</div>
  `,
})
export class SpecCard {}
