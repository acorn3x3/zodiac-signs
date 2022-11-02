const { Router } = require('express');
const { horoscopes } = require('../horoscopes-data');

module.exports = Router()
  .get('/:sign', (req, res) => {
    let match;
    for (const horoscope of horoscopes) {
      if (horoscope.sign === req.params.sign) {
        match = horoscope;
      }
    }
    return res.json(match);
  })

  .get('/:sign', (req, res) => {
    const filteredDataTwo = [];
    for (const horoscope of horoscopes) {
      filteredDataTwo.push({
        sign: horoscope.sign,
        message: horoscope.message,
      });
    }
    res.json(filteredDataTwo);
  });
