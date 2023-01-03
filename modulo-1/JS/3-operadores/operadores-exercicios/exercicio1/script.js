// # Exercício 1

// Construa um programa que:

// a) Peça ao usuário que insira um número **par**
let numeroPar = Number(prompt("Insira um número par: "))
numeroPar = numeroPar % 2

for(let counter = 1; counter == numeroPar; counter){
    numeroPar = Number(prompt("Insira um número par: "))
    numeroPar = numeroPar % 2
}

// b) Imprima no console **o resto da divisão** desse número por 2.
console.log("Seu número par é o:", numeroPar)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Sempre da o resultado de 0, pois todo número multiplo de 2 dividido por 2 dá 0.

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
//Dará 1, que é todo número primo que se é dividido por 2 dá 1.

// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número