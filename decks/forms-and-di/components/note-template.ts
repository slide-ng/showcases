import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** A template-driven form: ngModel binds straight to signals. */
@Component({
  selector: 'note-template',
  imports: [FormsModule],
  host: { class: 'block' },
  template: `
    <form #f="ngForm" class="flex flex-col gap-2 max-w-md">
      <input name="title" [(ngModel)]="title" required minlength="3" placeholder="title" class="field" />
      <textarea name="body" [(ngModel)]="body" rows="2" placeholder="what did you plant?" class="field"></textarea>
      <label class="text-sm"><input type="checkbox" name="pinned" [(ngModel)]="pinned" /> pin to the top</label>
    </form>
    <p class="text-sm op80">ngForm says <strong>{{ f.valid ? 'valid' : 'invalid' }}</strong> · {{ words() }} words</p>
  `,
  styles: `.field { padding: .25rem .5rem; border-radius: .25rem; background: rgb(255 255 255 / .08); border: 1px solid rgb(255 255 255 / .25); color: inherit; }`,
})
export class NoteTemplate {
  title = signal('Spring sowing');
  body = signal('Peas and radishes in the north bed');
  pinned = signal(false);
  words = computed(() => this.body().trim().split(/\s+/).filter(Boolean).length);
}
