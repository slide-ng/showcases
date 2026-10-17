import { Component, booleanAttribute, computed, effect, input, numberAttribute, output, signal } from '@angular/core';

@Component({
  selector: 'counter-card',
  host: { class: 'block p-3 my-2 rounded border border-gray-500/40' },
  template: `
    <div class="flex items-center gap-3">
      <strong>{{ label() }}</strong>
      <button class="px-2 rounded bg-blue-600 text-white" (click)="dec()">-</button>
      <span class="font-mono text-xl">{{ count() }}</span>
      <button class="px-2 rounded bg-blue-600 text-white" (click)="inc()">+</button>
      <span class="op70">double: {{ double() }}, parity: {{ parity() }}</span>
      @if (locked()) { <span class="text-red-400">locked</span> }
    </div>
    <div class="text-xs op60">effect log: {{ log().join(' > ') }}</div>
  `,
})
export class CounterCard {
  label = input('Counter');
  start = input(0, { transform: numberAttribute });
  step = input(1, { transform: numberAttribute });
  locked = input(false, { transform: booleanAttribute });
  changed = output<number>();

  count = signal(0);
  double = computed(() => this.count() * 2);
  parity = computed(() => (this.count() % 2 === 0 ? 'even' : 'odd'));
  log = signal<string[]>([]);

  constructor() {
    effect(() => {
      this.count.set(this.start());
    });
    effect(() => {
      const c = this.count();
      this.log.update((l) => [...l.slice(-4), String(c)]);
    });
  }
  inc() {
    if (this.locked()) return;
    this.count.update((c) => c + this.step());
    this.changed.emit(this.count());
  }
  dec() {
    if (this.locked()) return;
    this.count.update((c) => c - this.step());
    this.changed.emit(this.count());
  }
}
