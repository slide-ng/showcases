import { Component, signal } from '@angular/core';

@Component({ selector: 'data-box', host: { style: 'display:none' }, template: '' })
export class DataBox {
  status = signal<'draft' | 'review' | 'approved' | 'rejected' | 'archived' | 'on hold'>('review');
  rows = [
    { id: 'A-1', part: 'Bracket', qty: 4, ok: true },
    { id: 'A-2', part: 'Hinge', qty: 2, ok: false },
    { id: 'B-7', part: 'Rail', qty: 8, ok: true },
    { id: 'C-3', part: 'Bolt M6', qty: 40, ok: true },
  ];
  backorders: string[] = [];
  cycle() {
    const order = ['draft', 'review', 'approved', 'rejected', 'archived', 'on hold'] as const;
    this.status.set(order[(order.indexOf(this.status()) + 1) % order.length]);
  }
}
