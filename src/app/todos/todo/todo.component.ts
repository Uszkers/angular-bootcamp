import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from './todo.model';

@Component({
  selector: 'abc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: TodoModel;
  @Output() complete: EventEmitter<void> = new EventEmitter<void>();
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();
  @Output() restore: EventEmitter<void> = new EventEmitter<void>();
}
