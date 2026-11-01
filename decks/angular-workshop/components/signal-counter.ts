import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'signal-counter',
  host: { class: 'inline-flex items-center gap-3 p-3 border rounded border-gray-500' },
  templateUrl: './signal-counter.html',
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
