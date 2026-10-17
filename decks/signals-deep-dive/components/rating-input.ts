import { Component, model } from '@angular/core';

@Component({
  selector: 'rating-input',
  host: { class: 'inline-flex gap-1' },
  template: `
    @for (s of stars; track s) {
      <button class="text-2xl" [class.text-yellow-400]="s <= value()" (click)="value.set(s)" [attr.data-star]="s">&#9733;</button>
    }
  `,
})
export class RatingInput {
  value = model(2);
  stars = [1, 2, 3, 4, 5];
}
