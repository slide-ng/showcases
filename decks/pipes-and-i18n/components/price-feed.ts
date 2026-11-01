import { Component, input } from '@angular/core';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { Observable, interval, map, of, startWith, take } from 'rxjs';
import { InitialsPipe } from './initials.pipe';

@Component({
  selector: 'price-feed',
  imports: [AsyncPipe, CurrencyPipe, DatePipe, InitialsPipe],
  host: { class: 'block p-3 border rounded' },
  templateUrl: './price-feed.html',
})
export class PriceFeed {
  owner = input('jule petersen');
  static$: Observable<number> = of(1299.5);
  ticker$ = interval(400).pipe(take(5), map((i) => 100 + i * 7), startWith(100));
  when = new Date(2026, 9, 17, 14, 30);
}
