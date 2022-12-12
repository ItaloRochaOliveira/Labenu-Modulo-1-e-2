// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let number = +prompt("Digite um número para saber a tabuada até o 10: ");

for (let i = 0; i <= 10; i++) {
  let resultado = i * number;
  console.log(`${i}x${number}=${resultado}`);
}
