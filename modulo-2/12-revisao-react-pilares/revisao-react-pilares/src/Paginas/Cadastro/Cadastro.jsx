import React, { useState } from "react";
import Header from "../../Componente/Header/Header";
import { turmas } from "../../assets/arrayTurmas";

export default function Cadastro({
    turma,
    setUsuario,
}) {
    const arrayTurmas = turmas

    const [nome, setNome] = useState("")
    const [turmaSelect, setTurmaSelect] = useState("")

    const cadastrarUsuario = () => {
        const novoUsuario = {
            nome: nome,
            turma: turmaSelect
        }
        setUsuario(novoUsuario)
    }
    return(
        <>
            <Header turma={turma} />
            <h1>Inputs controlados</h1>
            <input value={nome} onChange={(e) => setNome(e.target.value)}/>
            <select value={turmaSelect} onChange={(e) => setTurmaSelect(e.target.value)}>
                {arrayTurmas.map((turma) => {
                    return <option key={turma.turma}>{turma.turma}</option>
                })}
            </select>
            <button onClick={cadastrarUsuario}>mandar seu cadastro</button>
        </>
    )
}