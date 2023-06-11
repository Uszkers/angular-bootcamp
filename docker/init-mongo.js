db = db.getSiblingDB('angular-bootcamp');
db.createCollection('todos');
db.todos.insertMany([
  {
    title: 'Complete project report',
    description: 'Finish writing the project report before the deadline.',
    dueDate: '2023-06-10',
    priority: 'HIGH',
    completed: false,
  },
  {
    title: 'Buy groceries',
    description: 'Purchase essential groceries for the week.',
    dueDate: '2023-06-02',
    priority: 'MEDIUM',
    completed: false,
  },
  {
    title: 'Exercise',
    description: 'Go for a 30-minute jog in the morning.',
    dueDate: '2023-06-05',
    priority: 'LOW',
    completed: false,
  },
]);