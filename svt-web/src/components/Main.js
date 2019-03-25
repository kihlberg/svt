// @ flow

import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group';

import { StateContext } from '../contexts'
import { selectIsFormVisible } from '../selectors'

import HashtagForm from './HashtagForm'
import Wordcloud from './Wordcloud'

import './Main.css'

export default () : Node => {
  const state = useContext(StateContext)
  const isFormVisible = selectIsFormVisible(state)

  return (
    <div className="Main">
      <Wordcloud />
      <CSSTransition
        in={isFormVisible}
        unmountOnExit
        timeout={200}
        classNames="HashtagForm"
      >
        <HashtagForm />
      </CSSTransition>
    </div>
  )
}
