import { useState } from "react"

import { ProgressBar } from "./components/progress/index.tsx"
import { Card } from "./components/card/index.tsx"
import { Profile } from "./components/profile/index.tsx"
import { Challenges } from "./components/challenges/index.tsx"
import { Timer } from "./components/timer/index.tsx"
import { Button } from "./components/button/index.tsx"

import { PomoContext } from "./contexts/PomoContext.ts"

export function App(){

  const [isWorking, setIsWorking] = useState(false)

  const [isFinished, setIsFinished] = useState(false)

  return(
    <PomoContext.Provider value={{isWorking, setIsWorking, isFinished, setIsFinished}}>
      <div className="app-container">
      <ProgressBar/>
      <main>
        <div className="client-section">
          <Profile/>
          <Challenges/>
          <Timer/>
          <Button/>
        </div>
        <Card/>
      </main>
      </div>
    </PomoContext.Provider>
  )
}