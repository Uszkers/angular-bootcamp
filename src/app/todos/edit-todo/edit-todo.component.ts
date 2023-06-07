import { Component, OnInit } from '@angular/core';
import {
  PRIORITY_DICTIONARY,
  TodoFormModel,
  TodoModel,
} from '../todo/todo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodosService } from '../todos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'abc-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
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

  priorityDict = PRIORITY_DICTIONARY;
  minDate = new Date().toISOString().split('T')[0];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly todosService: TodosService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.todoId = this.route.snapshot.paramMap.get('id')!;
    this.initFormData();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.error('Form is invalid');
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
    const todo: TodoModel = this.todosService.get(this.todoId);
    this.form.patchValue(todo);
  }
}
