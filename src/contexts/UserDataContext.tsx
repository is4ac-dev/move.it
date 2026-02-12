// Importando funções e Hooks para gestão de estado e contexto
import { createContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

// Importando serviços da API
import { getUserData } from "../services/getUserData"
import { updateUserData } from "../services/updateUserData"

// Importando interface de tipagem do conteúdo da API
import type { UserData as UserDataProps } from "../services/updateUserData" 

// Definindo interface herdando tipagem da API e acrescentando métodos para manipulação do contexto
export interface UserDataContextData extends UserDataProps {

  // SINCRONIZADOS COM API
  // Método para incrementar xp do User
  addXp: () => Promise<void>,

  // Método para incrementar o contador de challenges
  completeNewChallenge: () => Promise<void>,

  // NÃO NECESSITAM DA API
  isLevelUpCardOpen: boolean,
  closeLevelUpCard: () => void,

}

// Criando contexto do UserData de acordo com a tipagem definida e herdada
export const UserDataContext = createContext<UserDataContextData>({} as UserDataContextData)

// Definindo função para envolver componentes do App.tsx e disponibilizar o contexto em toda a aplicação
// Children: Propriedade que realiza tipagem de todos os componentes envolvidos pelo PomoProvider como um Nó do React
export function UserDataProvider({ children }: { children: ReactNode }) {

  //Definindo estados iniciais e suas funções de alteração

  // API: 
  const [level, setLevel] = useState(1)
  const [xpCount, setXpCount] = useState(0)
  const [nextLevelXp, setNextLevelXp] = useState(600)
  const [prevLevelXp, setPrevLevelXp] = useState(0)
  const [completeChallenges, setCompleteChallenges] = useState(0)

  // LOCAL:
  const [isLevelUpCardOpen, setIsLevelUpCardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Criando efeito colateral para cada loading da aplicação
  useEffect(() => {

    // Criando função para carregar dados iniciais
    async function load() {

      // Requisitando dados da API
      const data = await getUserData()

      // Validando os dados
      if (data) {

        // Vinculando valores do contexto com valores da API
        setLevel(data.level)
        setXpCount(data.xpCount)
        setNextLevelXp(data.nextLevelXp)
        setPrevLevelXp(data.prevLevelXp)
        setCompleteChallenges(data.completeChallenges)

        // Aplica delay para aguardar o carregamneto dos estados antes de envia-los para o contexto 
        setTimeout(() => {

          // Carregamento concluído
          setIsLoaded(true)
        }, 100)
      }
    }

    // Chamando função de carregamento
    load()
  }, [])

  // Criando efeito colateral para atualizar dados da API
  // Aplica no carregamento da página ou em mudanças de estado do xp ou do level
  useEffect(() => {

    // Validando se carregamento inicial foi concluído
    if(isLoaded) {

      // Atualizando dados da API
      updateUserData({ level, xpCount, nextLevelXp, prevLevelXp, completeChallenges })
    }
  }, [xpCount, level, isLoaded])

  // Criando função para LevelUp
  const handleLevelUp = () => {

    // Incrementando level do User
    setLevel(prevLevel => prevLevel + 1)

    // Definindo o start range da barra de progresso
    setPrevLevelXp(nextLevelXp)

    // Definindo o end range da barra de progresso
    setNextLevelXp(prevNextLevel => prevNextLevel * 2)

    // Permite exibição do card de LevelUp
    setIsLevelUpCardOpen(true)
}

// Criando efeito colateral para aplicar LevelUp
// Aplica em mudanças de estado do Xp e do Xp necessário para LevelUp
useEffect(() => {

  // Validando se carregamento inicial foi concluído, se User atingiu o xp necessário para LevelUp e se o LevelUpCard está fechado
  if (isLoaded && xpCount >= nextLevelXp && !isLevelUpCardOpen) {

    // Aplicando LevelUp no User
    handleLevelUp()
  }
}, [xpCount, nextLevelXp, isLevelUpCardOpen, isLoaded])

  // Definindo funções para mudança de estado
  const addXp = async () => setXpCount(prevXpCount => prevXpCount + 400)
  const completeNewChallenge = async () => setCompleteChallenges(prevChallenge => prevChallenge + 1)
  const closeLevelUpCard = () => setIsLevelUpCardOpen(false)

  // Retornando componente de contexto
  return (
    <UserDataContext.Provider value={{
      level, xpCount, nextLevelXp, prevLevelXp, completeChallenges,
      addXp, completeNewChallenge, isLevelUpCardOpen, closeLevelUpCard
    }}>
      {children}
    </UserDataContext.Provider>
  )
}