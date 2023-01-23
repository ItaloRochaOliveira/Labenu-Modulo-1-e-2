import styled from "styled-components";

export const ListaDeCarro = styled.ul`
    display: grid;
    grid-template-rows : repeat(1, 1fr);
    background: gray;
    border-radius: 25px;
    list-style: none;
    padding: 20px;
    margin: 10px;

    img{
        width: 100%;
    }
`

export const TituloCarro = styled.h2`
    text-align: center;
`

export const OrganizarBlocos = styled.div`
    display: flex;
    gap: 50px;
`

export const EspacoEntreLi = styled.div`
    margin: 10px;
`

export const BotaoAdicionar = styled.li`
    background-color: white;
    padding: 5px;
    border-radius: 25px;
    text-align: center;

    :hover{
        cursor: pointer;
    }
`