import { Component, model } from '@angular/core';

@Component({
  selector: 'rating-view',
  host: { class: 'inline-flex gap-2 items-center' },
  templateUrl: './rating-view.html',
})
export class RatingView {
  value = model(0);
}
