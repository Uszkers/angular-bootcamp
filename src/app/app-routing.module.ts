import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { AddTodoComponent } from './todos/todo-management/add-todo/add-todo.component';
import { EditTodoComponent } from './todos/todo-management/edit-todo/edit-todo.component';
import { PageNotFoundComponent } from './utilities/page-not-found/page-not-found.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';

const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: 'add', component: AddTodoComponent },
  { path: 'edit/:id', component: EditTodoComponent },
  { path: 'rxjs-demo', component: RxjsDemoComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
