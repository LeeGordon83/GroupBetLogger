const request = require('supertest')
const index = require('../../index')

describe('Test the root path', () => {
  test('It should response the GET method', done => {
    request(index)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})
