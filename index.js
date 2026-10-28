const express = require('express');
const bodyParser = require('body-parser');
const validator = require('email-validator');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  console.info('/hello được gọi');
  res.send('Welcome to Render');
});

app.post('/emailValidate', (req, res) => {
  const { email } = req.body;
  if (email) {
    res.json({ status: validator.validate(email) });
  } else {
    res.status(500).json({ status: 'wrong input' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.info('Server đang chạy ở cổng', PORT);
});