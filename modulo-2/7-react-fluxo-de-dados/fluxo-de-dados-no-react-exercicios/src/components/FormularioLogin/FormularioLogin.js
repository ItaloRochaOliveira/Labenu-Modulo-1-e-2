import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = ({
  login,

  userName,
  setUserName,

  perfilPicture,
  setPerfilPicture,
}) => {
  
  
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={perfilPicture} onChange={(e) => {setPerfilPicture(e.target.value)}}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
