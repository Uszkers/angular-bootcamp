import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoComponent } from './todos/todo/todo.component';
import { EditTodoComponent } from './todos/todo-management/edit-todo/edit-todo.component';
import { AddTodoComponent } from './todos/todo-management/add-todo/add-todo.component';
import { PageNotFoundComponent } from './utilities/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    EditTodoComponent,
    AddTodoComponent,
    PageNotFoundComponent,
    RxjsDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
