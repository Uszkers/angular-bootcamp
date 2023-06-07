import { Component, OnInit } from '@angular/core';
import { TodoFormModel, TodoModel } from '../../todo/todo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodosService } from '../../todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ManageTodosBase } from '../manage-todos.base';

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
    todosService: TodosService,
    router: Router
  ) {
    super(todosService, router);
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
    this.todosService.put({ ...todo, _id: this.todoId });
    this.router.navigate(['list']);
  }

  shouldPresentRequiredValidationMessage(control: FormControl): boolean {
    return control.touched && control.getError('required');
  }

  private initFormData(): void {
    this.todosService
      .get$(this.todoId)
      .pipe(take(1))
      .subscribe((todo: TodoModel) => this.form.patchValue(todo));
  }
}
