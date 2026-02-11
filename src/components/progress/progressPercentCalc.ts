import { useContext } from "react";
import { UserDataContext } from "../../contexts/UserDataContext";

export function calcPercent(){

  const { xpCount, nextLevelXp } = useContext(UserDataContext)

  const percent = (xpCount / nextLevelXp) * 100

  return percent.toString()
}