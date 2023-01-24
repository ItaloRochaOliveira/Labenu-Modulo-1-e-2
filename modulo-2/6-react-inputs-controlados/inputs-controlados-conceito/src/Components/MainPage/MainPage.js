import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  const [nome, setNome] = useState("")
  const changeName = (e) => {
    setNome(e.target.value)
  }

  const [age, setAge] = useState("")
  const changeAge = (e) => {
    setAge(e.target.value)
  }

  const [email, setEmail] = useState("")
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState("")
  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const [type, setType] = useState("password")
  const changeType = () => {
    if(type === "password"){
      setType("name")
    } else {
      setType("password")
    }
  }

  const sendData = () => {
    const user = {
      name: nome,
      age: age,
      email: email,
      password: password
    }

    setAge("")
    setEmail("")
    setNome("")
    setPassword("")

    console.log(user)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={changeName}/>
          Seu nome: {nome}
        </label>
        <label>
          Idade:
          <Input value={age} onChange={changeAge}/>
          Sua idade: {age}
        </label>
          
        <label>
          Email:
          <Input value={email} onChange={changeEmail}/>
          {email}
        </label>

        <label>
          Senha:
          <Input type={type} value={password} onChange={changePassword}/>

          {password}

          <button onClick={changeType}>*</button>
        </label>
      <button onClick={sendData}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
