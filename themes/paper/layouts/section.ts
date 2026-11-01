import { Component, input } from '@angular/core';

// Replaces `section`: a large chapter number in the accent colour above the title.
@Component({
  selector: 'paper-section',
  host: { class: 'slidev-layout paper-section' },
  templateUrl: './section.html',
})
export class PaperSection {
  no = input('§');
}
