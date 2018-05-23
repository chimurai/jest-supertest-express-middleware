const request = require('supertest')
const app = require('../app')

describe('GET /user', () => {
  it('respond with json', async () => {
    const response = await request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body).toMatchSnapshot()
  })
})
