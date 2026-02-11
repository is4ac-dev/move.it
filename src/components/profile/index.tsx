import profileAvatar from "../../assets/avatar.jpg"
import levelIcon from "../../assets/level.svg"
import "./styles.css"

import { UserDataContext } from "../../contexts/UserDataContext"
import { useContext } from "react"

export function Profile(){

  const { level } = useContext(UserDataContext)
  
  return(
    <div className="profile-card">
      <img src={profileAvatar} className="profile-avatar"/>
      <div className="profile-info">
        <span className="profile-name">Isaac Monteiro</span>
        <div className="profile-level">
          <img src={ levelIcon }/>
          <span>Level {level}</span>
        </div>
      </div>
    </div>
  )
}