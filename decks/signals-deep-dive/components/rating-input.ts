import { Component, model } from '@angular/core';

@Component({
  selector: 'rating-input',
  host: { class: 'inline-flex gap-1' },
  templateUrl: './rating-input.html',
})
export class RatingInput {
  value = model(2);
  stars = [1, 2, 3, 4, 5];
}
