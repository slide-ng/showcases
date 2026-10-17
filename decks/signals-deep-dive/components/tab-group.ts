import { Component, ElementRef, contentChild, contentChildren, signal, viewChild, AfterViewInit, computed, Directive, input } from '@angular/core';

@Directive({ selector: 'tab-pane', host: { '[style.display]': 'shown() ? "block" : "none"' } })
export class TabPane {
  title = input('tab');
  shown = signal(false);
}

@Component({
  selector: 'tab-group',
  imports: [],
  host: { class: 'block border rounded p-2' },
  template: `
    <div #bar class="flex gap-2 mb-2 border-b pb-1">
      @for (t of tabs(); track $index) {
        <button class="px-2" [class.font-bold]="$index === active()" (click)="select($index)">{{ t.title() }}</button>
      }
    </div>
    <ng-content />
    <div class="text-xs op60 mt-2">{{ count() }} tabs under "{{ header()?.nativeElement?.textContent?.trim() }}" · tab bar {{ barWidth() }} px wide</div>
  `,
})
export class TabGroup implements AfterViewInit {
  tabs = contentChildren(TabPane);
  header = contentChild<ElementRef>('header');
  bar = viewChild.required<ElementRef<HTMLElement>>('bar');
  active = signal(0);
  barWidth = signal(0);
  count = computed(() => this.tabs().length);
  ngAfterViewInit() {
    this.select(0);
    queueMicrotask(() => this.barWidth.set(this.bar().nativeElement.offsetWidth));
  }
  select(i: number) {
    this.active.set(i);
    this.tabs().forEach((t, j) => t.shown.set(i === j));
  }
}
