import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'encap-emulated',
  templateUrl: './encap-demo.encap-emulated.html',
  styles: `.encap-p { color: #14b8a6; font-weight: 700; }`,
})
export class EncapEmulated {}

@Component({
  selector: 'encap-none',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './encap-demo.encap-none.html',
  styles: `.encap-none-p { color: #f97316; font-weight: 700; } .leaky { color: #f97316; }`,
})
export class EncapNone {}

@Component({
  selector: 'encap-shadow',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './encap-demo.encap-shadow.html',
  styles: `.encap-p { color: #a855f7; font-weight: 700; }`,
})
export class EncapShadow {}
