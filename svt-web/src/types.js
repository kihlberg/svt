// @flow

export type Word = {
  +text: string,
  +value: number,
}

export type State = {
  +isFormVisible: boolean,
  +hashtag: string,
  +words: Array<Word>,
}

export type Action =
  | { +type: 'SET_IS_FORM_VISIBLE', +isFormVisible: boolean }
  | { +type: 'SET_HASHTAG', +hashtag: string }
  | { +type: 'SET_WORDS', +words: Array<Word> }

export type Dispatch = (action: Action) => void
