// Importando Componentes de Renderização
import { ProgressBar } from "./progress/index.tsx"
import { Card } from "./card/index.tsx"
import { Profile } from "./profile/index.tsx"
import { Challenges } from "./challenges/index.tsx"
import { Timer } from "./timer/index.tsx"
import { Button } from "./button/index.tsx"
import { LevelUpCard } from "./levelupcard/index.tsx"

// Importando Componentes de Contexto
import { PomoProvider } from "../contexts/PomoContext.tsx"
import { UserDataProvider } from "../contexts/UserDataContext.tsx"

// Criando componente para renderização da aplicação principal
export function MainPage() {

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