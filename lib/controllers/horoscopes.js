const { Router } = require('express');
const { horoscopes } = require('../horoscopes-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    let match;
    for (const horoscope of horoscopes) {
      if (horoscope.id === req.params.id) {
        match = horoscope;
      }
    }
    return res.json(match);
  })

  .get('/:sign', (req, res) => {
    const filteredDataTwo = [];
    for (const horoscope of horoscopes) {
      filteredDataTwo.push({ id: horoscope.sign, name: horoscope.message });
    }
    res.json(filteredDataTwo);
  });
