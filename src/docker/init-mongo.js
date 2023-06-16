db = db.getSiblingDB('angular-bootcamp');
db.createCollection('todos');
db.todos.insertMany([
  {
    title: 'Skończyć pisanie sprawozdania',
    description: 'Dokończyć pisanie sprawozdania z wdrożenia przed ustalonym terminem',
    dueDate: '2023-06-10',
    priority: 'HIGH',
    completed: false,
  },
  {
    title: 'Zrobić zakupy',
    description: 'Kupić niezbędne produkty na cały tydzień',
    dueDate: '2023-06-02',
    priority: 'MEDIUM',
    completed: true,
  },
  {
    title: 'Ćwiczenia',
    description: 'Wstać wcześniej i pójść na siłownię',
    dueDate: '2023-06-05',
    priority: 'LOW',
    completed: false,
  },
]);
