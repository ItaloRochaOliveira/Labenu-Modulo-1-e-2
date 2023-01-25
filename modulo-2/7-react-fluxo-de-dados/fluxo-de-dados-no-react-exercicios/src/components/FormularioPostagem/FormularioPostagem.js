import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({
  changePost,

  title,
  setTitle,

  image,
  setImage,

  description,
  setDescription,

}) => {
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={image} onChange={(e) => {setImage(e.target.value)}}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
        </StyledLabel>
        <SendButton onClick={changePost}>Postar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
