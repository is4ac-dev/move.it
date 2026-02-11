import { useContext } from "react"
import { PomoContext } from "../../contexts/PomoContext.ts"


export function BuildStartBtn(){

  const { isWorking, setIsWorking } = useContext(PomoContext)

  return(
    <button className="start-btn" onClick={() => setIsWorking(!isWorking)}>
      <span>Iniciar um ciclo</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_149732_113)"> 
          <path d="M8 5V19L19 12L8 5Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_149732_113">
            <rect width="24" height="24" rx="5" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}

export function BuildCancelBtn(){

  const { isWorking, setIsWorking } = useContext(PomoContext)

  return(
    <button className="cancel-btn" onClick={() => setIsWorking(!isWorking)}>
      <span>Abandonar ciclo</span>
      <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#666666"/>
      </svg>
    </button>
  )
}

export function BuildFinishedBtn(){

  return(
    <button className="finished-btn">
      <span>Ciclo encerrado</span>
      <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33333 0C3.73333 0 0 3.73333 0 8.33333C0 12.9333 3.73333 16.6667 8.33333 16.6667C12.9333 16.6667 16.6667 12.9333 16.6667 8.33333C16.6667 3.73333 12.9333 0 8.33333 0ZM6.66667 12.5L2.5 8.33333L3.675 7.15833L6.66667 10.1417L12.9917 3.81667L14.1667 5L6.66667 12.5Z" fill="#4CD62B"/>
      </svg>
    </button>
  )
}