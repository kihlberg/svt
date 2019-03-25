// @flow

import type { Action, State } from './types'

export default (state: State, action: Action) : State => {
  switch (action.type) {
    case 'SET_IS_FORM_VISIBLE':
      return {
        ...state,
        isFormVisible: action.isFormVisible,
      }
    case 'SET_HASHTAG':
      return {
        ...state,
        hashtag: action.hashtag,
      }
    case 'SET_WORDS':
      return {
        ...state,
        words: action.words,
      }
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}
