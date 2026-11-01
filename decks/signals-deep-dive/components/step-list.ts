import { Component, input } from '@angular/core';
import { SlideNgClick } from 'slide-ng/lib/slide-ng-click';

@Component({
  selector: 'step-list',
  imports: [SlideNgClick],
  host: { class: 'block my-1' },
  templateUrl: './step-list.html',
})
export class StepList {
  steps = input<string[]>([]);
}
