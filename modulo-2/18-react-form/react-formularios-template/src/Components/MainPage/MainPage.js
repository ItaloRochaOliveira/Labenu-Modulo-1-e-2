import React from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  //antes

  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")

   // const onChangeNome = (event) => {
  //   setForm({...form, nome: event.target.value})
  // }

  // const onChangeIdade = (event) => {
  //   setForm({...form, idade: event.target.value})
  // }

  // const onChangeEmail = (event) => {
  //   setForm(...form, email: event.target.value)
  // }

  //depois
 const {form, onChangeForm} = useForm({
  nome: "", 
  idade: "", 
  email: "",
  profissao: ""
  })
 
  const handleClick = (event) => {
    event.preventDefault()

    console.log(form)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          type="text"
          name='nome'
          value={form.nome}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          id="idade"
          type="number"
          name='idade'
          value={form.idade}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          id="email"
          // type="email"
          name='email'
          value={form.email}
          onChange={onChangeForm}
          pattern="\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b"
          title="o email precisa seguir esse formato: nome@email.com"
          required
        />

        <label htmlFor='profissao'>
          porfissão: 
          <Input 
            id='profissao'
            type="text"
            name='profissao'
            value={form.profissao}
            onChange={onChangeForm}
            required
          />
        </label>
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
