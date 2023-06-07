import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from './todo.model';
import { formatDate } from '../../utilities/date.utils';

@Component({
  selector: 'abc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  get todo(): TodoModel {
    return this._todo;
  }

  @Input() set todo(value: TodoModel) {
    if (value.priority === 'HIGH') {
      this.priorityClass = 'todo--high-priority';
    }
    if (value.priority === 'MEDIUM') {
      this.priorityClass = 'todo--medium-priority';
    }
    if (value.dueDate) {
      this.dueDate = formatDate(value.dueDate);
      if (new Date(value.dueDate) < new Date()) {
        this.isOverdue = true;
      }
    }

    this._todo = value;
  }

  priorityClass: string = '';
  isOverdue: boolean = false;
  dueDate: string = '';

  showDueDate(): boolean {
    return !this._todo.completed && !!this._todo.dueDate;
  }

  private _todo!: TodoModel;
  @Output() complete: EventEmitter<void> = new EventEmitter<void>();
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();
  @Output() restore: EventEmitter<void> = new EventEmitter<void>();
}
