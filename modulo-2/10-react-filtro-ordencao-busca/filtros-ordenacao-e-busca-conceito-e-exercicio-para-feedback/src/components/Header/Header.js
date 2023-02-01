import React from "react";
import { Container } from "./styles";

const Header = ({
  buscaId,
  setBuscaId,

  buscaNome,
  setBuscaNome,

  ordenar,
  setOrdenar,

  ordenarPorType,
  setOrdenarPorType,
}) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input 
      type="number" 
      placeholder="Buscar por id" 
      value={buscaId}
      onChange={(e)=>setBuscaId(e.target.value)}
      />
      <input 
      type="text" 
      placeholder="Buscar por nome" 
      value={buscaNome}
      onChange={(e) => setBuscaNome(e.target.value)}
      />
      <select value={ordenar} onChange={(e)=> setOrdenar(e.target.value)}>
        <option value="Ordenar">Ordenar</option>
        <option value="Crescente">Crescente</option>
        <option value="Decrescente">Decrescente</option>
      </select>
      <select name="tipo" id="tipo" value={ordenarPorType} onChange={(e) => {setOrdenarPorType(e.target.value)}}>
        <option>Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
