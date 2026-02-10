import "./styles.css"

import { BuildDefault } from "./build-cards.tsx"

export function Card(){

  return(
    <aside className="card-container">
      <BuildDefault/>
    </aside>
  )
}