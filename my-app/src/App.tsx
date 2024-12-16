import { useState } from 'react';
import './App.css'
import FirstComponent from './FirstComponent';



function App() {  

  const [count, setCount] = useState(0);
  
  function handleClick() {
      setCount(count+1);
  }

  return (
    <>
      <h1>Welcome to React Application</h1>
      <FirstComponent count={count} onClick={handleClick}/>
      <FirstComponent count={count} onClick={handleClick}/>
    </>
  )
}

export default App
