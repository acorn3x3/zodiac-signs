const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/zodiacs', require('./controllers/zodiacs'));
app.use('/horoscopes', require('./controllers/horoscopes'));

module.exports = app;
