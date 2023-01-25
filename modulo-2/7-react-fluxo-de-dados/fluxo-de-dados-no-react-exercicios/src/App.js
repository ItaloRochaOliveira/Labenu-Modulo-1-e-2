import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
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
  const [pageFlow, setPageFlow] = useState(1);

  //FormLogin
  const [userName, setUserName] = useState("")
  const [perfilPicture, setPerfilPicture] = useState("")
  const [userInfo, setUserInfo] = useState({})

  const addUser = (objUser) => {
    setUserInfo(objUser)
  }
  const login = () => {
    addUser({
      userName: userName,
      perfilPicture: perfilPicture,
    })
    setPageFlow(2);
    console.log(userInfo)
  };

  //FormPost
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [post, setPost] = useState({
    title: "",
    image: "",
    description: "",
  })

  const changePost = () => {
    setPost({
      title: title,
      image: image,
      description: description,
    })
  }

  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
          userInfo={userInfo}
          />
          {pageFlow === 1 ? (
            <FormularioLogin 
            login={login}
            setPageFlow={setPageFlow}

            userName={userName}
            setUserName={setUserName}

            perfilPicture={perfilPicture}
            setPerfilPicture={setPerfilPicture}
            />
          ) : (
            <FormularioPostagem
            changePost={changePost}

            title={title}
            setTitle={setTitle}

            image={image}
            setImage={setImage}

            description={description}
            setDescription={setDescription}
             />
          )}
        </aside>
        <TelaDaPostagem 
        post={post}
        />
      </Container>
    </>
  );
}

export default App;
