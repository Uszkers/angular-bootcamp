const http = require('http');
const url = require('url');

const INIT_TODOS= [
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



let todos = [...INIT_TODOS];

const getIdFromUrl = (reqUrl) => reqUrl.pathname.split('/').pop();

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (req.method === 'POST' && reqUrl.pathname === '/api/todo') {
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk;
    });

    req.on('end', () => {
      try {
        const newTodo = JSON.parse(postData);
        todos.push(newTodo);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newTodo));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Parsing error');
      }
    });
  }

  else if (req.method === 'GET' && reqUrl.pathname === '/api/todos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos));
  }

  else if (req.method === 'GET' && reqUrl.pathname.startsWith('/api/todo/')) {
    const todoId = getIdFromUrl(reqUrl);
    const todo = todos.find(t => t._id === todoId);

    if (todo) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(todo));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Todo not found');
    }
  }

  else if (req.method === 'PUT' && reqUrl.pathname.startsWith('/api/todo/')) {
    const todoId = getIdFromUrl(reqUrl);
    let found = false;
    let updatedTodo;

    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const updateData = JSON.parse(body);
        todos = todos.map(todo => {
          if (todo._id === todoId) {
            found = true;
            updatedTodo = Object.assign(todo, updateData);
            return updatedTodo;
          }
          return todo;
        });

        if (found) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(updatedTodo));
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Todo not found');
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Parsing error');
      }
    });
  }

  else if (req.method === 'DELETE' && reqUrl.pathname.startsWith('/api/todo/')) {
    const todoId = getIdFromUrl(reqUrl);
    const initialLength = todos.length;

    todos = todos.filter((todo) => todo._id !== todoId);

    if (todos.length < initialLength) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Todo removed');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Todo not found');
    }
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
