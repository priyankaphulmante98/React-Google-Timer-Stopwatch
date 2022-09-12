import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
  const [hour, setHour] = useState("")
  const [minute, setMinute] = useState("")
  const [second, setSecond] = useState("")
  const [timeron, setTimeron] = useState(false)

  useEffect(() => {
    if (timeron) {
      var secondInterval =setInterval
        (() => {
          if (second === 0) {
            clearInterval(secondInterval)
          } else {
            setSecond((prevsec) => prevsec - 1)
          }
        },
        1000)
      if (second === 0 && minute !== 0) {
        var minuteInterval = setInterval(() => {
          setMinute((prevmin) => prevmin - 1)
          if (minute== 0) {
            clearInterval(minuteInterval)
          } else {
            setSecond(60)
          }
        }, 1000)
      }
      if (minute === 0 && hour !== 0) {
        var hourInterval = setInterval(() => {
          setHour((prevhr) => prevhr - 1)
          if (hour == 0) {
            clearInterval(hourInterval)
          } else {
            setMinute(60)
          }
        }, 1000)
      }
      if (second === 0 && minute === 0 && hour === 0) {
        clearInterval(secondInterval)
        clearInterval(minuteInterval)
        clearInterval(hourInterval)
      }
    }
    return () => {
      clearInterval(secondInterval)
      clearInterval(minuteInterval)
      clearInterval(hourInterval)
    }
  }, [hour, minute, second, timeron])

  const handleStart = () => {
    setTimeron(true)
  }
  const handleStop = () => {
    setTimeron(false)
  }
  const handleReset = () => {
    setHour("")
    setMinute("")
    setSecond("")
    setTimeron(false)
  }
  return (
    <div>
      <div className="inputBox">
        HR:<input
          type="number"
          placeholder="00 Hr"
          value={hour}
          onChange={(e) => {
            setHour(e.target.value)
          }}
        />
        MIN:<input
          type="number"
          placeholder="00 Min"
          value={minute}
          onChange={(e) => {
            setMinute(e.target.value)
          }}
        />
        SEC:<input
          type="number"
          placeholder="00 Sec"
          value={second}
          onChange={(e) => {
            setSecond(e.target.value)
          }}
          
        ></input>
      
      </div>
      <div className="buttonDiv1">
        <button className="FirstButton" onClick={handleStart}>START</button>
        <button className="SecondButton" onClick={handleStop}>STOP</button>
        <button  className="ThirdButton" onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default Timer
console.log("masai school")