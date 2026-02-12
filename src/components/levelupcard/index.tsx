// Importando contexto do User
import { useContext } from 'react';
import { UserDataContext } from '../../contexts/UserDataContext';

// Importando Ícones SVG
import xIcon from "../../assets/x.jpg"
import cancelIcon from "../../assets/cancel.svg"

// Importando CSS
import "./styles.css"

// Criando componente de LevelUpCard
export function LevelUpCard() {

  // Recebendo contexto do User
  const { level, closeLevelUpCard } = useContext(UserDataContext);

  // Retornando estrutura do contexto
  return (
    <div className="overlay">
      <div className="container">
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" className="closeButton" onClick={closeLevelUpCard}>
          <img src={ cancelIcon }/>
        </button>
        <footer className="footer">
          <button type="button" className="xButton">
            Compartilhar no
            <img src={ xIcon }/>
          </button>
        </footer>
      </div>
    </div>
  );
}