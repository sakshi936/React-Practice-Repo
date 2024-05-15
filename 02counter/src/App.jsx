import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter =15
  let [counter, setCounter] = useState(15)   // useState is responsible for chaning the state of counter at each place   //setCounter is a fun

  const addValue = () => {

    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }

  }

  const removeValue = () => {

    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter)
    }
   

  }
  return (
    <>
      <h1>Chai or react-02</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue} >Add value{counter}</button>
      <br />
      <button onClick={removeValue} >Remove value {counter}</button>

      <footer>{counter}</footer>
    </>
  )
}

export default App
