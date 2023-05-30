import { Component } from '@angular/core';

@Component({
  selector: 'abc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos = [
    {
      title: 'Skończyć pisanie sprawozdania',
      description:
        'Dokończyć pisanie sprawozdania z wdrożenia przed ustalonym terminem',
      dueDate: '2023-06-10',
      priority: 'HIGH',
      completed: false,
    },
    {
      title: 'Zrobić zakupy',
      description: 'Kupić niezbędne produkty na cały tydzień',
      dueDate: '2023-06-02',
      priority: 'MEDIUM',
      completed: false,
    },
    {
      title: 'Ćwiczenia',
      description: 'Wstać wcześniej i pójść na siłownię',
      dueDate: '2023-06-05',
      priority: 'LOW',
      completed: false,
    },
  ];
}
