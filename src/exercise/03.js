// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const CountProvider = props => {
  const value = React.useState(0)

  return <CountContext.Provider {...props} value={value} />
}

function CountDisplay() {
  const [count] = React.useContext(CountContext)

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [count, setCount] = React.useContext(CountContext)
  const increment = () => setCount(previousCount => previousCount + 1)

  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
