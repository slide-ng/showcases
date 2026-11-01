import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'cart-summary',
  imports: [DatePipe],
  host: { class: 'block p-3 rounded border' },
  templateUrl: './cart-summary.html',
})
export class CartSummary {
  cart = inject(CartService);
}
