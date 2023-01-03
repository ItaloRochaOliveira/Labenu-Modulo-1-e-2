const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

// Com o array de pokémons do template, faça o seguinte:
// Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;
const cura = (pokemons) => {
  return { ...pokemons, vida: 100 };
};
console.log(cura(pokemons));
// Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;
const pokemonsVidaCheia = pokemons.map((pokemon) => {
  return cura(pokemon);
});
console.log(pokemonsVidaCheia);
// Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback, que deve retornar apenas os pokemons do tipo fogo.
const pokemonsDeFogo = pokemons.filter((pokemon) => {
  return pokemon.tipo == "fogo";
});

console.log(pokemonsDeFogo);
