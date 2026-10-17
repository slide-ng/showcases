import { Component, model } from '@angular/core';

@Component({
  selector: 'rating-view',
  host: { class: 'inline-flex gap-2 items-center' },
  template: `
    <span>rating = {{ value() }}</span>
    <button class="px-2 rounded border" (click)="value.set(0)">reset</button>
    <button class="px-2 rounded border" (click)="value.set(5)">max</button>
  `,
})
export class RatingView {
  value = model(0);
}
