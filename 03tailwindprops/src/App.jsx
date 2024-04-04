import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
  <h1 className='bg-black text-white mb-4'>Telwind Css</h1>
     
 <Card btnText="Tap Here" name="katrina" />
 <Card btnText="log in" name="surekha" />
 <Card btnText="check out" name="amrita" />
 <Card btnText="Visit me" name="kaaya" />


    </>
  )
}

export default App
