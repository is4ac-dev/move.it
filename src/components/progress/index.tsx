import "./styles.css"

import { UserDataContext } from "../../contexts/UserDataContext"
import { useContext } from "react"

import { useCalcPercent } from "./progressPercentCalc"

export function ProgressBar(){

  const { prevLevelXp, nextLevelXp } = useContext(UserDataContext)

  const percentProgress = useCalcPercent()

  return (
    <div className="progress-container">
      <span className="fixed-xp">{ prevLevelXp } xp</span>
      <div className="back-bar">
        <div className="fill-bar" style={{width: `${percentProgress}%`}}>
        </div>
      </div>
      <span className="fixed-xp">{ nextLevelXp } xp</span>
    </div>
  )
}