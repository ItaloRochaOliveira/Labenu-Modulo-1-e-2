import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm.js";
import { useRequestData } from "../../hook/useRequestData.js";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";


function LoginPage() {
  const navigate = useNavigate();

  const [form, onChangeForm] = useForm({email: "", password: ""})

  const usuario = {
    email: form.email,
    password: form.password
  }

  const retornarData = useRequestData("login", usuario)

  const submitForm = (e) => {
    e.preventDefault()
    
    retornarData()
  }
 
  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={submitForm}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            value={form.value}
            onChange={onChangeForm}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            value={form.value}
            onChange={onChangeForm}
            required
          />
          {form.name}
        </InputContainer>
        <button type="submit">Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
