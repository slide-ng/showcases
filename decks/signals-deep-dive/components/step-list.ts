import { Component, input } from '@angular/core';
import { SlideNgClick } from 'slide-ng/lib/slide-ng-click';

@Component({
  selector: 'step-list',
  imports: [SlideNgClick],
  host: { class: 'block my-1' },
  template: `
    @for (s of steps(); track s; let i = $index) {
      <div slide-ng-click class="ml-6 my-1 px-2 py-0.5 w-fit rounded bg-emerald-800/60">{{ i + 2 }}. {{ s }}</div>
    }
  `,
})
export class StepList {
  steps = input<string[]>([]);
}
