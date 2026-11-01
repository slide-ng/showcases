import { Component, input } from '@angular/core';

// A recipe card: title + meta line, ingredients on the left (slot), method on the right (default).
@Component({
  selector: 'zine-recipe',
  host: { class: 'slidev-layout recipe grid grid-cols-[1fr_2fr] gap-8 h-full p-12' },
  templateUrl: './recipe.html',
})
export class ZineRecipe {
  serves = input('2');
  time = input('30 min');
}
