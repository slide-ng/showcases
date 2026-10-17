import { Component, input } from '@angular/core';

@Component({
  selector: 'pulse-dot',
  template: `<span class="dot"></span><span class="label">{{ label() }}</span>`,
  styles: `
    :host { display: inline-flex; align-items: center; gap: .5rem; padding: .25rem .75rem; border-radius: 999px; background: rgb(34 197 94 / .15); }
    :host(.warn) { background: rgb(234 179 8 / .2); }
    .dot { width: 12px; height: 12px; border-radius: 50%; background: #22c55e; animation: pulse 1.2s ease-in-out infinite; }
    :host(.warn) .dot { background: #eab308; }
    @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.6); opacity: .4 } }
  `,
})
export class PulseDot {
  label = input('live');
}
