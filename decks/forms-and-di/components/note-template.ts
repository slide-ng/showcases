import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** A template-driven form: ngModel binds straight to signals. */
@Component({
  selector: 'note-template',
  imports: [FormsModule],
  host: { class: 'block' },
  templateUrl: './note-template.html',
  styles: `.field { padding: .25rem .5rem; border-radius: .25rem; background: rgb(255 255 255 / .08); border: 1px solid rgb(255 255 255 / .25); color: inherit; }`,
})
export class NoteTemplate {
  title = signal('Spring sowing');
  body = signal('Peas and radishes in the north bed');
  pinned = signal(false);
  words = computed(() => this.body().trim().split(/\s+/).filter(Boolean).length);
}
