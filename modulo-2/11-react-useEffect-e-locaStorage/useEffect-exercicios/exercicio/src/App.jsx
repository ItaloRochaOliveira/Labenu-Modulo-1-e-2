import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("")

  useEffect(() =>{
      if(tarefas.length){
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
      }
    },
    [tarefas]
  );

  useEffect(() => {
    const tarefasGuardadas = JSON.parse(localStorage.getItem("tarefas"))
    if(tarefasGuardadas){
      setTarefa(tarefasGuardadas)
    }
    },
    [])
  ;

  const onChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const criaTarefa = (item) => {
    setTarefa([...tarefas, item])
  }

  const selectTarefa = (id) => {
    const mapeiaTarefa =  tarefas.map((tarefa) => {
      if(tarefa.id === id){
        return {...tarefa, completa: !tarefa.completa}
      } else {
        return tarefa
      }
    })
    setTarefa(mapeiaTarefa)
  }
  console.log(tarefas)
  const onChangeFilter = (event) => {
    setFiltro(event)
  }


  const listaFiltrada = tarefas.filter(tarefa => {
    switch (filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return true
    }
  });


  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={() => criaTarefa({
          id: Date.now(),
          texto: inputValue,
          completa: false,
        })}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={(e) => onChangeFilter(e.target.value)}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map(tarefa => {
          return (
            <Tarefa
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          )
        })}
      </TarefaList>
    </div>
  )
}


export default App
