import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [counter, setCounter]=useState(15)

    const Addvalue =()=>{
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
    }

    const RemoveValue = () =>{
      if (counter>0) {
        setCounter(counter-1);
        
      }
    }

  return (
    <>

    <h1>Chai or CounterProject</h1>
    <h3>Counter Value : {counter}</h3>

    <button onClick={Addvalue} >Add Value</button>
    <br />
    <br />
    <button onClick={RemoveValue} >Remove Value</button>
    </>

  )
}

export default App
