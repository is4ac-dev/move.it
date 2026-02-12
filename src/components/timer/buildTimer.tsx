// Importando Hooks e Contexto do Pomodoro
import { PomoContext } from "../../contexts/PomoContext"
import { useState, useEffect, useContext } from "react"

// Criando componente de Timer Estático
export function BuildDefaultTimer(){
  return (
    <div className="timer-container">
      <div className="number-box">
        <span>2</span>
        <div className="divisor"></div>
        <span>5</span>
      </div>
      <div className="separator">:</div>
      <div className="number-box">
        <span>0</span>
        <div className="divisor"></div>
        <span>0</span>
      </div>
    </div>
  )
}

// Criando componente de Timer Flexível e Reativo
export function BuildFlexTimer(){
  
  // Recebendo estado do Timer para oferecer reatividade em tempo real
  // 1500s == 25min
  const [timer, setTimer] = useState(1500)

  // Recebendo contexto do Pomodoro
  const {isWorking, setIsWorking, isFinished, setIsFinished} = useContext(PomoContext)

  // Se o estado do timer mudar, realizando operação abaixo
  useEffect(() => {

    // Verificando se o timer zerou
    if (timer <= 0){

      // Retornando mudança de contexto do Pomodoro
      return(

        // Contexto de EM PROCESSO => FALSE
        setIsWorking(!isWorking),

        // Contexto de FINALIZADO => TRUE
        setIsFinished(!isFinished)
      )
    };

    // Aplicando timer
    const intervalId = setInterval(() => {

      // Regredindo timer a cada 1 segundo
      setTimer((prev) => prev - 1);
    }, 1000)

    // Resetando intervalo para começar novamente
    return () => clearInterval(intervalId);
  }, [timer])

  // Separando os minutos e segundos matematicamente 
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  // Definindo uma lista para separar individualmente cada algarismo
  const min = String(minutes).padStart(2, '0');
  const sec = String(seconds).padStart(2, '0');

  // Retornando estrutura do componente
  return (
    <div className="timer-container">
      <div className="number-box">
        <span>{min[0]}</span>
        <div className="divisor"></div>
        <span>{min[1]}</span>
      </div>
      <div className="separator">:</div>
      <div className="number-box">
        <span>{sec[0]}</span>
        <div className="divisor"></div>
        <span>{sec[1]}</span>
      </div>
    </div>
  )
}

// Criando componente de Timer Zerado
export function BuildZeroTimer(){
  return (
    <div className="timer-container">
      <div className="number-box">
        <span>0</span>
        <div className="divisor"></div>
        <span>0</span>
      </div>
      <div className="separator">:</div>
      <div className="number-box">
        <span>0</span>
        <div className="divisor"></div>
        <span>0</span>
      </div>
    </div>
  )
}