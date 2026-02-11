import "./styles.css"

import { useContext, type ReactNode } from "react"
import { PomoContext } from "../../contexts/PomoContext.ts"

import { BuildStartBtn, BuildCancelBtn, BuildFinishedBtn } from "./build-btn"

export function Button(){

  const { isWorking, isFinished } = useContext(PomoContext)

  let buttonContent: ReactNode

  if (isFinished){
    buttonContent = <BuildFinishedBtn/>
  } else if(isWorking){
    buttonContent = <BuildCancelBtn/>
  } else{
    buttonContent = <BuildStartBtn/>
  }

  return(
    <div className="button-container">
      {buttonContent}
    </div>
  )
}