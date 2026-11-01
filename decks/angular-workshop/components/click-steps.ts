import { Component } from '@angular/core';
import { SlideNgClick } from 'slide-ng/lib/slide-ng-click';

@Component({
  selector: 'click-steps',
  imports: [SlideNgClick],
  host: { class: 'block' },
  templateUrl: './click-steps.html',
})
export class ClickSteps {}
