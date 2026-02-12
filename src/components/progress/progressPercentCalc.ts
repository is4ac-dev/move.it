import { useContext } from "react";
import { UserDataContext } from "../../contexts/UserDataContext";

export function useCalcPercent(){

  const { xpCount, nextLevelXp, prevLevelXp } = useContext(UserDataContext)

  const percent = Math.trunc(((xpCount - prevLevelXp) * 100) / (nextLevelXp - prevLevelXp))

  return percent.toString()
}