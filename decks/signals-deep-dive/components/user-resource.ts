import { Component, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

const USERS: Record<number, string> = { 1: 'Mira Okafor', 2: 'Jonas Lindqvist', 3: 'Priya Raman' };

@Component({
  selector: 'user-resource',
  host: { class: 'block' },
  template: `
    <div class="flex gap-2 items-center">
      <button class="px-2 rounded border" (click)="id.set(id() - 1)">prev</button>
      <span>id {{ id() }}</span>
      <button class="px-2 rounded border" (click)="id.set(id() + 1)">next</button>
    </div>
    <p>resource (promise):
      @if (user.isLoading()) { <em>loading...</em> }
      @else if (user.error()) { <span class="text-red-400">error: {{ errText(user.error()) }}</span> }
      @else { <strong>{{ user.value() }}</strong> }
    </p>
    <p>rxResource (observable):
      @if (user2.isLoading()) { <em>loading...</em> }
      @else if (user2.hasValue()) { <strong>{{ user2.value() }}</strong> }
      @else { <span class="text-red-400">no value</span> }
    </p>
  `,
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
