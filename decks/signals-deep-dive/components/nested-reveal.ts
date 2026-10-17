import { Component, input } from '@angular/core';
import { SlideNgClick } from 'slide-ng/lib/slide-ng-click';

@Component({
  selector: 'reveal-inner',
  imports: [SlideNgClick],
  host: { class: 'block ml-6 my-1' },
  template: `<span slide-ng-click class="px-2 py-0.5 rounded bg-sky-700 text-white">{{ name() }}</span>`,
})
export class RevealInner {
  name = input('');
}

@Component({
  selector: 'reveal-outer',
  imports: [SlideNgClick, RevealInner],
  host: { class: 'block p-2 border border-gray-500/40 rounded my-2' },
  template: `
    <div slide-ng-click>{{ title() }} starts</div>
    <reveal-inner name="unit tests" />
    <reveal-inner name="end-to-end tests" />
    <div slide-ng-click>{{ title() }} done</div>
  `,
})
export class RevealOuter {
  title = input('Step');
}
