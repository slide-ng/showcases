import { Component, input } from '@angular/core';
import { SlideNgClick } from 'slide-ng/lib/slide-ng-click';

@Component({
  selector: 'reveal-inner',
  imports: [SlideNgClick],
  host: { class: 'block ml-6 my-1' },
  templateUrl: './nested-reveal.reveal-inner.html',
})
export class RevealInner {
  name = input('');
}

@Component({
  selector: 'reveal-outer',
  imports: [SlideNgClick, RevealInner],
  host: { class: 'block p-2 border border-gray-500/40 rounded my-2' },
  templateUrl: './nested-reveal.reveal-outer.html',
})
export class RevealOuter {
  title = input('Step');
}
