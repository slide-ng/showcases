import { Component } from '@angular/core';
import { of } from 'rxjs';

/** Exposes plain data and observables for the slide's own pipes to work on. */
@Component({
  selector: 'stats-source',
  host: { style: 'display:none' },
  template: '',
})
export class StatsSource {
  revenue = 1234567.891;
  ratio = 0.4271;
  launched = new Date(Date.UTC(2026, 2, 5, 9, 15, 0));
  team = { lead: 'Hanna Brandt', layout: 'Okan Demir', print: 'Sofie Lund' };
  editor = { name: 'Clara Wendt', pronoun: 'female' };
  sections = ['letters', 'essays', 'reviews', 'recipes', 'puzzles'];
  release$ = of('Ausgabe 12');
  items$ = of(['essays', 'reviews', 'puzzles']);
}
