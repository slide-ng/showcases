import { Directive, ElementRef, inject, input, effect } from '@angular/core';

@Directive({
  selector: '[mossGlow]',
  host: { '(mouseenter)': 'on = true', '(mouseleave)': 'on = false', '[style.textShadow]': 'on ? "0 0 12px " + mossGlow() : "none"', '[attr.data-glow]': 'mossGlow()' },
})
export class MossGlow {
  mossGlow = input('#9bd36b');
  on = false;
  private el = inject(ElementRef<HTMLElement>);
  constructor() {
    effect(() => this.el.nativeElement.style.setProperty('--glow', this.mossGlow()));
  }
}
