// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const CountProvider = props => {
  const value = React.useState(0)

  return <CountContext.Provider {...props} value={value} />
}

const useCount = () => {
  const value = React.useContext(CountContext)
  if (!value) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return value
}

function CountDisplay() {
  const [count] = useCount()

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [count, setCount] = useCount()
  const increment = () => setCount(count + 1)

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
