import { useState } from "react";
import TarefaFeita from "../TarefaFeita/TarefaFeita";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaFeita, SetTarefaFeita] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = (novaTarefa) => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const eventoAdiconarTarefaKeyDown = (e) => {
    console.log(e)
    if(e.key === "Enter"){
      adicionaTarefa(e.target.value)
    }
  }

  const adiconarTarefaFeita = (e) => {
    const tarefas = [...tarefaFeita, e]

    SetTarefaFeita(tarefas)
  }

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    adiconarTarefaFeita(tarefa)
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={(e)=>{eventoAdiconarTarefaKeyDown(e)}}
        />
        <AddTaskButton onClick={() => adicionaTarefa(novaTarefa) } >Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
        
        <TarefaFeita tarefaFeita={tarefaFeita}/>
        
      </ListaContainer>
      <LinhaHorizontal/>
    </ListaTarefasContainer>
  );
}
