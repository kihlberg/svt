const assert = require('assert')

describe('handlers/wordcloud.js', () => {
  it('should work properly', async () => {
    const hashtag = 'foo'
    const mockFetchTweets = () => Promise.resolve([
      'I love SVT #foo',
      '@olof and I love Sveriges Television #foo',
      'RT @olof I\'ll never get this job at SVT... #foo'
    ])
    const handler = require('./wordcloud')(mockFetchTweets)
    const result = await handler({ hashtag })
    assert.deepStrictEqual(result, {
      words: [
        { text: 'love', value: 2 },
        { text: 'svt', value: 1 },
        { text: 'olof', value: 1 },
        { text: 'sveriges', value: 1 },
        { text: 'television', value: 1 },
      ]
    })
  })
})
