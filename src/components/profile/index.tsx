// Importando Avatar e ícone SVG
import profileAvatar from "../../assets/avatar.jpg"
import levelIcon from "../../assets/level.svg"

// Importando CSS
import "./styles.css"

// Importando contexto do User
import { useContext } from "react"
import { UserDataContext } from "../../contexts/UserDataContext"

// Criando componente para Profile
export function Profile(){

  // Recebendo contexto do User a partir do JSON-SERVER
  const { level, xpCount, username } = useContext(UserDataContext)
  
  // Retornando estrutura do componente
  return(
    <div className="profile-card">
      <img src={profileAvatar} className="profile-avatar"/>
      <div className="profile-info">
        <span className="profile-name">{ username }</span>
        <div className="profile-level">
          <img src={ levelIcon }/>
          <span>Level {level} | {xpCount} xp</span>
        </div>
      </div>
    </div>
  )
}