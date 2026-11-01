import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

/** A reactive form: the model lives in the class, the template only binds to it. */
@Component({
  selector: 'signup-reactive',
  imports: [ReactiveFormsModule],
  host: { class: 'block' },
  templateUrl: './signup-reactive.html',
  styles: `.field { padding: .25rem .5rem; border-radius: .25rem; background: rgb(255 255 255 / .08); border: 1px solid rgb(255 255 255 / .25); color: inherit; }`,
})
export class SignupReactive {
  private fb = inject(FormBuilder).nonNullable;
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    plot: ['', Validators.required],
  });
  status = toSignal(this.form.statusChanges, { initialValue: this.form.status });
  value = toSignal(this.form.valueChanges, { initialValue: this.form.value });
  sent = signal('');
  submit() {
    this.sent.set(this.form.getRawValue().name);
  }
}
