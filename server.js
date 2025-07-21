const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Student = require('./models/Student');

const app = express();

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://pretekaa:XnK5lxTgFCvOxIU5@cluster0.feeivcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send(`<h3>✅ Member added successfully.</h3><a href="/">Go Back</a>`);
  } catch (err) {
    res.status(500).send('❌ Error adding Member');
  }
});

app.get('/students', async (req, res) => {
  const students = await Student.find();
  let html = `<link rel="stylesheet" href="style.css"><div class="container"><h1>All Member</h1><ul>`;
  students.forEach(s => {
    html += `<li>${s.name}, Age: ${s.age}, Blood Group: ${s.bloodgroup}
      [<a href="/update/${s._id}">Edit</a>] 
      [<a href="/delete/${s._id}">Delete</a>]</li>`;
  });
  html += `</ul><br><a href="/" class="link">Add New Member</a></div>`;
  res.send(html);
});

app.get('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/students');
});

app.get('/update/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  const html = `
  <link rel="stylesheet" href="/style.css">
  <div class="container">
    <h1>Update Member</h1>
    <form action="/update/${student._id}" method="POST">
      <label>Name:</label>
      <input type="text" name="name" value="${student.name}" required />

      <label>Age:</label>
      <input type="number" name="age" value="${student.age}" required />

      <label>Blood Group:</label>
      <input type="text" name="bloodgroup" value="${student.bloodgroup}" required />

      <button type="submit">Update</button>
    </form>
    <a href="/students" class="link">Back to List</a>
  </div>`;
  res.send(html);
});

app.post('/update/:id', async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/students');
});

// Start Server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
