const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8081;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'school'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
// Signup route
app.post('/signup', (req, res) => {
  const { admissionid, password } = req.body;
  const sql = 'INSERT INTO users (admissionid, password) VALUES (?, ?)';
  db.query(sql, [admissionid, password], (err, result) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Error signing up');
    } else {
      console.log('Signup successful!');
      res.send('Signup successful!');
    }
  });
});

// Login route
app.post('/login', (req, res) => {
  const { admissionid, password } = req.body;
  const sql = 'SELECT * FROM users WHERE admissionid = ? AND password = ?';
  db.query(sql, [admissionid, password], (err, result) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Error logging in');
    } else {
      if (result.length > 0) {
        res.json({ message: 'Login successful!' });
      } else {
        console.log('Invalid admission ID or password');
        res.status(401).send('Invalid admission ID or password');
      }
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
