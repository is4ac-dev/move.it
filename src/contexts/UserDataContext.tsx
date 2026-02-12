import { createContext, useEffect, useState, useRef } from "react"
import type { ReactNode } from "react"

import { getUserData } from "../services/getUserData"
import { updateUserData } from "../services/updateUserData"

import type { UserData as UserDataProps } from "../services/updateUserData" 

export interface UserDataContextData extends UserDataProps {
  updateLevel: () => Promise<void>,
  addXp: () => Promise<void>,
  updateNextLevelXp: () => Promise<void>,
  updatePrevLevelXp: () => Promise<void>,
  completeNewChallenge: () => Promise<void>,
}

export const UserDataContext = createContext<UserDataContextData>({} as UserDataContextData)

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState(1)
  const [xpCount, setXpCount] = useState(0)
  const [nextLevelXp, setNextLevelXp] = useState(600)
  const [prevLevelXp, setPrevLevelXp] = useState(0)
  const [completeChallenges, setCompleteChallenges] = useState(0)

  const isLoaded = useRef(false)

  useEffect(() => {
    async function load() {
      const data = await getUserData()
      if (data) {
        setLevel(data.level)
        setXpCount(data.xpCount)
        setNextLevelXp(data.nextLevelXp)
        setPrevLevelXp(data.prevLevelXp)
        setCompleteChallenges(data.completeChallenges)
        isLoaded.current = true
      }
    }
    load()
  }, [])

  useEffect(() => {
    if(isLoaded.current) {
      updateUserData({ level, xpCount, nextLevelXp, prevLevelXp, completeChallenges })
    }
  }, [level, xpCount, nextLevelXp, prevLevelXp, completeChallenges])

  const handleLevelUp = () => {

    setPrevLevelXp(nextLevelXp)

    setLevel(prevLevel => prevLevel + 1)

    setNextLevelXp(prevNextLevel => prevNextLevel * 2)
}

useEffect(() => {
  if (isLoaded.current && xpCount >= nextLevelXp) {
    handleLevelUp()
  }
}, [xpCount, nextLevelXp])

  const updateLevel = async () => setLevel(prevLevel => prevLevel + 1)
  const updateNextLevelXp = async () => setNextLevelXp(prevXp => prevXp * 2)
  const updatePrevLevelXp = async () => setPrevLevelXp(nextLevelXp)
  const addXp = async () => setXpCount(prevXpCount => prevXpCount + 400)
  const completeNewChallenge = async () => setCompleteChallenges(prevChallenge => prevChallenge + 1)

  return (
    <UserDataContext.Provider value={{
      level, xpCount, nextLevelXp, prevLevelXp, completeChallenges,
      updateLevel, addXp, updateNextLevelXp, updatePrevLevelXp, completeNewChallenge
    }}>
      {children}
    </UserDataContext.Provider>
  )
}