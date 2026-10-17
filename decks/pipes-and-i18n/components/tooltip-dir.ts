import { Directive, input } from '@angular/core';

@Directive({
  selector: '[paper-hint]',
  host: { '[attr.title]': 'hint()', class: 'underline decoration-dotted cursor-help' },
})
export class PaperHint {
  hint = input('', { alias: 'paper-hint' });
}
