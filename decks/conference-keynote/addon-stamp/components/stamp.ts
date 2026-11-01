import { Component, input } from '@angular/core';

// A rubber stamp: <kn-stamp text="APPROVED" color="#c00"></kn-stamp>
@Component({
  selector: 'kn-stamp',
  host: { class: 'kn-stamp', '[style.--kn-stamp-color]': 'color()' },
  templateUrl: './stamp.html',
})
export class KnStamp {
  text = input('APPROVED');
  color = input('#d33');
}
