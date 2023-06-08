import { Dictionary } from '../../utilities/models/dictionary.model';
import { FormControl } from '@angular/forms';

export interface TodoModel {
  _id?: string;
  title: string;
  description: string;
  dueDate?: Date | string;
  priority: string;
  completed: boolean;
}

export interface TodoFormModel {
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  dueDate: FormControl<Date | null | string>;
  priority: FormControl<string | null>;
  completed: FormControl<boolean | null>;
}

export const PRIORITY_DICTIONARY: Dictionary[] = [
  { code: 'LOW', value: 'Niski' },
  { code: 'MEDIUM', value: 'Średni' },
  { code: 'HIGH', value: 'Wysoki' },
];

export const INIT_TODOS: TodoModel[] = [
  {
    _id: 'd2a1fe93-28b0-4889-9c96-ecf3b18055e8',
    title: 'Skończyć pisanie sprawozdania',
    description:
      'Dokończyć pisanie sprawozdania z wdrożenia przed ustalonym terminem',
    dueDate: '2023-06-10',
    priority: 'HIGH',
    completed: false,
  },
  {
    _id: 'eb195327-8c4a-49fe-9d62-a16b6ea9134c',
    title: 'Zrobić zakupy',
    description: 'Kupić niezbędne produkty na cały tydzień',
    dueDate: '2023-06-02',
    priority: 'MEDIUM',
    completed: false,
  },
  {
    _id: 'f18a96b7-3fcd-4c2c-8034-cf142bf9f23b',
    title: 'Ćwiczenia',
    description: 'Wstać wcześniej i pójść na siłownię',
    dueDate: '2023-06-05',
    priority: 'LOW',
    completed: false,
  },
];

export const INIT_TODOS: TodoModel[] = [
  {
    _id: 'd2a1fe93-28b0-4889-9c96-ecf3b18055e8',
    title: 'Complete project report',
    description: 'Finish writing the project report before the deadline.',
    priority: 'HIGH',
    completed: false,
  },
  {
    _id: 'eb195327-8c4a-49fe-9d62-a16b6ea9134c',
    title: 'Buy groceries',
    description: 'Purchase essential groceries for the week.',
    priority: 'MEDIUM',
    completed: true,
  },
  {
    _id: 'f18a96b7-3fcd-4c2c-8034-cf142bf9f23b',
    title: 'Exercise',
    description: 'Go for a 30-minute jog in the morning.',
    priority: 'LOW',
    completed: false,
  },
];
