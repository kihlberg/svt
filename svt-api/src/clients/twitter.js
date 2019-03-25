const querystring = require('querystring')

const API_KEY = process.env.TWITTER_API_KEY
const API_SECRET = process.env.TWITTER_API_SECRET

module.exports = fetch => {

  // fetch the auth token once and keep the promise around for future use
  const fetchAuthTokenPromise = new Promise(async (resolve, reject) => {
    const response = await fetch(`https://api.twitter.com/oauth2/token`, {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })

    if (response.ok) {
      const body = await response.json()
      resolve(body.access_token)
    } else {
      reject(response.statusText)
    }
  })

  const fetchTweets = async hashtag => {
    const authToken = await fetchAuthTokenPromise

    const params = querystring.stringify({
      q: hashtag,
      result_type: 'mixed',
      count: 100,
      lang: 'en'
    })

    const response = await fetch(`https://api.twitter.com/1.1/search/tweets.json?${params}`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    })

    if (!response.ok) {
      throw Error(`Unable to fetch tweets: ${response.statusText}`)
    }

    const body = await response.json()
    return body.statuses.map(status => status.text)
  }

  return {
    fetchTweets,
  }

}
