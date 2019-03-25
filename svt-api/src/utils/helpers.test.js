const assert = require('assert')
const {
  flatten,
  removeStopwords,
  removeNonAlphanumerics
} = require('./helpers')

describe('utils/helpers.js', () => {

  describe('flatten()', () => {
    it('should work properly', () => {
      const result = [[1, 2], [3, 4]].reduce(flatten, [])
      assert.deepStrictEqual(result, [1, 2, 3, 4])
    })
  })

  describe('removeNonAlphanumerics()', () => {
    it('should work properly', () => {
      const result = removeNonAlphanumerics('!$ 32 Olof..')
      assert.deepStrictEqual(result, ' 32 Olof')
    })
  })

  describe('removeStopwords()', () => {
    it('should work properly', () => {
      const result = [['Hi', 'my', 'name', 'is', 'Olof']].map(removeStopwords)
      assert.deepStrictEqual(result, [['Hi', 'name', 'Olof']])
    })
  })

})
