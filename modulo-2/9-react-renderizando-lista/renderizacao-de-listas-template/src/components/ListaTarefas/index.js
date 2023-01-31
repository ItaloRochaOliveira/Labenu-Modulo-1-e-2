import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState([
    "aula na Conway",
    "estudar React",
    "fazer almoço"
  ])


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const renderizarNaTela = () => {
    return lista.map((item, indice) => {
    return(
      <Tarefa key={indice}>
        <p>{item}</p>
        <RemoveButton onClick={() => {removeTarefa(indice)}}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    )
  })}

  const adicionaTarefa = (tarefa) => {
    const itens = [...lista, tarefa]

    // const novoTarefa = tarefa
    // const itens = [...lista, novoTarefa]

    setLista(itens);
    setNovaTarefa("");
  };

  const removeTarefa = (name) => {
    console.log("name:", name)
    const listaFiltered = lista.filter((item, indice)=>{
      console.log(item)
      return indice !== name
    })
    setLista(listaFiltered)
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={() => {adicionaTarefa(novaTarefa)}}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {renderizarNaTela()}
          
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
