import React from 'react'
import { MainContainer, Form, Input } from './styles'
import {useForm} from "../../hooks/useForm"

function MainPage() {

  const {form, onChangeForm} = useForm({
    curso: "",
    modulos: "",
    tecnologias: "",
    responsavel: ""
  })

  const submitForm = (e) => {
    e.preventDefault()

    console.log(form)
  }
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={submitForm}>
        <label htmlFor="curso">Nome do Curso:</label>
        <Input 
          id="curso"
          // type="text"
          // minLength="5"
          pattern='[\w]{5-9}'
          title='o nome tem que ter no minimo: 5 letras'
          name="curso"
          value={form.curso}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          // type={"number"}
          // min="2"
          pattern="0*[3-9]|[1-9][0-9]"
          title='O minimo de modulos é de: 3'
          name="modulos"
          value={form.modulos}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          pattern="[3-9]{1}"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChangeForm}
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          pattern="^[\p{L}\s]{5,}$"
          title='é necessario mais de 5 letras'
          name="responsavel"
          value={form.responsavel}
          onChange={onChangeForm}
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
