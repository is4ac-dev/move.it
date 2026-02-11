import { apiConfig } from "./api.config.ts"

export interface UserData {
  level: number,
  xpCount: number,
  completeChallenges: number
}

export async function updateUserData(data: Partial<UserData>){

  const url = `${apiConfig.baseURL}/userData`

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if(!response.ok){
      throw new Error("Falha na atualização dos dados do usuário!")
    }

    const userData = await response.json()

    return userData
    
  } catch (error) {
    console.log(error)
    alert("Erro ao atualizar banco de dados!")
  }

}