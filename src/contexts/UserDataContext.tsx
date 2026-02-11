import { createContext, useEffect, useState, useRef } from "react"
import type { ReactNode } from "react"

import { getUserData } from "../services/getUserData"
import { updateUserData } from "../services/updateUserData"

import type { UserData as UserDataProps } from "../services/updateUserData" 

export interface UserDataContextData extends UserDataProps {
  updateLevel: (value: number) => Promise<void>,
  addXp: (amount: number) => Promise<void>,
  completeNewChallenge: () => Promise<void>,
}

export const UserDataContext = createContext<UserDataContextData>({} as UserDataContextData)

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState(1)
  const [xpCount, setXpCount] = useState(0)
  const [completeChallenges, setCompleteChallenges] = useState(0)

  const isLoaded = useRef(false)

  useEffect(() => {
    async function load() {
      const data = await getUserData()
      if (data) {
        setLevel(data.level)
        setXpCount(data.xpCount)
        setCompleteChallenges(data.completeChallenges)
        isLoaded.current = true
      }
    }
    load()
  }, [])

  useEffect(() => {
    if (isLoaded.current) {
      updateUserData({ level, xpCount, completeChallenges })
    }
  }, [level, xpCount, completeChallenges])

  const updateLevel = async (v: number) => setLevel(v)
  const addXp = async (v: number) => setXpCount(p => p + v)
  const completeNewChallenge = async () => setCompleteChallenges(p => p + 1)

  return (
    <UserDataContext.Provider value={{
      level, xpCount, completeChallenges,
      updateLevel, addXp, completeNewChallenge
    }}>
      {children}
    </UserDataContext.Provider>
  )
}