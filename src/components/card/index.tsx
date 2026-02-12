// Importando CSS
import "./styles.css"

// Importando Contexto do Pomodoro
import { useContext } from "react"
import { PomoContext } from "../../contexts/PomoContext"

// Importando construtores do Card
import { BuildDefault, BuildExercise } from "./build-cards.tsx"

// Criando componente para Card
export function Card(){

  // Recebendo contexto do Pomodoro
  const { isFinished } = useContext(PomoContext)

  // Retornando estrutura do componente
  return(
    <aside className="card-container">
      {/* Verificando se o Timer do ciclo Pomodoro foi finalizado.
      Com base no resultado, exibe o card de acordo com o estado.*/}
      {isFinished ? <BuildExercise/> : <BuildDefault/>}
    </aside>
  )
}