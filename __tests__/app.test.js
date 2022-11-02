const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiacs-data');

describe('zodiac routes', () => {
  it('/zodiacs should return list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });
  it('/zodiacs/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });
  it('/horoscopes/:message should return horoscope detail', async () => {
    const aquarius = {
      id: '1',
      name: 'aquarius',
      sign: 'aquarius',
      message: `Maybe its all the Nickelodeon you've been watching but just because you haven't peed in 3 days doesnt make you a water bender`,
    };
  });
});
