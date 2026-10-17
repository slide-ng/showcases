import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'cart-summary',
  imports: [DatePipe],
  host: { class: 'block p-3 rounded border' },
  template: `
    @for (l of cart.lines(); track l.name) {
      <div>{{ l.qty }} x {{ l.name }} = {{ l.qty * l.price }} €</div>
    } @empty {
      <div class="op60">cart is empty</div>
    }
    <div class="font-bold mt-1">total: {{ cart.total() }} €</div>
    <div class="text-xs op50">service created at {{ cart.created | date: 'HH:mm:ss' }}</div>
    <button class="px-2 mt-1 rounded border" (click)="cart.clear()">clear</button>
  `,
})
export class CartSummary {
  cart = inject(CartService);
}
