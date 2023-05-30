import { Component } from '@angular/core';
import { INIT_TODOS, TodoModel } from '../todo/todo.model';

@Component({
  selector: 'abc-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: TodoModel[] = INIT_TODOS;

  addTodo(): void {
    console.log('TODO: implement adding!');
  }

  onComplete(todo: TodoModel): void {
    todo.completed = true;
  }

  onRestore(todo: TodoModel): void {
    todo.completed = false;
  }

  onRemove(id: string): void {
    this.todos = this.todos.filter((todo: TodoModel) => todo._id !== id);
  }
}
