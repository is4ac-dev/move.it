import iconLevel from "../../assets/level-up.svg"

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