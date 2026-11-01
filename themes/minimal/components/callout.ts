import { Component, input } from '@angular/core';

// A highlighted box that slides can use as <minimal-callout title="Note">text</minimal-callout>.
@Component({
  selector: 'minimal-callout',
  host: { class: 'minimal-callout' },
  templateUrl: './callout.html',
})
export class MinimalCallout {
  title = input('Note');
}
