import "./styles.css"

import { BuildDefaultTimer, BuildFlexTimer } from "./buildTimer.tsx"

export function Timer(){

  const isWorking = false

  return (
    isWorking ? <BuildFlexTimer/> : <BuildDefaultTimer/>
  )
}