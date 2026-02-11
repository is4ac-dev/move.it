import { apiConfig } from "./api.config.ts"

export async function getUserData(){

  const url = `${apiConfig.baseURL}/userData`

  try {
    const response = await fetch(url)

    const userData = await response.json()

    return userData
    
  } catch (error) {
    console.log(error)
    alert("Erro ao acessar banco de dados!")
  }

}