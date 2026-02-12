// Importando contexto do User
import { useContext } from "react";
import { UserDataContext } from "../../contexts/UserDataContext";

// Criando Hook para Calcular Percentual de ocupação da Barra de Progresso
export function UseCalcPercent(){

  // Recebendo contexto do User
  const { xpCount, nextLevelXp, prevLevelXp } = useContext(UserDataContext)

  // Calculando percentual de ocupação
  const percent = Math.trunc(((xpCount - prevLevelXp) * 100) / (nextLevelXp - prevLevelXp))

  // Retornando percentual como string
  return percent.toString()
}