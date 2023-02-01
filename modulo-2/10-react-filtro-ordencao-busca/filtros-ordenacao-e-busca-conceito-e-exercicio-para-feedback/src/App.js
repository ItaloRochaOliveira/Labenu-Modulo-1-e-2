import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [buscaId, setBuscaId] = useState("")
  const [buscaNome, setBuscaNome] = useState("")
  const [ordernar, setOrdenar] = useState("")
  const [ordenarPorType, setOrdenarPorType] = useState("")

  return (
    <>
      <GlobalStyle />
      <Header 
      buscaId={buscaId} setBuscaId={setBuscaId}
      buscaNome={buscaNome} setBuscaNome={setBuscaNome}
      ordernar={ordernar} setOrdenar={setOrdenar}
      ordenarPorType={ordenarPorType} setOrdenarPorType={setOrdenarPorType}
      />
      <CardsContainer>
        {pokemons
        .filter((pokemon) => {
          // if(buscaId && pokemon.id === buscaId){
          if(buscaId && pokemon.id === buscaId){  
            return pokemon
          } else if(!buscaId){
            return pokemon
          }
        })
        .filter((pokemon) => {
          if(buscaNome && pokemon.name.english.toLowerCase().includes(buscaNome.toLowerCase())){
            return pokemon
          } else if(!buscaNome){
            return pokemon
          }
        })
        .sort((a, b) => {
          const pokemonAtual = a.name.english
          const pokemonProximo = b.name.english
          if(ordernar === "Crescente"){
            return pokemonAtual > pokemonProximo ? 1 : -1
          } else if (ordernar === "Decrescente"){
            return pokemonAtual < pokemonProximo ? 1 : -1
          } else {
            return a.id - b.id
          }
        })
        // .filter((pokemon) => {
        //   return ordenarPorType === pokemon.type.map((type) => {
        //     console.log(type)
        //     if(ordenarPorType && type === ordenarPorType){
        //       return type
        //     } else if(!ordenarPorType){
        //       return type
        //     }
        //   })
        // })
        .filter((pokemon) => {
          if(pokemon.type.includes(ordenarPorType)){
            return pokemon
          } else if(!ordenarPorType || ordenarPorType === "Selecione um tipo"){
            return pokemon
          }
        })
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })
      }
      </CardsContainer>
    </>
  );
}

export default App;
