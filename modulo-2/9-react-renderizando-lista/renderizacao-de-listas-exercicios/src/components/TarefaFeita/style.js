import styled from "styled-components";


export const ItensFeitos = styled.li`
  color: gray;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border-radius: 10px;
  padding: 6px 8px;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightblue;
  }
`

export const TituloNoCentro = styled.h3`
  text-align: center;
  margin-top: 1rem;
`