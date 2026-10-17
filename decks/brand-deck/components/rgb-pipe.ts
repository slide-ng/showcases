import { Pipe, PipeTransform } from '@angular/core';

// `{{ '#d9480f' | rgb }}` gives "217 72 15": the same colour for tools that want RGB numbers.
@Pipe({ name: 'rgb' })
export class RgbPipe implements PipeTransform {
  transform(hex: string): string {
    const h = hex.replace('#', '');
    const full = h.length === 3 ? [...h].map((c) => c + c).join('') : h;
    return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)).join(' ');
  }
}
