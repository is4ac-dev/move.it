import "./styles.css"

import { UserDataContext } from "../../contexts/UserDataContext"
import { useContext } from "react"

import { calcPercent } from "./progressPercentCalc"

export function ProgressBar(){

  const { xpCount, nextLevelXp } = useContext(UserDataContext)

  const percentProgress = calcPercent()

  return (
    <div className="progress-container">
      <span className="fixed-xp">{ xpCount } xp</span>
      <div className="back-bar">
        <div className="fill-bar" style={{width: `${percentProgress}%`}}>
        </div>
      </div>
      <span className="fixed-xp">{ nextLevelXp } xp</span>
    </div>
  )
}