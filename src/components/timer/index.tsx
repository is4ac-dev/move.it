// Importando CSS
import "./styles.css"

// Importando contexto do Pomodoro
import { useContext, type ReactNode } from "react"
import { PomoContext } from "../../contexts/PomoContext"

// Imoportando Hooks construtores
import { BuildDefaultTimer, BuildFlexTimer, BuildZeroTimer } from "./buildTimer.tsx"

// Criando componente de Timer
export function Timer(){

  // Recebendo contexto do Pomodoro
  const { isWorking, isFinished } = useContext(PomoContext)
  
  // Definindo variável como um nó construtor de componente
  let timerContent: ReactNode

  // Verificando se o ciclo do Pomodoro terminou
  if (isFinished){

    // Construtor recebe timer de ciclo finalizado
    timerContent = <BuildZeroTimer/>

    // Verifica se o ciclo do Pomodoro está em processo
  } else if(isWorking){

    // Construtor recebe button de ciclo em processo
    timerContent = <BuildFlexTimer/>

    // Verifica se o ciclo do Pomodoro não começou
  } else{

    // Construtor recebe button para iniciar ciclo
    timerContent = <BuildDefaultTimer/>
  }

  // Retornando estrutura do componente
  return (
    <>
      {timerContent}
    </>
  )
}