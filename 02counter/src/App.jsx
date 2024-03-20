import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //HERE WE CAN USE USESTATE FOR REFLECT THE VALUE ON SCREEN 
  let [counter, setCounter] = useState(15)
  const addValue =()=>{
   if(counter<20){
  setCounter(counter+1)
   }
  }

  const DecreaseValue =()=>{
    if(counter>0){
    setCounter(counter-1)   
    }
  }

  

  return (
    <>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Increase {counter}</button>
      <br />
      <button onClick={DecreaseValue}>Decrease {counter}</button>
     
    </>
  )
}

export default App
