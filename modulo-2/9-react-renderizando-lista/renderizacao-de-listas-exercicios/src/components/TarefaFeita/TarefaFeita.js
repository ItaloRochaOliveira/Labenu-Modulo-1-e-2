import React from "react";
import { ItensFeitos, TituloNoCentro } from "./style";

export default function TarefaFeita({
    tarefaFeita,
}) {

    if(tarefaFeita <= 0 ){
        return <></>
    } else{
        return(
            <>
            <hr />
            <ul>
              <TituloNoCentro>Tarefas Feitas:</TituloNoCentro>
              {tarefaFeita.map((tarefa, index) => {
                  return (
                    <ItensFeitos key={index}>
                      <hr />
                      <p><s>{tarefa}</s></p>
                    </ItensFeitos>
                  )
                })}
            </ul></>
            
        )
    }
    
}