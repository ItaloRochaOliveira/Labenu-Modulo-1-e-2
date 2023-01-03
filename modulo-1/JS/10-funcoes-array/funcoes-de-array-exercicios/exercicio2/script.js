// # Exercício 2
// Crie um array de números que contenha 8 números.
const numbers = [1, 4, 9, 3, 92, 9, 2, 3];
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
const triplo = numbers.map((number) => {
  return number * 3;
});
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;
const metades = numbers.map((number) => {
  return number / 2;
});

console.log(triplo, metades);
