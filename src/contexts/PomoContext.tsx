// Importando funções e Hooks para gestão de estado e contexto
import { createContext, useState } from "react"
import type { ReactNode } from "react"

// Definindo Tipagem do contexto do Pomodoro
export interface PomoContextData {
  isWorking: boolean,
  setIsWorking: (value: boolean) => void,
  isFinished: boolean,
  setIsFinished: (value: boolean) => void,
}

// Criando contexto do Pomodoro de acordo com a tipagem da interface criada
export const PomoContext = createContext<PomoContextData>({} as PomoContextData)

// Criando função para envolver componentes do App.tsx e disponibilizar o contexto em toda a aplicação
// Children: Propriedade que realiza tipagem de todos os componentes envolvidos pelo PomoProvider como um Nó do React
export function PomoProvider({ children }: { children: ReactNode }) {

  // Definindo estados iniciais e suas funções de alteração 
  const [isWorking, setIsWorking] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  // Retornando componente de contexto
  return (
    <PomoContext.Provider value={{ isWorking, setIsWorking, isFinished, setIsFinished }}>
      {children}
    </PomoContext.Provider>
  )
}