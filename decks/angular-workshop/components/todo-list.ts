import { Component, input, signal } from '@angular/core';

interface Todo { id: number; text: string; done: boolean }

@Component({
  selector: 'todo-list',
  host: { class: 'block w-100' },
  template: `<ul class="list-none p-0">
    @for (t of todos(); track t.id; let i = $index) {
      <li class="flex gap-2 items-center" [class.line-through]="t.done">
        <input type="checkbox" [checked]="t.done" (change)="toggle(t.id)" />
        <span>{{ i + 1 }}. {{ t.text }}</span>
      </li>
    } @empty {
      <li class="italic op70">Nothing to do!</li>
    }
    </ul>
    <button class="text-sm underline" (click)="clear()">clear all</button>`,
})
export class TodoList {
  initial = input<string[]>([]);
  todos = signal<Todo[]>([]);
  ngOnInit() {
    this.todos.set(this.initial().map((text, id) => ({ id, text, done: false })));
  }
  toggle(id: number) {
    this.todos.update((ts) => ts.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }
  clear() {
    this.todos.set([]);
  }
}
