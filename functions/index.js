const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('email-validator');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET /hello
app.get('/hello', (req, res) => {
  console.info('/hello được gọi');
  res.send('Welcome to Firebase Cloud Functions');
});

// POST /emailValidate
app.post('/emailValidate', (req, res) => {
  const { email } = req.body;

  if (email) {
    console.info('/emailValidate thành công');
    res.json({ status: validator.validate(email) });
  } else {
    console.warn('/emailValidate sai dữ liệu đầu vào');
    res.status(500).json({ status: 'wrong input' });
  }
});

// Quan trọng nhất: đưa cả app Express thành 1 Cloud Function tên "app"
exports.app = functions.https.onRequest(app);