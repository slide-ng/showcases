import { Component, signal } from '@angular/core';

@Component({
  selector: 'fade-list',
  host: { class: 'block' },
  template: `
    <div class="flex gap-2 mb-2">
      <button class="px-2 rounded border" (click)="add()">add</button>
      <button class="px-2 rounded border" (click)="remove()">remove</button>
    </div>
    <ul>
      @for (i of items(); track i) {
        <li animate.enter="slide-in" animate.leave="slide-out">item {{ i }}</li>
      }
    </ul>
  `,
  styles: `
    .slide-in { animation: in .4s ease-out; }
    .slide-out { animation: out .4s ease-in forwards; }
    @keyframes in { from { opacity: 0; transform: translateX(-30px) } to { opacity: 1; transform: none } }
    @keyframes out { to { opacity: 0; transform: translateX(30px) } }
  `,
})
export class FadeList {
  items = signal([1, 2, 3]);
  next = 4;
  add() { this.items.update((l) => [...l, this.next++]); }
  remove() { this.items.update((l) => l.slice(1)); }
}
