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
});
