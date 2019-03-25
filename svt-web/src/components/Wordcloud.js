// @flow

import React, { useContext, useEffect } from 'react'
import ReactWordcloud from 'react-wordcloud';
import { StateContext, DispatchContext } from '../contexts'
import { selectHashtag, selectWords } from '../selectors'

import type { Node } from 'react'

import './Wordcloud.css'

const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT

if (!GRAPHQL_ENDPOINT) {
  throw Error('Missing REACT_APP_GRAPHQL_ENDPOINT in .env')
}

const options = Object.freeze({
  enableTooltip: true,
  fontFamily: 'Rubik',
  fontSizes: [12, 32],
  fontWeight: 'bold',
  padding: 6,
  rotationAngles: [0, 0],
  rotations: 1,
  transitionDuration: 600,
})

const minSize = Object.freeze([100, 100])

const query = `
  query getWordcloud($hashtag: String!) {
    wordcloud(hashtag: $hashtag) {
      words {
        text,
        value
      }
    }
  }
`

export default () : Node => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)
  const hashtag = selectHashtag(state)
  const words = selectWords(state)

  useEffect(() => {
    if (!hashtag) {
      return
    }

    fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          hashtag,
        },
      }),
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'SET_WORDS',
          words: json.data.wordcloud.words,
        })
      })
  }, [hashtag])

  const onCloseClick = e => {
    e.preventDefault()
    dispatch({
      type: 'SET_IS_FORM_VISIBLE',
      isFormVisible: true,
    })
  }

  return (
    <div className="Wordcloud">
      <ReactWordcloud words={words} options={options} minSize={minSize} />
      <button className="Wordcloud-close" onClick={onCloseClick}>X</button>
    </div>
  )
}
