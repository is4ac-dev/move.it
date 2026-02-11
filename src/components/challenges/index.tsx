import "./styles.css"

import { UserDataContext } from "../../contexts/UserDataContext"
import { useContext } from "react"

export function Challenges(){

  const { completeChallenges } = useContext(UserDataContext)
  
  const count = completeChallenges.toString().padStart(2, '0');

  return(
    <span className="challenges-container">
      <span>Desafios completos</span>
      <span>{count}</span>
    </span>
  )
}