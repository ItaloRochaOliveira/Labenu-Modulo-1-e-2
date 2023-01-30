import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`


function App() {
  const [condicional, setCondicional] = useState(1)

  const changeCondicional = (value) => {
    setCondicional(value)
  }

  const renderizarTela = () => {
    if(condicional === 1){
      return <TelaLogin changeCondicional={changeCondicional}/>
    } else if(condicional === 2) {
      return <TelaCadastro changeCondicional={changeCondicional}/>
    } else {
      return <TelaUsuarioCadastrado />
    }
  }

  return (
    <MainContainer >
      <GlobalStyled />
      {renderizarTela()}
      {/* {condicional === 1 ? <TelaLogin changeCondicional={changeCondicional}/> : <TelaCadastro changeCondicional={changeCondicional}/>} */}
    </MainContainer>
  );
}

export default App;