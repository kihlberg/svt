// @flow

import React, {  useContext, useEffect } from 'react'
import { DispatchContext, StateContext } from '../contexts'

import type { Node } from 'react'

const Main = () : Node => {
  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    if (!state.hashtag) return
    let ignore = false
    const timeout = setTimeout(() => {
      console.log('MAKING REQUEST')
      if (ignore) {
        // todo: implement
      }
    }, 500)
    return () => {
      ignore = true
      clearTimeout(timeout)
    }
  }, [state.hashtag])

  return (
    <div className="Main">
      <input
        type="text"
        value={state.hashtag}
        onChange={e => {
          dispatch({
            type: 'SET_HASHTAG',
            hashtag: e.target.value
          })
        }}
      />
      {state.words.map(word => (
        <span>{word.word}, {word.occurences} occurences</span>
      ))}
    </div>
  )
}

export default Main
