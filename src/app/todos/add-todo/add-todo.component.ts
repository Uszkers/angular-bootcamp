import { Component } from '@angular/core';
import { PRIORITY_DICTIONARY, TodoModel } from '../todo/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'abc-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  model: TodoModel = {
    title: '',
    completed: false,
    dueDate: undefined,
    priority: 'LOW',
    description: '',
  };

  priorityDict = PRIORITY_DICTIONARY;
  minDate = new Date().toISOString().split('T')[0];

  onSubmit(addTodoForm: NgForm): void {
    if (addTodoForm.invalid) {
      addTodoForm.form.markAllAsTouched();
      console.error('Form is invalid');
      return;
    }
    console.log('TODO: handle adding data on submit', this.model);
  }
}
