import React, { useState, useRef, useEffect } from "react"

export default function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const intervalId = useRef(null) // Keeps track of the interval.

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(intervalId.current)
    }
    return () => clearInterval(intervalId.current)
  }, [isRunning])

  const startStop = () => {
    setIsRunning((prevState) => !prevState)
  }

  const reset = () => {
    setTime(0)
    setIsRunning(false)
  }
  return (
    <div>
      <h1>{time} seconds</h1>
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
