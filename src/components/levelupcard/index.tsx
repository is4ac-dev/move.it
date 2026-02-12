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
  const { level, closeLevelUpCard, isLevelUpCardOpen } = useContext(UserDataContext);

  // Se o estado do contexto for de não exibir, impedindo renderização
  if(!isLevelUpCardOpen) return null

  // Função para compartilhar progresso no X
  function shareToX() {

    // Utilizando essa função que codifica os dados da string para um formato que o navegador consiga ler
    const shareText = encodeURIComponent(
      `Acabei de subir para o nível ${level} no Move.it!`
    );
    
    // Recebendo URL de compartilhamento do X
    const xUrl = `https://x.com/intent/tweet?text=${shareText}`;
    
    // Abrindo uma nova aba de compartilhamento no navegador
    window.open(xUrl, '_blank');
  }

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
          <button type="button" className="xButton" onClick={shareToX}>
            Compartilhar no
            <img src={ xIcon }/>
          </button>
        </footer>
      </div>
    </div>
  );
}