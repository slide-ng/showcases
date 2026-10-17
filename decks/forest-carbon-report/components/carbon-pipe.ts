import { Pipe, PipeTransform } from '@angular/core';

// Above-ground biomass (t/ha) to carbon (t C/ha), with the IPCC default carbon fraction of 0.47.
// `{{ 300 | carbon }}` gives "141.0"; `{{ 300 | carbon: 'co2' }}` gives the CO2 equivalent, "517.0".
@Pipe({ name: 'carbon' })
export class CarbonPipe implements PipeTransform {
  transform(biomass: number, unit: 'c' | 'co2' = 'c'): string {
    const c = biomass * 0.47;
    return (unit === 'co2' ? (c * 44) / 12 : c).toFixed(1);
  }
}
