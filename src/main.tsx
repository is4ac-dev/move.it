// Configuração padrão do Vite
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'

// Importando CSS Global
import "./styles/global.css"

// Importando contexto do UserData
import { UserDataProvider } from "./contexts/UserDataContext.tsx"

// Criação da estrutura HTML
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserDataProvider>
      <App/>
    </UserDataProvider>
  </StrictMode>,
)
