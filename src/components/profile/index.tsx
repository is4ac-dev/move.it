import profileAvatar from "../../assets/avatar.jpg"
import levelIcon from "../../assets/level.svg"

import "./styles.css"

export function Profile(){
  
  return(
    <div className="profile-card">
      <img src={profileAvatar} className="profile-avatar"/>
      <div className="profile-info">
        <span className="profile-name">Isaac Monteiro</span>
        <div className="profile-level">
          <img src={ levelIcon }/>
          <span>Level 1</span>
        </div>
      </div>
    </div>
  )
}