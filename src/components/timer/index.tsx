import "./styles.css"

export function Timer(){

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