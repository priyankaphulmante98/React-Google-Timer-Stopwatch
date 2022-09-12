import React from 'react'
import "./App.css"
import {useState} from "react"
import { Stopwatch } from './components/Stopwatch'
import Timer from './components/Timer'
const App = () => {
const [togglebtn,setTogglebtn]= useState(false)

const toggletimer=()=>{
    setTogglebtn(false)
}
const togglestopwatch=()=>{
    setTogglebtn(true)
}
  return (
    <div className="Toggle">
      <div className="buttonDiv">
      <button onClick={toggletimer}>TIMER</button>
     <button onClick={togglestopwatch}>STOPWATCH</button>
      </div>
    
    {(!togglebtn) ? <Timer/>: <Stopwatch/>}  
      
    </div>
  )
}

export default App