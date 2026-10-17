import { Component, computed, signal } from '@angular/core';

/** A small form without @angular/forms: signals and native events. */
@Component({
  selector: 'signal-form',
  host: { class: 'block' },
  template: `
    <div class="flex flex-col gap-2 max-w-md">
      <input [value]="email()" (input)="email.set($any($event.target).value)" placeholder="email" class="field" />
      <label class="text-sm"><input type="checkbox" [checked]="agree()" (change)="agree.set($any($event.target).checked)" /> send me the planting calendar</label>
      <button class="px-3 py-1 rounded border w-fit" [disabled]="!valid()" (click)="sent.set(email())">sign up</button>
    </div>
    <p class="text-sm op80">valid: {{ valid() }} · signed up: {{ sent() || '-' }}</p>
  `,
  styles: `.field { padding: .25rem .5rem; border-radius: .25rem; background: rgb(255 255 255 / .08); border: 1px solid rgb(255 255 255 / .25); color: inherit; }`,
})
export class SignalForm {
  email = signal('');
  agree = signal(false);
  sent = signal('');
  valid = computed(() => /.+@.+\..+/.test(this.email()) && this.agree());
}
