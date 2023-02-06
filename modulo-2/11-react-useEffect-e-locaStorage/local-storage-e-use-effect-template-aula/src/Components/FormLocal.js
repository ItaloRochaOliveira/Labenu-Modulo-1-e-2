import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
    const [nome, setNome] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);
    const [novaLista, setNovaLista] = useState([])

    const [count, setCount] = useState(0)

    const saveData = (nameObj, obj) => {
        localStorage.setItem(nameObj, obj)
    }

    const showData = () => {
        const nomeRecebido = localStorage.getItem("nome")
        alert(nomeRecebido)
        return nomeRecebido
    }

    const atualizaLista = () => {
        const novaLista = [...listaTarefa, tarefa]
        // setListaTarefa(novaLista)
    // }

    // const armazenarTarefas = () => {
        const listaString = JSON.stringify(novaLista)
        console.log(listaString)
        localStorage.setItem("lista", listaString)
        setNovaLista(novaLista)
    }

    const acessaLista = () => {
        const listaLocalStorage = localStorage.getItem("lista")
        const listaArray = JSON.parse(listaLocalStorage)
        if(listaArray){
            setListaTarefa(listaArray)
        }
    }

    useEffect(() => {
        acessaLista()
    },
    [novaLista]
    )

    // useEffect(()=>{
    //     setCount(JSON.parse(localStorage.getItem("contador")))
    // },
    // [])
    
    useEffect(() => {
        localStorage.setItem("number", count.toString())
        document.title = count
    },
    [count])

    useEffect(() => {
        localStorage.setItem("number", (count+1).toString())
        document.title = count
    },
    [count])

    return (
        <Form>
            <h3>Prática 1</h3>
            <label htmlFor="nome">
                nome:
                <input name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </label>
            <div>
                <button onClick={saveData("nome", nome)}>Guardar Dados</button>
                <button onClick={showData}>Acessar Dados</button>
                {nome}
            </div>
            <br />
            <h3>Prática 2</h3>
            <label htmlFor="tarefa">
                tarefa:
                <input name="tarefa" id="tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}/>
            </label>
            <button type="button" onClick={atualizaLista}>adicionar Tarefa</button>
            <ul>
                {listaTarefa.map((task) => {
                    return <li key={task}>{task}</li>;
                })}
            </ul>
            <div>
                {/* <button onClick={armazenarTarefas}>Guardar tarefa</button> */}
                <button onClick={acessaLista}>Acessar tarefa</button>
            </div>
            <div>
                <button onClick={() => setCount(count-1) }>-</button>
                {count}
                <button onClick={() => setCount(count+1)}>+</button>
            </div>
        </Form>
    );
}