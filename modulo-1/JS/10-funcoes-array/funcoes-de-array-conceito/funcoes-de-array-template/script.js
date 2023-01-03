const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

//Multiplicar por 3 com funçao normal
function multiplicarPor3(array) {
  const novoArray = [];
  for (let elemento of array) {
    novoArray.push(elemento * 3);
  }
  return novoArray;
}

//Retornar numeros pares

const retornarNumerosPares = (array) => {
  const novoArray = [];
  for (let elemento of array) {
    if (elemento % 2 === 0) {
      novoArray.push(elemento);
    }
  }
  return novoArray;
};

const conjunto1 = [1, 1, 12, 2, 3, 4, 51, 2];
const conjunto2 = [4, 43, 30, 43, 50, 23, 2];
// console.log(multiplicarPor3(conjunto1));
// console.log(retornarNumerosPares(conjunto2));

// Em seguida, crie uma função que deve receber como parâmetros um array e uma função. O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do novo array em uma variável. Em seguida, esta função vai imprimir os valores do novo array no console.

function imprimir(array, callback) {
  const novaArray = callback(array);
  console.log("Imprimindo as outras funções: ", novaArray);
}

imprimir(conjunto1, multiplicarPor3);
imprimir(conjunto1, retornarNumerosPares);

// Refaça o item “A primeira deve receber um array de números, e retornar todos os números do array, multiplicados por 3”, dessa vez utilizando a função de array map().

function multiplicarPor3map(array) {
  const novaArray = array.map((numero) => {
    return numero * 3;
  });
  return novaArray;
}

multiplicarPor3map(conjunto1);
//ou com callback
imprimir(conjunto1, multiplicarPor3map);

// Refaça o item “A segunda deve receber um array de números, e retornar um array apenas com os números pares”, dessa vez utilizando a função filter()

function retornarNumerosParesFilter(array) {
  const novoArray = array.filter((numero) => {
    return numero % 2 === 0 ? numero : false;
  });
  return novoArray;
}

retornarNumerosParesFilter(conjunto1);
//ou com callback
imprimir(conjunto1, retornarNumerosParesFilter);
