import { Component, input } from '@angular/core';

@Component({
  selector: 'heavy-chart',
  host: { class: 'block w-72 my-2' },
  template: `
    <svg viewBox="0 0 200 60" class="w-full">
      @for (v of values(); track $index) {
        <rect [attr.x]="$index * 22 + 2" [attr.y]="60 - v" width="18" [attr.height]="v" fill="#f5b942" />
      }
    </svg>
    <div class="text-xs">{{ label() }} · loaded as a separate chunk</div>
  `,
})
export class HeavyChart {
  values = input<number[]>([10, 30, 20, 50, 40, 55, 25, 35, 45]);
  label = input('chart');
}
