// Importando configurações da API
import { apiConfig } from "./api.config.ts"

// Criando função para requisitar UserData da API
export async function getUserData(){

  // Definindo URL
  const url = `${apiConfig.baseURL}/userData`

  // Bloco Try-Catch para prevenção de erros
  try {

    // Recebendo objeto da resposta de requisição
    const response = await fetch(url)

    // Recebendo conversão da resposta para JSON
    const userData = await response.json()

    // Retornando JSON data
    return userData
    
    // Erro ao requisitar dados
  } catch (error) {
    console.log(error)
    alert("Erro ao acessar banco de dados!")
  }
}