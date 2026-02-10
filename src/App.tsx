import { ProgressBar } from "./components/progress/index.tsx"
import { Card } from "./components/card/index.tsx"
import { Profile } from "./components/profile/index.tsx"
import { Challenges } from "./components/challenges/index.tsx"

export function App(){
  return(
    <div className="app-container">
    <ProgressBar/>
    <main>
      <div className="client-section">
        <Profile/>
        <Challenges/>
      </div>
      <Card/>
    </main>
    </div>
  )
}