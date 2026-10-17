import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'encap-emulated',
  template: `<p class="encap-p">Emulated (the default): this teal style stays in the component</p>`,
  styles: `.encap-p { color: #14b8a6; font-weight: 700; }`,
})
export class EncapEmulated {}

@Component({
  selector: 'encap-none',
  encapsulation: ViewEncapsulation.None,
  template: `<p class="encap-none-p">None: my styles are global, so every .leaky turns orange</p>`,
  styles: `.encap-none-p { color: #f97316; font-weight: 700; } .leaky { color: #f97316; }`,
})
export class EncapNone {}

@Component({
  selector: 'encap-shadow',
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `<p class="encap-p">ShadowDom: purple, with an <span class="text-red-500">UnoCSS class</span> inside the shadow root</p><slot></slot>`,
  styles: `.encap-p { color: #a855f7; font-weight: 700; }`,
})
export class EncapShadow {}
