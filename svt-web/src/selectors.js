// @flow

import type { State, Word } from './types'

export const selectHashtag = (state: State) : string => state.hashtag

export const selectIsFormVisible = (state: State) : boolean => state.isFormVisible

export const selectWords = (state: State) : Array<Word> => state.words
