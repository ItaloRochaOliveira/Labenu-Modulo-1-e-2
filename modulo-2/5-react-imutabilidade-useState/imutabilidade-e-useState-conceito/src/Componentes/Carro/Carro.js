import React from "react";
import { ListaDeCarro, TituloCarro, OrganizarBlocos, BotaoAdicionar, EspacoEntreLi } from "./style";

export function Carro({
  modelo,
  cor,
  ano, 
  flex,
  imgCarro,
  setCarro,
  novoCarro
}) {
  console.log("modelo", modelo)
    return (
      <div>
        <TituloCarro>{modelo}</TituloCarro>
        <ListaDeCarro>
          <li><img src={imgCarro}></img></li>
          <OrganizarBlocos>
            <EspacoEntreLi>
            <li>Cor: {cor}</li>
            <li>Ano: {ano}</li>
            </EspacoEntreLi>
            <EspacoEntreLi>
            <li>Flex: {flex}</li>
            <BotaoAdicionar onClick={()=> setCarro(novoCarro)}> mudar</BotaoAdicionar>
            </EspacoEntreLi>
          </OrganizarBlocos>
        </ListaDeCarro>
      </div>
    );
  }
  
