// Importando ícones SVG
import iconLevel from "../../assets/level-up.svg"
import iconHalter from "../../assets/halter.svg"

// Importando contexto do Pomodoro e do Usuário
import { useContext } from "react"
import { PomoContext } from "../../contexts/PomoContext"
import { UserDataContext } from "../../contexts/UserDataContext"

// CARD: Default
export function BuildDefault(){

  // Retornando estrutura do componente de Button
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

// CARD: Proposta de Exercício
export function BuildExercise(){

  // Recebendo contexto do Pomodoro
  const {isFinished, setIsFinished} = useContext(PomoContext)

  // Recebendo contexto do User
  const userData = useContext( UserDataContext)

  // Resposta do Button de Exercício Finalizado
  function buttonResponse(){

    // Alterando estado do Pomodoro para finalizado
    setIsFinished(!isFinished)

    // Atualizando estatísticas do estado do User
    userData.addXp()
    userData.completeNewChallenge()
  }

  // Retornando estrutura do componente de Card
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

        {/* FUNCIONALIDADE: alterna o estado do contexto do Pomodoro para: EXERCÍCIO NÃO REALIZADO */}
        <button className="falid-btn btn-box" onClick={() => setIsFinished(!isFinished)}>Não Completado</button>
        
        {/* FUNCIONALIDADE: alterna o estado do contexto do User para: EXERCÍCIO REALIZADO*/}
        <button className="sucess-btn btn-box" onClick={() => buttonResponse()}>Completado</button>
      </div>
    </div>
  )
}