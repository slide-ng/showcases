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
  templateUrl: './plot-table.html',
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
