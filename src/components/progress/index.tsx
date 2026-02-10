import "./styles.css"

export function ProgressBar(){

  return (
    <div className="progress-container">

      <span className="fixed-xp">0 xp</span>
      <div className="back-bar">
        <div className="fill-bar">
        </div>
      </div>
      <span className="fixed-xp">600 xp</span>
    </div>
  )
}