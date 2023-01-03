//EXERCICIO 1 -
// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.

// Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

// Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0.
// O resultado deve ser: 70
let numero = Number(prompt("Digite um número: "));

let resultadoSoma = 0;

while (numero !== 0) {
  resultadoSoma += numero;
  console.log(numero);
  numero = Number(prompt("Digite um número: "));
}

console.log(resultadoSoma);

//EXERCICIO 2 -
// Vamos escrever um programa que recebe um número por input de usuário.
// Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
// Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado
let number = Number(prompt("Digite um número: "));

for (let i = 0; i <= number; i++) {
  console.log(i);
}

//EXERCICIO 3
// Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
// “O número do índice ${indice} é ${numero[indice]}”

const array = [5, 3, 8, 5, 1, 6, 9];

for (let i = 0; i < array.length; i++) {
  console.log(`o indice ${i} tem o valor ${array[i]}`);
}
