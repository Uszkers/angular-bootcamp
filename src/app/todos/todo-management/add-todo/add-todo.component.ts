import { Component } from '@angular/core';
import { TodoModel } from '../../todo/todo.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageTodosBase } from '../manage-todos.base';
import { TodosHttpService } from '../../todos-http.service';

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

  constructor(todosHttpService: TodosHttpService, router: Router) {
    super(todosHttpService, router);
  }

  override onSubmit(form: FormGroup): void {
    if (form.invalid) {
      this.showErrors(form);
      return;
    }
    this.httpService.post(this.model).subscribe((test) => {
      console.log(test);
      this.backToList();
    });
  }
}
