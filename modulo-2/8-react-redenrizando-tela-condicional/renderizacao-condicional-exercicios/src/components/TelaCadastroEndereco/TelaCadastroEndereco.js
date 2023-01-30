import React, {useState} from "react"
import {FormContainer, Form, StyledLabel, Input, SendButton, BackToLoginButton} from "./style"

export default function TelaCadastroEndereco({
    mudarTela,
}) {
    const [endereco, setEndereco] = useState("")
    const onChangeEndereco = (e) => {
        setEndereco(e.target.value)
    }

    return(
        <FormContainer>
            <h2>Cadastrar Endereço</h2>
            <Form>
                <StyledLabel>
                    Endereço:
                    <Input value={endereco} onChage={onChangeEndereco}/>
                </StyledLabel>
                <StyledLabel>
                    Número da residência:
                    <Input />
                </StyledLabel>
                <StyledLabel>
                    Complemento:
                    <Input />
                </StyledLabel>
                <StyledLabel>
                    Número do telefone:
                    <Input />
                </StyledLabel>
                <SendButton onClick={() => {mudarTela(4)}}> Cadastrar </SendButton>
                <BackToLoginButton onClick={() => {mudarTela(2)}}>Voltar </BackToLoginButton>
            </Form>
        </FormContainer>
    )
}