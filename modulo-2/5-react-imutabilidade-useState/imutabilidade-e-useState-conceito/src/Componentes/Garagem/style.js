import styled from "styled-components"

export const Button = styled.button`
    {
    background-color: orange;
    border: none;
    padding: 10px
    }
    :hover{
        cursor: pointer;
        background:blue;
    }
`

export const GaragemContainer = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
   
`

export const Estacionamento = styled.section`
    display: grid;
    grid-template-columns : repeat(2, 1fr);
    
`