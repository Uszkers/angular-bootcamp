import { Injectable } from '@angular/core';
import { INIT_TODOS, TodoModel } from './todo/todo.model';
import * as uuid from 'uuid';

const LOCAL_STORAGE_TODO_KEY = 'angular=bootcamp-todos-key';

@Injectable({ providedIn: 'root' })
export class TodosService {
  todos!: TodoModel[];

  constructor() {
    this.initializeTodos();
  }

  private initializeTodos(): void {
    const storedItems = localStorage.getItem(LOCAL_STORAGE_TODO_KEY);
    if (storedItems) {
      this.todos = JSON.parse(storedItems);
    } else {
      this.todos = INIT_TODOS;
      this.save();
    }
  }

  post(todo: TodoModel): void {
    this.todos = [...this.todos, { ...todo, _id: uuid.v4() }];
    this.save();
  }

  delete(id: string): void {
    this.todos = this.todos.filter((todo: TodoModel) => todo._id !== id);
    this.save();
  }

  put(todo: TodoModel): void {
    this.todos = this.todos.map((elem) => {
      if (elem._id === todo._id) {
        return todo;
      }
      return elem;
    });
    this.save();
  }

  get(id: string): TodoModel {
    const item: TodoModel | undefined = this.todos.find(
      (todo) => todo._id === id
    );
    if (!item) {
      throw `No todo with id: ${id} found!`;
    }
    return item;
  }

  getAll(): TodoModel[] {
    return this.todos;
  }

  private save(): void {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(this.todos));
  }
}
