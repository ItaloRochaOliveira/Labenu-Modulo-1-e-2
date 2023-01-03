//Parte 1:
let nome
console.log(typeof nome)
//Ele foi impresso como string, pois usei as arpas vazias que ele entende como string

let idade
console.log(typeof idade)
//Idade foi impresso como number, pois eu atribui um zero, que é um número

nome = prompt("Qual seu nome?")
console.log(typeof nome)
idade = prompt("Qual a sua idade?")
console.log(typeof idade)
//Ao declarar uma const, o primeiro erro foi o conteúdo nome e idade não mudarem e dar erro
/*A próxima observação é que quando é perguntado pelo prompt ele só recebe o valor string, mudando nossa 
idade para string e mantendo a string em string*/

console.log("Olá", nome, "você tem", idade, "anos.")

//Parte 2:
let perguntaA = "Você tem cachorros? (responda com Sim ou Não)"
perguntaA = prompt(perguntaA).toUpperCase()
console.log("Você tem cachorros? -", perguntaA)
let perguntaB = "Você gosta de doces? (responda com Sim ou Não)"
perguntaB = prompt(perguntaB).toUpperCase()
console.log("Você gosta de doces? -", perguntaB)
let perguntaC = "Você gosta de jogar? (responda com Sim ou Não)"
perguntaC = prompt(perguntaC).toUpperCase()
console.log("Você gosta de jogar? -", perguntaC)