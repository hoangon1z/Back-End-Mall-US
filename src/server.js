const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cookieParser = require('cookie-parser');
app.use(cookieParser());
require('dotenv').config();
const webRouter = require('./routes/web');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa router cho /home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Định nghĩa router cho /login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Định nghĩa router cho /register
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Định nghĩa router cho /register
app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Định nghĩa router cho /register
app.get('/order', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Định nghĩa router cho /register
app.get('/service', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Định nghĩa router cho /register
app.get('/account', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
});