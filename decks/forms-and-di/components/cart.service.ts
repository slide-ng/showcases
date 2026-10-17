import { Injectable, computed, signal } from '@angular/core';

export interface Line { name: string; qty: number; price: number }

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly lines = signal<Line[]>([]);
  readonly total = computed(() => this.lines().reduce((t, l) => t + l.qty * l.price, 0));
  readonly created = new Date();
  add(name: string, price: number) {
    this.lines.update((ls) => {
      const found = ls.find((l) => l.name === name);
      return found ? ls.map((l) => (l === found ? { ...l, qty: l.qty + 1 } : l)) : [...ls, { name, qty: 1, price }];
    });
  }
  clear() { this.lines.set([]); }
}
