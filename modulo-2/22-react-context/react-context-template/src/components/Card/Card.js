import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { goToDetailsPage } from "../../routes/coordinator";
import { Container } from "./Card.styled";

function Card(props) {
  const { pokemonUrl } = props;
  const {addToPokedex, removeFromPokedex} = useContext(GlobalContext)

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  return (
    <Container>
      <img src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
      <div>
        {location.pathname === "/" ? (
          <button onClick={() => addToPokedex(pokemon)}>
            Adicionar à Pokedex
          </button>
        ) : (
          <button onClick={() => removeFromPokedex(pokemon)}>
            Remover da Pokedex
          </button>
        )}

        <button onClick={() => goToDetailsPage(navigate, pokemon.name)}>
          Ver detalhes
        </button>
      </div>
    </Container>
  );
}

export default Card;