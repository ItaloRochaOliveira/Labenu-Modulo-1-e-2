// # Exercício 2
// Declare e chame as funções abaixo:

/* a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e 
imprima o resultado. Invoque a função e imprima no console o resultado. */
console.log("------------soma------------");
function soma(num1, num2) {
  return num1 + num2;
}

console.log(
  `A soma dos números é de:`,
  soma(
    Number(prompt("Digite um número")),
    Number(prompt("Digite um segundo número"))
  )
);

/* b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é
 **maior ou igual** ao segundo. */
console.log("------------maior ou igual------------");
function maiorOuIgual(num1, num2) {
  console.log(`O número ${num1} é maior que ${num2}?`, num1 > num2);
}

maiorOuIgual(
  Number(prompt("Informe o primeiro número:")),
  Number(prompt("Informe o segundo número:"))
);

// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.
console.log("------------par------------");
function par(num) {
  return num % 2 === 0;
}

let numero = Number(prompt("Informe um número para saber se é par:"));
console.log("Seu número é par?", par(numero));

// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.
console.log("------------INSS------------");
function inss(num) {
  return num - num * 0.1;
}

let number = Number(prompt("Informe um número para saber o deconto do inss:"));
console.log("O valor com deconto vai ser de:", inss(number));
