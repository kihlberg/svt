// @flow

export type Word = {
  +word: string,
  +occurences: number
}

export type State = {
  +hashtag: string,
  +words: Array<Word>
}

export type Action =
  | { +type: 'SET_HASHTAG', +hashtag: string }
  | { +type: 'SET_WORDS', +words: Array<Word> }

export type Dispatch = (action: Action) => void
