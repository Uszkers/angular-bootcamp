import { Component } from '@angular/core';
import { TodoModel } from '../../todo/todo.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodosService } from '../../todos.service';
import { ManageTodosBase } from '../manage-todos.base';

@Component({
  selector: 'abc-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent extends ManageTodosBase {
  model: TodoModel = {
    title: '',
    completed: false,
    dueDate: undefined,
    priority: 'LOW',
    description: '',
  };

  constructor(todosService: TodosService, router: Router) {
    super(todosService, router);
  }

  override onSubmit(form: FormGroup): void {
    if (form.invalid) {
      this.showErrors(form);
      return;
    }
    this.todosService.post(this.model);
    this.backToList();
  }
}
