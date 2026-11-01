import { Component, input, signal } from '@angular/core';

interface Todo { id: number; text: string; done: boolean }

@Component({
  selector: 'todo-list',
  host: { class: 'block w-100' },
  templateUrl: './todo-list.html',
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
