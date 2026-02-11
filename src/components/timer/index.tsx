import "./styles.css"

import { useContext, type ReactNode } from "react"
import { BuildDefaultTimer, BuildFlexTimer, BuildZeroTimer } from "./buildTimer.tsx"

import { PomoContext } from "../../contexts/PomoContext.ts"

export function Timer(){

  const { isWorking, isFinished } = useContext(PomoContext)
  
  let timerContent: ReactNode

  if (isFinished){
    timerContent = <BuildZeroTimer/>
  } else if(isWorking){
    timerContent = <BuildFlexTimer/>
  } else{
    timerContent = <BuildDefaultTimer/>
  }

  return (
    <>
      {timerContent}
    </>
  )
}