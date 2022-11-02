const express = require('express');
const app = express();

app.use('/zodiacs', require('./controllers/zodiacs'));
app.use('/horoscopes', require('./controllers/horoscopes'));

module.exports = app;
