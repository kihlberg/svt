// @flow

import React from 'react'

import type { State, Dispatch } from './types'

export const StateContext = React.createContext<State>({});

export const DispatchContext = React.createContext<Dispatch>(() => {
  throw Error('Dispatch function has not been provided')
});
