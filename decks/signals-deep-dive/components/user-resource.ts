import { Component, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

const USERS: Record<number, string> = { 1: 'Mira Okafor', 2: 'Jonas Lindqvist', 3: 'Priya Raman' };

@Component({
  selector: 'user-resource',
  host: { class: 'block' },
  templateUrl: './user-resource.html',
})
export class UserResource {
  id = signal(1);
  user = resource({
    params: () => ({ id: this.id() }),
    loader: async ({ params }) => {
      await new Promise((r) => setTimeout(r, 200));
      if (!USERS[params.id]) throw new Error('no user ' + params.id);
      return USERS[params.id];
    },
  });
  user2 = rxResource({
    params: () => this.id(),
    stream: ({ params }) => of(USERS[params] ?? 'guest').pipe(delay(150)),
  });
  errText(e: unknown) {
    return e instanceof Error ? e.message : String(e);
  }
}
