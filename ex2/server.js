const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Show the form
app.get('/', (req, res) => {
  res.render('form');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;

  fs.writeFile('data.json', JSON.stringify(formData, null, 2), (err) => {
    if (err) {
      return res.send('Error saving data.');
    }
    res.redirect('/display');
  });
});

// Display saved data
app.get('/display', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.send('Error reading data.');
    }

    const parsedData = JSON.parse(data);
    res.render('display', parsedData);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
