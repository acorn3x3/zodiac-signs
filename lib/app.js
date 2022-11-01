const express = require('express');
const app = express();

app.use('/zodiacs', require('./controllers/zodiacs'));

module.exports = app;
