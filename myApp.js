const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse urlencoded POST bodies
app.use(bodyParser.urlencoded({ extended: false }));

// GET /name - from query parameters
app.get('/name', (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
});

// POST /name - from form body
app.post('/name', (req, res) => {
  const firstName = req.body.first;
  const lastName = req.body.last;
  res.json({ name: `${firstName} ${lastName}` });
});

module.exports = app;
