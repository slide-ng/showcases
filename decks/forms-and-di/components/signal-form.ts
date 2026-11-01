import { Component, computed, signal } from '@angular/core';

/** A small form without @angular/forms: signals and native events. */
@Component({
  selector: 'signal-form',
  host: { class: 'block' },
  templateUrl: './signal-form.html',
  styles: `.field { padding: .25rem .5rem; border-radius: .25rem; background: rgb(255 255 255 / .08); border: 1px solid rgb(255 255 255 / .25); color: inherit; }`,
})
export class SignalForm {
  email = signal('');
  agree = signal(false);
  sent = signal('');
  valid = computed(() => /.+@.+\..+/.test(this.email()) && this.agree());
}
