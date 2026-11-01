import { Component, input } from '@angular/core';

@Component({
  selector: 'heavy-chart',
  host: { class: 'block w-72 my-2' },
  templateUrl: './heavy-chart.html',
})
export class HeavyChart {
  values = input<number[]>([10, 30, 20, 50, 40, 55, 25, 35, 45]);
  label = input('chart');
}
