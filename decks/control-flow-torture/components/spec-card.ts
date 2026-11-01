import { Component } from '@angular/core';

/** A small card that is only loaded when the reader hovers its placeholder. */
@Component({
  selector: 'spec-card',
  host: { class: 'block p-2 border' },
  templateUrl: './spec-card.html',
})
export class SpecCard {}
