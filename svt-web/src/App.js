// @flow

import React, { useReducer } from 'react'
import { DispatchContext, StateContext } from './contexts'
import reducer from './reducers'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import type { Node } from 'react'
import type { State } from './types'

import './App.css'

// const foo : ?string = process.env.REACT_APP_API_ENDPOINT

/*
useEffect(() => {
  fetch(`https://ergast.com/api/f1/2018/results/1.json`)
    .then(response => response.json())
    .then(data => {
      setRaces(data.MRData.RaceTable.Races);
    });
  fetch(`https://ergast.com/api/f1/2018/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
      let raceWinner = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName + " " + data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName;
      setWinner(raceWinner);
    });
}, []);
*/

const initialState : State = {
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
