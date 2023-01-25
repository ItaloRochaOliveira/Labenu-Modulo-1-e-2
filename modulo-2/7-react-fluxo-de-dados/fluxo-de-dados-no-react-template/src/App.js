import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [urlImage, setUrlImage] = useState("")
  const [descriptionImage, setDescriptionImage] = useState("")
  const [title, setTitle] = useState("")
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro 
          urlImage={urlImage}
          setUrlImage={setUrlImage}

          descriptionImage={descriptionImage}
          setDescriptionImage={setDescriptionImage}

          title={title}
          setTitle={setTitle}
          />
        </aside>
        <TelaDaPostagem
        urlImage={urlImage}
        descriptionImage={descriptionImage}

        title={title}
        />
      </Container>
    </>
  );
}

export default App;
