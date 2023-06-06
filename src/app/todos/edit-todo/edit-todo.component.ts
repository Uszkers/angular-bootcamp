import { Component } from '@angular/core';
import { PRIORITY_DICTIONARY, TodoFormModel } from '../todo/todo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'abc-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent {
  form: FormGroup<TodoFormModel> = new FormGroup<TodoFormModel>({
    title: new FormControl('TODO: handle data initialization', {
      validators: [Validators.required],
    }),
    description: new FormControl('TODO: handle data initialization', {
      validators: [Validators.required],
    }),
    dueDate: new FormControl(null),
    completed: new FormControl(null),
    priority: new FormControl(null),
  });

  priorityDict = PRIORITY_DICTIONARY;
  minDate = new Date().toISOString().split('T')[0];

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.error('Form is invalid');
      return;
    }
    console.log('TODO: handle edit on submit', this.form.value);
  }

  shouldPresentRequiredValidationMessage(control: FormControl): boolean {
    return control.touched && control.getError('required');
  }
}
