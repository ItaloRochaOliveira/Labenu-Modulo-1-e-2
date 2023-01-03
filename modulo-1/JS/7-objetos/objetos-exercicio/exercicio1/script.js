// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = [];

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:

// nome: string;
// preco: number;
// disponibilidade: boolean;
const frutas = [
  {
    nome: "Maçã",
    preco: 5,
    disponivel: true,
  },
  {
    nome: "banana",
    preco: 10,
    disponivel: true,
  },
  {
    nome: "laranja",
    preco: 5,
    disponivel: false,
  },
];

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(frutas);

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao);
