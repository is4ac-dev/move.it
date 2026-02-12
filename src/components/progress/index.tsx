// Importando CSS
import "./styles.css"

// Importando contexto do User
import { useContext } from "react"
import { UserDataContext } from "../../contexts/UserDataContext"

// Importando Hook para calcular progressão da barra
import { UseCalcPercent } from "./progressPercentCalc"

// Criando componente para ProgressBar
export function ProgressBar(){

  // Recebendo contexto do User de JSON-SERVER
  const { prevLevelXp, nextLevelXp } = useContext(UserDataContext)

  // Recebendo percentual de ocupação do progresso da barra
  const percentProgress = UseCalcPercent()

  // Retornando estrutura do componente
  return (
    <div className="progress-container">
      <span className="fixed-xp">{ prevLevelXp } xp</span>
      <div className="back-bar">

        {/* Definindo o espaço ocupado pelo progresso da barra */}
        <div className="fill-bar" style={{width: `${percentProgress}%`}}>
        </div>
      </div>
      <span className="fixed-xp">{ nextLevelXp } xp</span>
    </div>
  )
}