import { Router } from '@angular/router';
import { PRIORITY_DICTIONARY } from '../todo/todo.model';
import { FormGroup } from '@angular/forms';
import { TodosHttpService } from '../todos-http.service';

export abstract class ManageTodosBase {
  priorityDict = PRIORITY_DICTIONARY;
  minDate = new Date().toISOString().split('T')[0];

  protected constructor(
    protected readonly httpService: TodosHttpService,
    protected readonly router: Router
  ) {}

  abstract onSubmit(form: FormGroup): void;

  showErrors(form: FormGroup): void {
    form.markAllAsTouched();
    console.error('Form is invalid');
  }

  backToList(): void {
    this.router.navigate(['list']);
  }
}
