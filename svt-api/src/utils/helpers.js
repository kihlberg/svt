const stopword = require('stopword')

const flatten = (acc, list) => acc.concat(list)

const count = (acc, str) =>  {
  if (acc[str] === undefined) {
    acc[str] = 1
  } else {
    acc[str] = acc[str] + 1
  }
  return acc
}

const removeNonAlphanumerics = str => str
  .replace(/\s/g, '_')
  .replace(/\W/g, '')
  .replace(/_/g, ' ')

const removeStopwords = list => stopword.removeStopwords(list)

const toLowerCase = str => str.toLowerCase()

const parseWords = str => str.split(' ')

const isNotLink = str => !str.startsWith('http')

const isNotRetweet = str => !str.startsWith('RT @')

const isNotEmpty = str => str.trim() !== ''

const isNot = x => str => x !== str

module.exports = {
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
}
