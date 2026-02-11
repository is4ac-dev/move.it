import iconLevel from "../../assets/level-up.svg"
import iconHalter from "../../assets/halter.svg"

import { useContext } from "react"
import { PomoContext } from "../../contexts/PomoContext"

export function BuildDefault(){
  return(
    <div className="text-content">
      <span>Inicie um ciclo para receber desafios</span>
      <div className="message-text">
        <img src={ iconLevel }/>
        <p>Avance de level completando os desafios.</p>
      </div>
    </div>
  )
}

export function BuildExercise(){

  const {isFinished, setIsFinished} = useContext(PomoContext)

  function buttonResponse(){

    setIsFinished(!isFinished)
  }

  return(
    <div className="card-exercise">
      <span>Ganhe 400 xp</span>
      <div className="divisor-line"></div> 
      <div className="card-text">
        <img src={iconHalter}/>
        <span>Exercite-se</span>
        <p>É agora Isaac, bora lá meu parça. Caminhe por 3 minutos e estique suas pernas para você ficar saudável.</p>
      </div>
      <div className="answer-button">
        <button className="falid-btn btn-box" onClick={() => buttonResponse()}>Não Completado</button>
        <button className="sucess-btn btn-box" onClick={() => buttonResponse()}>Completado</button>
      </div>
    </div>
  )
}