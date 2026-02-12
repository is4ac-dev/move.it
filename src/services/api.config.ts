// Definindo interface de tipagem da ApiConfig
interface ApiConfig {
  baseURL: string
}

// Definindo configurações da API
export const apiConfig: ApiConfig = {
  baseURL: "http://localhost:3000"
}