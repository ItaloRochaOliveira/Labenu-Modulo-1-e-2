import React from "react";
import { useState } from "react";
import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyle } from "./Componentes/GlobalStyled";
import carro from "./img/carro.png"
import fiesta from "./img/fiesta.jpg"

export default function App() {
  //DESESTRUTURAÇÂO
  const array = ["item1", "item2"]
  const [elemento1, elemento2] = array
  console.log(elemento1)
  console.log(elemento2)

  //useStates

  const [nome, setNome] = useState("Labenu")

  function mudaNome() {
    setNome("Conway")
  }


  return (
    <div className="App">
      <GlobalStyle/>
      <Garagem nome={nome} mudaNome={mudaNome} imgCarro = {carro} fiesta= {fiesta}/>
    </div>
  );
}