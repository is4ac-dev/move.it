// Importando Contextos e Estados
import { useContext, useState } from "react"
import { UserDataContext } from "../../contexts/UserDataContext";

// Importando tipagem do FormEvent
import { type FormEvent } from "react";

// Importando CSS e Logo
import "./styles.css"
import logoIcon from "../../assets/logo.svg"

// Criando componente de LoginPage
export function LoginPage(){

  // Criando estado do nome do usuário
  const [name, setName] = useState("")

  // Recebendo contexto do UserData
  const { loginUser } = useContext(UserDataContext)

  // Criando função para registrar User
  function registerUser(event: FormEvent){

    // Previnindo carregamentos automáticos
    event.preventDefault()
    
    // Verificando se o campo foi preenchido
    if(name.trim() !== ""){

      // Registrando UserName no localStorage
      localStorage.setItem("moveit:userName", name)

      // Logando usuário
      loginUser()
    }
  }

  // Retornando componente
  return (
    <div className="overlay">
      <div className="container">
        <strong><img src={logoIcon}/></strong>
        <p>Insira seu nome para realizar o cadastro</p>
        <form onSubmit={ registerUser }>
          <input type="text" className="input-name" placeholder="Seu nome" value={ name } onChange={ (e) => setName(e.target.value) } maxLength={24} required/>
          <footer className="footer">
            <button type="submit" className="submit-button">Enviar cadastro</button>
          </footer>
        </form>
      </div>
    </div>
  );
}