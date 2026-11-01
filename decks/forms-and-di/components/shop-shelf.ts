import { Component, inject } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'shop-shelf',
  host: { class: 'flex gap-2 flex-wrap' },
  templateUrl: './shop-shelf.html',
})
export class ShopShelf {
  cart = inject(CartService);
  products = [
    { name: 'seeds', price: 3 },
    { name: 'spade', price: 25 },
    { name: 'gloves', price: 9 },
  ];
}
