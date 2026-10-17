import { Pipe, PipeTransform } from '@angular/core';

/** `{{ 'Clara Wendt' | initials }}` gives `C.W.` */
@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(value: string, sep = '.'): string {
    return value
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + sep)
      .join('');
  }
}
