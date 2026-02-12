// Importando CSS
import "./styles.css"

// Importando Contexto do Pomodoro
import { useContext } from "react"
import { UserDataContext } from "../../contexts/UserDataContext"

// Criando componente para Challenges
export function Challenges(){

  // Recebendo contexto do User
  const { completeChallenges } = useContext(UserDataContext)
  
  // Recebendo do JSON-SERVER a quantidade de desafios concluídos.
  // Formatando resultado no padrão: 00
  const count = completeChallenges.toString().padStart(2, '0');

  // Retornando estrutura do componente
  return(
    <span className="challenges-container">
      <span>Desafios completos</span>
      <span>{count}</span>
    </span>
  )
}