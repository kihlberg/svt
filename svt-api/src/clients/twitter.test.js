const assert = require('assert')

const mockFetchResponse = json => Promise.resolve({
  ok: true,
  json: () => Promise.resolve(json)
})

describe('clients/twitter.js', () => {

  describe('fetchTweets(hashtag)', () => {
    it('should fetch tweets properly', async () => {
      const mockFetch = url => {
        if (url.startsWith('https://api.twitter.com/oauth2/token')) {
          return mockFetchResponse({
            access_token: 'foo'
          })
        } else if (url.startsWith('https://api.twitter.com/1.1/search/tweets.json')) {
          return mockFetchResponse({
            statuses: [
              { text: 'foo' },
              { text: 'bar' },
            ]
          })
        } else {
          throw Error(`Unexpected call to url ${url}`)
        }
      }
      const { fetchTweets } = require('./twitter')(mockFetch)
      const tweets = await fetchTweets('foo')
      assert.deepStrictEqual(tweets, ['foo', 'bar'])
    })
  })

})
