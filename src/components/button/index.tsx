import "./styles.css"

import { BuildStartBtn, BuildCancelBtn } from "./build-btn"

export function Button(){

  return(
    <div className="button-container">
      { false ? <BuildCancelBtn/> : <BuildStartBtn/>}
    </div>
  )
}