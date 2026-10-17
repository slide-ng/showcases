import { Component, computed, input, signal } from '@angular/core';
import { CarbonPipe } from './carbon-pipe';

interface Plot {
  id: string;
  forest: string;
  biomass: number; // t/ha above-ground
}

@Component({
  selector: 'plot-table',
  imports: [CarbonPipe],
  host: { class: 'block text-sm' },
  template: `
    <div class="flex gap-2 mb-3 items-center">
      <button class="px-3 py-1 rounded border border-current" (click)="minBiomass.set(0)">All plots</button>
      <button class="px-3 py-1 rounded border border-current" (click)="minBiomass.set(threshold())">Over {{ threshold() }} t/ha</button>
      <span class="opacity-70">showing {{ visible().length }} of {{ plots.length }}</span>
    </div>
    <table>
      <thead><tr><th>Plot</th><th>Forest</th><th>Biomass t/ha</th><th>Carbon t C/ha</th></tr></thead>
      <tbody>
        @for (p of visible(); track p.id) {
          <tr>
            <td>{{ p.id }}</td>
            <td>{{ p.forest }}</td>
            <td>{{ p.biomass }}</td>
            <td>{{ p.biomass | carbon }}</td>
          </tr>
        } @empty {
          <tr><td colspan="4">No plots match.</td></tr>
        }
      </tbody>
    </table>
    @if (visible().length) {
      <p class="mt-2">Mean over the plots shown: <strong>{{ mean() | carbon }} t C/ha</strong></p>
    }
  `,
})
export class PlotTable {
  threshold = input(200);
  minBiomass = signal(0);
  plots: Plot[] = [
    { id: 'A-01', forest: 'Boreal spruce', biomass: 118 },
    { id: 'A-02', forest: 'Boreal spruce', biomass: 132 },
    { id: 'B-01', forest: 'Temperate beech', biomass: 265 },
    { id: 'B-02', forest: 'Temperate oak', biomass: 241 },
    { id: 'C-01', forest: 'Tropical lowland', biomass: 412 },
    { id: 'C-02', forest: 'Tropical montane', biomass: 298 },
  ];
  visible = computed(() => this.plots.filter((p) => p.biomass >= this.minBiomass()));
  mean = computed(() => this.visible().reduce((s, p) => s + p.biomass, 0) / (this.visible().length || 1));
}
