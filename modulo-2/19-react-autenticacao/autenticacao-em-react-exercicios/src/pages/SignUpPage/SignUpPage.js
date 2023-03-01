import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { useRequestData } from "../../hook/useRequestData";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";

function SignUpPage() {
  const navigate = useNavigate();

  const [form, onChangeForm] = useForm({name: "", email: "", password: ""})
  const sign = {
    name: form.name,
    email: form.email,
    password: form.password
  }

  const retornarData = useRequestData("signup", sign)

  const onSubmitSing = (e) => {
    e.preventDefault()
    retornarData()
    
  }

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={onSubmitSing}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            value={form.value}
            onChange={onChangeForm}
            required
          />
        </InputContainer>
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
        </InputContainer>

        <button type="submit">Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;