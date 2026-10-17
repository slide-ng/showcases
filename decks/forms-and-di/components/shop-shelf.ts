import { Component, inject } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'shop-shelf',
  host: { class: 'flex gap-2 flex-wrap' },
  template: `
    @for (p of products; track p.name) {
      <button class="px-3 py-1 rounded border" (click)="cart.add(p.name, p.price)">add {{ p.name }} ({{ p.price }} €)</button>
    }
    <span class="op70">in cart: {{ cart.lines().length }} lines</span>
  `,
})
export class ShopShelf {
  cart = inject(CartService);
  products = [
    { name: 'seeds', price: 3 },
    { name: 'spade', price: 25 },
    { name: 'gloves', price: 9 },
  ];
}
