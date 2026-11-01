import { Component } from '@angular/core';

// Replaces `section`: the title between two dimension lines.
@Component({
  selector: 'bp-section',
  host: { class: 'slidev-layout bp-section' },
  templateUrl: './section.html',
})
export class BlueprintSection {}
