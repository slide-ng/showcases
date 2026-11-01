import { Component, computed, input } from '@angular/core';
import { background } from 'slide-ng/layouts/background';

// Replaces `cover`: the title sits low on the left, over a soft forest-floor light.
@Component({
  selector: 'moss-cover',
  host: { class: 'slidev-layout moss-cover', '[style]': 'style()' },
  templateUrl: './cover.html',
})
export class MossCover {
  background = input('');
  style = computed(() => background(this.background(), true)); // a colour, or an image dimmed for the title
}
