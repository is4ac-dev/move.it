import { createContext, useState } from "react"
import type { ReactNode } from "react"

export interface PomoContextData {
  isWorking: boolean,
  setIsWorking: (value: boolean) => void,
  isFinished: boolean,
  setIsFinished: (value: boolean) => void,
}

export const PomoContext = createContext<PomoContextData>({} as PomoContextData)

export function PomoProvider({ children }: { children: ReactNode }) {
  const [isWorking, setIsWorking] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  return (
    <PomoContext.Provider value={{ isWorking, setIsWorking, isFinished, setIsFinished }}>
      {children}
    </PomoContext.Provider>
  )
}