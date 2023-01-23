import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton, ImgPokemon} from './styles'



const PokemonCard = ({
  name,
  type,
  evolved,
  weight,
  color,
  image,
  id,
  setPokemon,
  evolutionPokemon
}) => {
const evoluirPokemon = () => {
    if(evolved){
      setPokemon(evolutionPokemon)
    } else {
      alert("This pokemon dont have evolution")
    }
}


console.log("aaaa", evolutionPokemon)
    
  return (
    <Card color={color}>
        <ImgPokemon src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard