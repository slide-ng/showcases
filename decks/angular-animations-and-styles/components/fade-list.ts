import { Component, signal } from '@angular/core';

@Component({
  selector: 'fade-list',
  host: { class: 'block' },
  templateUrl: './fade-list.html',
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
