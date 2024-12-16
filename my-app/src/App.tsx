import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count+1);
  }

  return (
    <>
      <h1>Welcome to React Application</h1>
      <button className="button" onClick={handleClick}>click</button>
      <p>Button Clicked: {count}</p>
    </>
  )
}

export default App
