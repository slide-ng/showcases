import { Component, HostBinding, HostListener, computed, inject, signal } from '@angular/core';
import { Nav } from 'slide-ng/lib/nav';
import { ClicksContext } from 'slide-ng/lib/clicks';

@Component({
  selector: 'nav-panel',
  template: `
    <div>slide {{ nav.no() }} / {{ nav.total }} · clicks {{ clicks.current() }}/{{ clicks.total() }} · keys pressed here: {{ keys() }}</div>
    <div class="flex gap-2 mt-1">
      <button class="px-2 rounded border" (click)="nav.go(1, 0)">first slide</button>
      <button class="px-2 rounded border" (click)="nav.next()">next step</button>
      <button class="px-2 rounded border" (click)="nav.go(5, 0)">the shop</button>
    </div>
  `,
})
export class NavPanel {
  nav = inject(Nav);
  clicks = inject(ClicksContext);
  keys = signal(0);
  hovered = signal(false);
  progress = computed(() => Math.round((this.nav.no() / this.nav.total) * 100));

  @HostBinding('class') get cls() {
    return 'block p-3 rounded ' + (this.hovered() ? 'bg-emerald-900/60' : 'bg-black/20');
  }
  @HostBinding('attr.data-progress') get prog() { return this.progress(); }
  @HostListener('mouseenter') enter() { this.hovered.set(true); }
  @HostListener('mouseleave') leave() { this.hovered.set(false); }
  @HostListener('document:keydown') key() { this.keys.update((k) => k + 1); }
}
