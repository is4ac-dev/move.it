import { createContext } from "react"

interface PomoContextData {
  isWorking: boolean,
  setIsWorking: (value: boolean) => void,
  isFinished: boolean,
  setIsFinished: (value: boolean) => void,
}

export const PomoContext = createContext<PomoContextData>({} as PomoContextData)