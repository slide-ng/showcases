import { Component, input } from '@angular/core';

// A recipe card: title + meta line, ingredients on the left (slot), method on the right (default).
@Component({
  selector: 'zine-recipe',
  host: { class: 'slidev-layout recipe grid grid-cols-[1fr_2fr] gap-8 h-full p-12' },
  template: `<aside class="recipe-ingredients border-r-2 border-dashed pr-6">
      <div class="text-xs uppercase tracking-widest op70 recipe-meta">Serves {{ serves() }} · {{ time() }}</div>
      <ng-content select="[ingredients]" />
    </aside>
    <div class="recipe-method"><ng-content /></div>`,
})
export class ZineRecipe {
  serves = input('2');
  time = input('30 min');
}
