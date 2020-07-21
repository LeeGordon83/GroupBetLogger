const fixtures = require('../../server/lib/find/fixture')

describe('findAllFixtures()', () => {
  it('should return true', () => {
    // Testing a boolean
    expect(fixtures.findAllFixtures()).toBeTruthy()
    // Another way to test a boolean
    expect(fixtures.findAllFixtures()).toEqual(true)
  })
})
