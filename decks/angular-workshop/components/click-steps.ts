import { Component } from '@angular/core';
import { SlideNgClick } from 'slide-ng/lib/slide-ng-click';

@Component({
  selector: 'click-steps',
  imports: [SlideNgClick],
  host: { class: 'block' },
  template: `<div class="p-2 bg-teal-800/40 rounded mb-1" slide-ng-click>1. A step inside the component</div>
    <div class="p-2 bg-teal-800/40 rounded mb-1" slide-ng-click>2. Another one, same component</div>`,
})
export class ClickSteps {}
