import React from "react";
import { StyledHeader } from "./styled";

export default function Header (props){
    return(
        <StyledHeader>
        {props.turma} love React
        
        </StyledHeader>
    )
}