import "./styles.css"

import { useContext } from "react"

import { BuildDefault, BuildExercise } from "./build-cards.tsx"

import { PomoContext } from "../../contexts/PomoContext.ts"

export function Card(){

  const { isFinished } = useContext(PomoContext)

  return(
    <aside className="card-container">
      {isFinished ? <BuildExercise/> : <BuildDefault/>}
    </aside>
  )
}