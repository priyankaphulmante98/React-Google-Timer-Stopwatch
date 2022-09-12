import React from 'react'
import {useState, useEffect} from 'react'
export const Stopwatch = () => {

const [time,setTime]=useState(0)
const [timer,setTimer]=useState(false)

useEffect (()=>{

    if(timer){

        var timerId=setInterval(() => {
            setTime((time)=>time+10)
        },10)
    }
    return ()=>{
        clearInterval(timerId)
    }
},[timer])

const handleStart=() => {
    setTimer(true)
} 
const handleStop=() => {
        setTimer(false)
    }
const handleReset = () => {
    setTime(0)   
    setTimer(false)
    }

  return (
    <div className="Timer">
        <div className="spanbox">
        <div>{("0"+Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)} HR  </div>    
        <div>{("0"+Math.floor((time / (1000 * 60)) % 60)).slice(-2)} MIN  </div>
        <div>{("0"+Math.floor((time / 1000) % 60)).slice(-2)} SEC  </div>
        <div>{("0"+Math.round(time % 1000)).slice(-3)} MS </div>
        </div>
        <div className="buttonDiv1">
            <button className="FirstButton" onClick={handleStart}>START</button>
            <button className="SecondButton" onClick={handleStop}>STOP</button>
            <button className="ThirdButton" onClick={handleReset}>RESET</button>
        </div>
    </div>
  )
}