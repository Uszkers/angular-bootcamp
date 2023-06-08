import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo/todo.model';
import { TodosHttpService } from '../todos-http.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'abc-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos!: TodoModel[];

  constructor(private readonly httpService: TodosHttpService) {}

  ngOnInit(): void {
    this.httpService.getAll().subscribe(this.assignTodos);
  }

  onComplete(todo: TodoModel): void {
    todo.completed = true;
    this.httpService.put(todo).subscribe(console.log);
  }

  onRestore(todo: TodoModel): void {
    todo.completed = false;
    this.httpService.put(todo).subscribe(console.log);
  }

  onRemove(id: string): void {
    this.httpService
      .delete(id)
      .pipe(switchMap(() => this.httpService.getAll()))
      .subscribe(this.assignTodos);
  }

  private assignTodos = (todos: TodoModel[]): void => {
    this.todos = todos;
  };
}
