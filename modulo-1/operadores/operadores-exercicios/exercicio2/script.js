// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
let number1 = Number(prompt("Escreva um número: "))
console.log("Seu primeiro número:", number1)
let number2 = Number(prompt("Escreva um segundo número: "))
console.log("Seu primeiro número:", number2)

// O primeiro numero é maior que segundo? true
console.log("Seu primeiro número é maior que o segundo?", number1 > number2)
// O primeiro numero é igual ao segundo? false
console.log("Seu primeiro número é igual ao segundo?", number1 == number2)
// O primeiro numero é divisível pelo segundo? true
console.log("Seu primeiro número é divisivel pelo segundo?", number1 % number2 === 0)
// O segundo numero é divisível pelo primeiro? true
console.log("Seu secundo número é divisivel pelo primeiro?", number2 % number1 === 0)