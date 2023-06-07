import { Component } from '@angular/core';
import { PRIORITY_DICTIONARY, TodoModel } from '../todo/todo.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodosService } from '../todos.service';

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

  constructor(
    private readonly todosService: TodosService,
    private readonly router: Router
  ) {}

  onSubmit(addTodoForm: NgForm): void {
    if (addTodoForm.invalid) {
      addTodoForm.form.markAllAsTouched();
      console.error('Form is invalid');
      return;
    }
    this.todosService.post(this.model);
    this.router.navigate(['list']);
  }
}
