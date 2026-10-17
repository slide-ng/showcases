import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'signal-counter',
  host: { class: 'inline-flex items-center gap-3 p-3 border rounded border-gray-500' },
  template: `<button class="px-3 py-1 rounded bg-teal-600 text-white" (click)="dec()">-</button>
    <span class="text-2xl font-mono">{{ label() }}: {{ count() }}</span>
    <button class="px-3 py-1 rounded bg-teal-600 text-white" (click)="inc()">+</button>
    <span class="op60 text-sm">double = {{ double() }}</span>`,
})
export class SignalCounter {
  label = input('count');
  start = input(0);
  changed = output<number>();
  count = signal(0);
  double = computed(() => this.count() * 2);
  ngOnInit() {
    this.count.set(this.start());
  }
  inc() {
    this.count.update((c) => c + 1);
    this.changed.emit(this.count());
  }
  dec() {
    this.count.update((c) => c - 1);
    this.changed.emit(this.count());
  }
}
