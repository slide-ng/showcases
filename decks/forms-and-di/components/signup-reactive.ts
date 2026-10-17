import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

/** A reactive form: the model lives in the class, the template only binds to it. */
@Component({
  selector: 'signup-reactive',
  imports: [ReactiveFormsModule],
  host: { class: 'block' },
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex flex-col gap-2 max-w-md">
      <input formControlName="name" placeholder="name" class="field" />
      <input formControlName="email" placeholder="email" class="field" />
      @if (form.controls.email.touched && form.controls.email.invalid) {
        <span class="text-sm text-amber-300">Please enter a valid email address.</span>
      }
      <select formControlName="plot" class="field">
        <option value="">choose a plot</option>
        <option value="north">North bed</option>
        <option value="south">South bed</option>
      </select>
      <button type="submit" class="px-3 py-1 rounded border w-fit" [disabled]="form.invalid">reserve</button>
    </form>
    <p class="text-sm op80">form is <strong>{{ status() }}</strong>@if (sent()) { · reserved for {{ sent() }} }</p>
  `,
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
