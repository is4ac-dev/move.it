// Importando configurações da API
import { apiConfig } from "./api.config.ts"

// Definindo interface de tipagem dos dados a serem enviados para API
export interface UserData {
  level: number,
  xpCount: number,
  nextLevelXp: number,
  prevLevelXp: number,
  completeChallenges: number,
}

// Criando função para atualizar dados da API
// O Utility Type Partial foi utilzado com o intuito de transformar todas as propriedades de dados em opcionais, possibilitando enviar somente os dados que realmente mudaram
export async function updateUserData(data: Partial<UserData>){

  // Definindo URL da API
  const url = `${apiConfig.baseURL}/userData`

  // Bloco Try-Catch para prevenção de erros
  try {

    // Recebendo objeto de resposta da requisição
    const response = await fetch(url, {

      // Método HTTP PATCH
      method: "PATCH",

      // Específicando tipo de metadados
      headers: {
        "Content-Type": "application/json"
      },

      // Atualizando corpo do JSON com os dados enviados
      body: JSON.stringify(data)
    })

    // Verificando se a requisição falhou
    if(!response.ok){
      throw new Error("Falha na atualização dos dados do usuário!")
    }
    
    // Erro ao enviar dados
  } catch (error) {
    console.log(error)
  }
}