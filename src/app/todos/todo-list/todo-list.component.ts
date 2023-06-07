import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo/todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'abc-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [];

  constructor(private readonly todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.getAll();
  }

  onComplete(todo: TodoModel): void {
    todo.completed = true;
    this.todosService.put(todo);
  }

  onRestore(todo: TodoModel): void {
    todo.completed = false;
    this.todosService.put(todo);
  }

  onRemove(id: string): void {
    this.todosService.delete(id);
  }
}
