const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

const FILE_PATH = './todos.json';

app.use(express.static('public'));
app.use(express.json());

function readTodos() {
  try {
    return JSON.parse(fs.readFileSync(FILE_PATH));
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}

// Get all todos
app.get('/todos', (req, res) => {
  res.json(readTodos());
});

// Add new todo
app.post('/todos', (req, res) => {
  const todos = readTodos();
  todos.push({ text: req.body.text, completed: req.body.completed });
  saveTodos(todos);
  res.json(todos);
});

// Delete todo
app.delete('/todos/:index', (req, res) => {
  const todos = readTodos();
  todos.splice(req.params.index, 1);
  saveTodos(todos);
  res.json(todos);
});

// Update todo (checkbox toggle)
app.put('/todos/:index', (req, res) => {
  const todos = readTodos();
  const index = parseInt(req.params.index);
  if (index >= 0 && index < todos.length) {
    todos[index] = req.body;
    saveTodos(todos);
    res.json({ success: true });
  } else {
    res.status(400).json({ error: 'Invalid index' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
