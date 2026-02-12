import { useState, useEffect, useContext } from "react"

import { PomoContext } from "../../contexts/PomoContext"

export function BuildDefaultTimer(){
  return (
    <div className="timer-container">
      <div className="number-box">
        <span>2</span>
        <div className="divisor"></div>
        <span>5</span>
      </div>
      <div className="separator">:</div>
      <div className="number-box">
        <span>0</span>
        <div className="divisor"></div>
        <span>0</span>
      </div>
    </div>
  )
}

export function BuildFlexTimer(){
  
  const [timer, setTimer] = useState(1500)

  const {isWorking, setIsWorking, isFinished, setIsFinished} = useContext(PomoContext)

  useEffect(() => {

    if (timer <= 0){
      return(
        setIsWorking(!isWorking),
        setIsFinished(!isFinished)
      )
    };

    const intervalId = setInterval(() => {

      setTimer((prev) => prev - 1);
    }, 1000)

    return () => clearInterval(intervalId);
  }, [timer])

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const min = String(minutes).padStart(2, '0');
  const sec = String(seconds).padStart(2, '0');

  return (
    <div className="timer-container">
      <div className="number-box">
        <span>{min[0]}</span>
        <div className="divisor"></div>
        <span>{min[1]}</span>
      </div>
      <div className="separator">:</div>
      <div className="number-box">
        <span>{sec[0]}</span>
        <div className="divisor"></div>
        <span>{sec[1]}</span>
      </div>
    </div>
  )
}

export function BuildZeroTimer(){
  return (
    <div className="timer-container">
      <div className="number-box">
        <span>0</span>
        <div className="divisor"></div>
        <span>0</span>
      </div>
      <div className="separator">:</div>
      <div className="number-box">
        <span>0</span>
        <div className="divisor"></div>
        <span>0</span>
      </div>
    </div>
  )
}