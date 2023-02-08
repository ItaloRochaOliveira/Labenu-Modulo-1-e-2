import React, { useState } from "react";
import Header from "../../Componente/Header/Header";
import {turmas} from "../../assets/arrayTurmas"

export default function Home({
    turma,
    trocaNome,
}) {
    console.log(turmas)
    const [arrayTurmas, setArrayTurmas] = useState(turmas)
    return(
        <>
            <Header turma={turma} />
            <h1>Revisão React</h1>
            <button onClick={trocaNome}>trocar nome do titulo</button>

            {arrayTurmas.map((turma) => {
                console.log(turma)
                return <p key={turma.turma}>{turma.turma}</p>

            })}
        </>
    )
}