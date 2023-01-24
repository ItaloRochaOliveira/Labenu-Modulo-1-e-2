import React from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = ({
  birthday,
  onChangeBirthday,

  telephone,
  onChangeTelephone,

  selfDeclaration,
  onChangeSelfDeclaration,

  sendDataForm2,

  setFormFlow
}) => {
  return (
   <>
   <button onClick={()=>setFormFlow(1)}>voltar</button>
    <Form>
      <label>
        Data de nascimento:
        <Input type="date" value={birthday} onChange={onChangeBirthday}/>
        {birthday}
      </label>

      <label>
        Telefone:
        <Input value={telephone} onChange={onChangeTelephone}/>
        {telephone}
      </label>

      <label>
        Você se autodeclara:
        <select value={selfDeclaration} onChange={onChangeSelfDeclaration}>
        <option>Negro</option>
        <option>Branca</option>
        <option>Parda</option>
        <option>Amarelho</option>
        <option>Indigena</option>
        <option>prefiro não dizer</option>
        </select>
        {selfDeclaration}
      </label>

      <button onClick={sendDataForm2}>Enviar dados</button>
      </Form>
   </>
  )
}

export default ConfirmationForm