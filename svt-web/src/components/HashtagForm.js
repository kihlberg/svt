// @flow

import React, { useContext, useEffect } from 'react'
import { DispatchContext } from '../contexts'

import type { Node } from 'react'

import './HashtagForm.css'

export default () : Node => {
  const dispatch = useContext(DispatchContext)
  const inputRef = React.createRef()

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const onFormSubmit = e => {
    e.preventDefault()

    const hashtag = inputRef.current ? inputRef.current.value : ''

    dispatch({
      type: 'SET_HASHTAG',
      hashtag,
    })

    dispatch({
      type: 'SET_IS_FORM_VISIBLE',
      isFormVisible: false,
    })
  }

  return (
    <form className="HashtagForm" onSubmit={onFormSubmit}>
      <span className="HashtagForm-hashtag">#</span>
      <input
        className="HashtagForm-input"
        type="text"
        ref={inputRef}
        defaultValue=""
        placeholder="hashtag"
      />
      <button type="submit" className="HashtagForm-submit">&rarr;</button>
    </form>
  )
}
