import { Injectable, OnDestroy } from '@angular/core';
import { INIT_TODOS, TodoModel } from './todo/todo.model';
import * as uuid from 'uuid';
import { BehaviorSubject, map, Observable, Subject, takeUntil } from 'rxjs';

const LOCAL_STORAGE_TODO_KEY = 'angular=bootcamp-todos-key';

@Injectable({ providedIn: 'root' })
export class TodosService implements OnDestroy {
  private todosSub$!: BehaviorSubject<TodoModel[]>;
  todos$!: Observable<TodoModel[]>;
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor() {
    this.initializeTodos();
    this.todosSub$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((todos: TodoModel[]) => this.save(todos));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initializeTodos(): void {
    const storedItems = localStorage.getItem(LOCAL_STORAGE_TODO_KEY);
    if (storedItems) {
      this.todosSub$ = new BehaviorSubject(JSON.parse(storedItems));
    } else {
      this.todosSub$ = new BehaviorSubject(INIT_TODOS);
    }
    this.todos$ = this.todosSub$.asObservable();
  }

  post(todo: TodoModel): void {
    this.todosSub$.next([
      ...this.todosSub$.getValue(),
      { ...todo, _id: uuid.v4() },
    ]);
  }

  delete(id: string): void {
    this.todosSub$.next(
      this.todosSub$.getValue().filter((todo: TodoModel) => todo._id !== id)
    );
  }

  put(todo: TodoModel): void {
    this.todosSub$.next(
      this.todosSub$.getValue().map((elem) => {
        if (elem._id === todo._id) {
          return todo;
        }
        return elem;
      })
    );
  }

  // We could do that synchronously using getValue() but for demonstration purpose we will stick with observable
  get$(id: string): Observable<TodoModel> {
    return this.todosSub$.pipe(
      map((todos: TodoModel[]) => {
        const todo: TodoModel | undefined = todos.find(
          (todo) => todo._id === id
        );
        if (!todo) {
          throw `No todo with id: ${id} found!`;
        }
        return todo;
      })
    );
  }

  private save(todos: TodoModel[]): void {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos));
  }
}
