import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = ({
  urlImage,
  setUrlImage,

  descriptionImage,
  setDescriptionImage,

  title,
  setTitle,
}) => {


  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem: 
          <Input id="foto" value={urlImage} onChange={(e)=> {setUrlImage(e.target.value)}}/>
        </StyledLabel>
        <StyledLabel htmlFor="title">
          Titulo:
          <Input id="title" value={title} setTitle={setTitle} onChange={(e) => {setTitle(e.target.value)}}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição: 
          <Input id="descricao" value={descriptionImage} onChange={(e)=>{setDescriptionImage(e.target.value)}}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro