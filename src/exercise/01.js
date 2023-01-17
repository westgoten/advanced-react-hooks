// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(previousState, newState) {
  if (typeof newState === 'function') {
    return newState(previousState)
  }
  return {...previousState, ...newState}
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  const increment = () =>
    setState(previousState => ({count: previousState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
