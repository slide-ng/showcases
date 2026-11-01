import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'linked-picker',
  host: { class: 'block' },
  templateUrl: './linked-picker.html',
})
export class LinkedPicker {
  kinds = ['fruit', 'veg'] as const;
  kind = signal<'fruit' | 'veg'>('fruit');
  options = linkedSignal<string[]>(() => (this.kind() === 'fruit' ? ['apple', 'pear', 'fig'] : ['leek', 'kale']));
  choice = linkedSignal<string[], string>({
    source: this.options,
    computation: (opts, prev) => (prev && opts.includes(prev.value) ? prev.value : opts[0]),
  });
}
