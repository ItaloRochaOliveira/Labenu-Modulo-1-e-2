import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
  //NameForm
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [confirmEmail, setConfirmEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeConfirmEmail = (e) => {
  setConfirmEmail(e.target.value)
}

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  

  if(
    age >= 18 &&
    (name.length > 10 || name.length < 30) &&
    email.includes("@") &&
    email.includes(".com") &&
    email === confirmEmail
    ){
    setFormFlow(2)
  } else if (age == "" && name === "" && email === "" && confirmEmail === ""){
    alert("todos os itens são obrigatórios")
  }else {
    alert("é preciso preencher todos os itens")
  }

  if(email.includes("@") && email.includes(".com")){
    console.log(email)
  }
}

  //ConfirmForm

  const [birthday, setBirthday] = useState("")
  const [telephone, setTelephone] = useState("")
  const [selfDeclaration, setSelfDeclaration] = useState("")

  const onChangeBirthday = (e) => {
    setBirthday(e.target.value)
  }
  
  const onChangeTelephone = (e) => {
    setTelephone(e.target.value)
  }

  const onChangeSelfDeclaration = (e) => {
    setSelfDeclaration(e.target.value)
  }

  const sendDataForm2 = () => {
    if(birthday === "" || telephone === ""){
      alert("é preciso preencher todos os valores")
    } else {
      alert("Cadastro feito")

      setTelephone("")
      setBirthday("")
    }
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm 
      name={name} 
      onChangeName={onChangeName}
      
      age={age}
      onChangeAge={onChangeAge}

      email={email}
      onChangeEmail={onChangeEmail}

      confirmEmail={confirmEmail}
      onChangeConfirmEmail={onChangeConfirmEmail}

      sendData={sendData}
      // insira aqui suas props
      /> : <ConfirmationForm 
      birthday={birthday}
      onChangeBirthday={onChangeBirthday}

      telephone={telephone}
      onChangeTelephone={onChangeTelephone}

      selfDeclaration={selfDeclaration}
      onChangeSelfDeclaration={onChangeSelfDeclaration}

      sendDataForm2 = {sendDataForm2}

      setFormFlow={setFormFlow}
      />}
    </MainContainer>
  )
}

export default MainPage