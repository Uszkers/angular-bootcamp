import { Component, OnInit } from '@angular/core';
import { TodoFormModel, TodoModel } from '../../todo/todo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageTodosBase } from '../manage-todos.base';
import { TodosHttpService } from '../../todos-http.service';
import { map } from 'rxjs';
import { formatForHtmlDateInput } from '../../../utilities/date.utils';

@Component({
  selector: 'abc-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent extends ManageTodosBase implements OnInit {
  todoId!: string;
  form: FormGroup<TodoFormModel> = new FormGroup<TodoFormModel>({
    title: new FormControl(null, {
      validators: [Validators.required],
    }),
    description: new FormControl(null, {
      validators: [Validators.required],
    }),
    dueDate: new FormControl(null),
    completed: new FormControl(null),
    priority: new FormControl(null),
  });

  constructor(
    private readonly route: ActivatedRoute,
    httpService: TodosHttpService,
    router: Router
  ) {
    super(httpService, router);
  }

  ngOnInit(): void {
    this.todoId = this.route.snapshot.paramMap.get('id')!;
    this.initFormData();
  }

  override onSubmit(form: FormGroup): void {
    if (form.invalid) {
      this.showErrors(form);
      return;
    }
    const todo: TodoModel = this.form.value as TodoModel;
    this.httpService.put({ ...todo, _id: this.todoId }).subscribe(() => {
      this.backToList();
    });
  }

  shouldPresentRequiredValidationMessage(control: FormControl): boolean {
    return control.touched && control.getError('required');
  }

  private initFormData(): void {
    this.httpService
      .get(this.todoId)
      .pipe(
        map((todo) => ({
          ...todo,
          dueDate: formatForHtmlDateInput(todo.dueDate),
        }))
      )
      .subscribe((todo: TodoModel) => {
        this.form.patchValue(todo);
      });
  }
}
