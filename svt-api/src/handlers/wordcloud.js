const {
  count,
  flatten,
  isNotEmpty,
  isNotLink,
  isNotRetweet,
  isNot,
  parseWords,
  removeNonAlphanumerics,
  removeStopwords,
  toLowerCase,
} = require('../utils/helpers')

module.exports = fetchTweets => async ({ hashtag }) => {
  const tweets = await fetchTweets(hashtag)

  const wordCounts = tweets
    .filter(isNotRetweet)
    .map(toLowerCase)
    .map(removeNonAlphanumerics)
    .map(parseWords)
    .map(removeStopwords)
    .reduce(flatten, [])
    .filter(isNotEmpty)
    .filter(isNotLink)
    .filter(isNot(hashtag))
    .reduce(count, {})

  const entries = Object.keys(wordCounts)
    .map(word => ({
      text: word,
      value: wordCounts[word],
    }))

  entries.sort((a, b) => b.popularity - a.popularity)

  return {
    words: entries.slice(0, 50)
  }
}
