import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/f/f3/0172Pichu.png/600px-0172Pichu.png',
    id: 0
  })

  const [pikachu, setPikachu] = useState({
    name: "Pikachu",
    type: "Electric",
    evolved: true,
    weight: 6,
    color: "red",
    image: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png",
    id: 25
  })

  
   const evolutionPikachu = {
      name: "Raichu",
      type: "Electric",
      evolved: false,
      weight: 30,
      color: "orange",
      image: "https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/250px-0026Raichu.png",
      id: 26
    }
  

  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard 
      name={pokemon.name} 
      type={pokemon.type} 
      evolved={pokemon.evolved} 
      weight={pokemon.weight}
      color={pokemon.color}
      image={pokemon.image}
      id={pokemon.id}
      setPokemon = {setPokemon}
      /> 
      
      <PokemonCard 
      name={pikachu.name} 
      type={pikachu.type} 
      evolved={pikachu.evolved} 
      weight={pikachu.weight}
      color={pikachu.color}
      image={pikachu.image}
      id={pikachu.id}
      setPokemon = {setPikachu}
      evolutionPokemon = {evolutionPikachu}
      /> 
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
