// @flow

import React, { useReducer } from 'react'
import { DispatchContext, StateContext } from '../contexts'
import reducer from '../reducers'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import type { Node } from 'react'
import type { State } from '../types'

import './App.css'

const initialState : State = {
  isFormVisible: true,
  hashtag: '',
  words: [],
}

export const App = () : Node => {
  const [
    state,
    dispatch,
  ] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Header />
          <Main />
          <Footer />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  )
}

export default App
