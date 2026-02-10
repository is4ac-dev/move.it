export function BuildStartBtn(){
  return(
    <button className="start-btn">
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
  return(
    <button className="cancel-btn">
      <span>Abandonar ciclo</span>
      <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#FFFFFF"/>
      </svg>
    </button>
  )
}