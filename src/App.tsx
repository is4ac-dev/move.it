// Importando Componentes de Renderização
import { MainPage } from "./components/indexMainPage.tsx"
import { LoginPage } from "./components/login/index.tsx"

// Importando contexto do User
import { useContext } from "react"
import { UserDataContext } from "./contexts/UserDataContext.tsx"

// Criando componente para renderização da aplicação
export function App() {

  // Recebendo contexto do User
  const { isLoggedIn } = useContext(UserDataContext)

  // Retornando estrutura HTML
  return (
    <>
      { isLoggedIn ? <MainPage/> : <LoginPage/> }
    </>
  )
}