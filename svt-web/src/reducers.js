// @flow

import type { State, Action } from './types'

export default (state : State, action : Action) : State => {
  switch (action.type) {
    case 'SET_HASHTAG':
      return {
        ...state,
        hashtag: action.hashtag,
        words: []
      }
    case 'SET_WORDS':
      return {
        ...state,
        words: action.words
      }
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}
