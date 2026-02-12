// Importando Componentes de Renderização
import { ProgressBar } from "./components/progress/index.tsx"
import { Card } from "./components/card/index.tsx"
import { Profile } from "./components/profile/index.tsx"
import { Challenges } from "./components/challenges/index.tsx"
import { Timer } from "./components/timer/index.tsx"
import { Button } from "./components/button/index.tsx"
import { LevelUpCard } from "./components/levelupcard/index.tsx"

// Importando Componentes de Contexto
import { PomoProvider } from "./contexts/PomoContext"
import { UserDataProvider } from "./contexts/UserDataContext"

// Criando componente para renderização da aplicação
export function App() {

  // Retornando estrutura do componente
  return (
    <UserDataProvider>
      <PomoProvider>
        <div className="app-container">
          <ProgressBar />
          <main>
            <div className="client-section">
              <Profile />
              <Challenges />
              <Timer />
              <Button />
            </div>
            <Card />
          </main>
        </div>
        <LevelUpCard/>
      </PomoProvider>
    </UserDataProvider>
  )
}