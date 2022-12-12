// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let resposta = prompt(
  "Você deseja comer coxinha de R$2,50? (S/N)"
).toUpperCase();
let contador = 0;
let quantidade = 0;

while (resposta != "N") {
  quantidade += 1;
  contador = quantidade * 2.5;
  resposta = prompt("Deseja comer mais uma coxinha? (S/N)").toUpperCase();
}

alert(`Você comeu ${quantidade} coxinhas e deu o total de ${contador}`);
