import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'linked-picker',
  host: { class: 'block' },
  template: `
    <div class="flex gap-2 mb-2">
      @for (k of kinds; track k) {
        <button class="px-2 py-1 rounded border" [class.bg-emerald-600]="kind() === k" (click)="kind.set(k)">{{ k }}</button>
      }
    </div>
    <div class="flex gap-2">
      @for (o of options(); track o) {
        <button class="px-2 py-1 rounded border text-sm" [class.bg-amber-600]="choice() === o" (click)="choice.set(o)">{{ o }}</button>
      }
    </div>
    <p>kind: {{ kind() }} &middot; choice: <strong>{{ choice() }}</strong></p>
  `,
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
