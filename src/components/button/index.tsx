// Importando CSS
import "./styles.css"

// Importando contexto do Pomodoro
import { useContext, type ReactNode } from "react"
import { PomoContext } from "../../contexts/PomoContext"

// Importando estados do Button
import { BuildStartBtn, BuildCancelBtn, BuildFinishedBtn } from "./build-btn"

// Criando componente para botão principal
export function Button(){

  // Recebendo contexto do Pomodoro
  const { isWorking, isFinished } = useContext(PomoContext)

  // Definindo variável como um nó construtor de componente
  let buttonContent: ReactNode

  // Verificando se o ciclo do Pomodoro terminou
  if (isFinished){

    // Construtor recebe button de ciclo finalizado
    buttonContent = <BuildFinishedBtn/>

    // Verifica se o ciclo do Pomodoro está em processo
  } else if(isWorking){

    // Construtor recebe button de ciclo em processo
    buttonContent = <BuildCancelBtn/>

    // Verifica se o ciclo do Pomodoro não começou
  } else{

    // Construtor recebe button para iniciar ciclo
    buttonContent = <BuildStartBtn/>
  }

  // Retornando estrutura do componente
  return(
    <div className="button-container">
      {buttonContent}
    </div>
  )
}