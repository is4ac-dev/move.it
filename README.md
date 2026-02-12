# ⚡Move.it - Pomodoro Gamificado
 O Move.it é uma plataforma que une a técnica de Pomodoro com exercícios físicos, utilizando elementos de gamificação para manter o usuário produtivo e saudável durante longas jornadas de trabalho ou estudo.

## 🚀 Funcionalidades
- **Ciclos de Foco:** Cronômetro de 25 minutos para gerenciamento de tempo.
- **Sistema de Desafios:** Ao final de cada ciclo, o usuário recebe um desafio físico para realizar.
- **Gamificação Integrada:** Ganho de **XP**, Sistema de **Level Up** e contador de **Desafios Completos**
- **Persistência de Dados:** Integração com API local para salvar o progresso e uso de localStorage para manter a sessão do usuário ativa.

## 🛠️ Tecnologias Utilizadas
O projeto foi construído com as seguintes ferramentas.

- **FRAMEWORK: REACT** 
- **LANGUAGE : TYPESCRIPT**
- **BUILD TOOL : VITE**
- **LOCAL API : JSON-SERVER**

## 📦 Como Executar o Projeto

1. **Clone o Repositório**
```
git clone https://github.com/is4ac-dev/move.it
```
2. **Instale as Dependências do Projeto**
```
npm install
```
3. **Inicie o SERVER (API LOCAL)**
```
npm run server
```
3. **Inicie a Aplicação**
```
npm run dev
```
Acesse http://localhost:5173 no seu navegador.

## 📂 Estrutura de Pastas
- ```src/components```: Componentes reutilizáveis da interface (Timer, Button, Cards).

- ```src/contexts```: Gerenciamento de estado global (Pomodoro e Dados do Usuário).

- ```src/services```: Funções de comunicação com a API (GET/PATCH).

- ```src/styles```: Estilos globais e variáveis de design system.

## 💡 Créditos
Projeto inspirado no [move.it](https://github.com/rocketseat-education/nlw-04-reactjs?tab=readme-ov-file#-projeto) da Rocketseat - nem todas as funcionalidades presentes nesse repositório são exatamente iguais ao do projeto original - o objetivo desse desenvolvimento por minha parte era testar os conhecimentos já conhecidos e a partir deles, tentar replicar a ideia do projeto da maneira mais usual possível.

Projeto desenvolvido por **Isaac Monteiro** 🥁