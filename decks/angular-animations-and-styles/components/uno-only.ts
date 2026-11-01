import { Component } from '@angular/core';

/** Uses UnoCSS classes that appear nowhere in slides.md. */
@Component({
  selector: 'uno-only',
  host: { class: 'block ring-4 ring-amber-400 rounded-xl p-5 bg-slate-700' },
  templateUrl: './uno-only.html',
})
export class UnoOnly {
  dyn = 'text-cyan-300 font-mono';
}
