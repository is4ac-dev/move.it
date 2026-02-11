import "./styles.css"

import { useContext } from "react"
import { BuildDefaultTimer, BuildFlexTimer } from "./buildTimer.tsx"

import { PomoContext } from "../../contexts/PomoContext.ts"

export function Timer(){

  const { isWorking } = useContext(PomoContext)

  return (
    isWorking ? <BuildFlexTimer/> : <BuildDefaultTimer/>
  )
}