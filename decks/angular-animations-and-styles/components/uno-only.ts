import { Component } from '@angular/core';

/** Uses UnoCSS classes that appear nowhere in slides.md. */
@Component({
  selector: 'uno-only',
  host: { class: 'block ring-4 ring-amber-400 rounded-xl p-5 bg-slate-700' },
  template: `
    <div class="flex items-center gap-4">
      <div class="i-carbon:rocket text-5xl text-orange-400"></div>
      <div class="text-white text-3xl font-black tracking-widest uppercase">Launch window</div>
    </div>
    <div class="mt-2 text-lime-300 italic underline decoration-wavy">wavy lime underline</div>
    <div [class]="dyn" class="mt-2">a class bound at run time: {{ dyn }}</div>
  `,
})
export class UnoOnly {
  dyn = 'text-cyan-300 font-mono';
}
