import React from "react";
import { useState } from "react";
import { Carro } from "../Carro/Carro";
import {Button, GaragemContainer, Estacionamento} from "./style"

export function Garagem({nome,
  mudaNome,
  imgCarro,
  fiesta}) {
  const [carro, setCarro] = useState({
    modelo: "chevrolé",
    cor: "vermelho",
    ano: 2022,
    flex: "true",
    imgCarro: imgCarro
  })
  const [carro2, setCarro2] = useState({
    modelo: "fusca",
    cor: "branco",
    ano: 2010,
    flex: "false",
    imgCarro: fiesta
  })

  const novoCarro = {
    modelo: "Fiesta",
    cor: "branco",
    ano: 2002,
    flex: "false",
    imgCarro: fiesta
  }

  const novoCarro2 = {
    modelo: "chevrolé",
    cor: "vermelho",
    ano: 2022,
    flex: "true",
    imgCarro: imgCarro
  }

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Button onClick={mudaNome}>Mudar nome da garagem</Button>

      <Estacionamento>
      <Carro modelo={carro.modelo} cor={carro.cor} ano={carro.ano} flex={carro.flex} imgCarro = {carro.imgCarro} setCarro= {setCarro} novoCarro= {novoCarro} />
      <Carro modelo={carro2.modelo} cor={carro2.cor} ano={carro2.ano} flex={carro2.flex} imgCarro = {carro2.imgCarro} setCarro= {setCarro2} novoCarro= {novoCarro2} />
      </Estacionamento>
    </GaragemContainer>
  );
}
