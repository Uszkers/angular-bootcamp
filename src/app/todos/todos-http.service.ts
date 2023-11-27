import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './todo/todo.model';
import { HttpClient } from '@angular/common/http';

const API_PREFIX = 'api';
const SINGLE_TODO_PATH = `${API_PREFIX}/todo`;
const TODO_BY_ID = (id: string): string => `${SINGLE_TODO_PATH}/${id}`;

@Injectable({ providedIn: 'root' })
export class TodosHttpService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${API_PREFIX}/todos`);
  }

  get(id: string): Observable<TodoModel> {
    return this.http.get<TodoModel>(TODO_BY_ID(id));
  }

  post(todo: TodoModel): Observable<void> {
    return this.http.post<void>(SINGLE_TODO_PATH, todo);
  }

  put(todo: TodoModel): Observable<void> {
    return this.http.put<void>(TODO_BY_ID(todo._id!), todo);
  }

  delete(id: string): Observable<string> {
    return this.http.delete(TODO_BY_ID(id), { responseType: 'text' });
  }
}
