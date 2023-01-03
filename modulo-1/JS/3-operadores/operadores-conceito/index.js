console.log("--------------------------")
console.log("- Operadores -")

let quantidade = 1000

let res = quantidade/2

console.log(`A metade de ${quantidade} é ${res}`)

console.log("- Atividade -")

let reais = 15 + 22.40
console.log("Eu tenho:", reais)

reais -= 12.34
console.log("Perdi:", reais)

reais /= 3
console.log("Dividi entre os irmão:", reais)

reais *= 3.42
console.log("Ganhei:", reais)

reais %= 3
console.log("Sobrou para ciclete", reais.toFixed(2))
console.log("--------------------------")


console.log("- Momento replica -")
const valor1 = 10
const valor2 = 11

const saoIguais = valor1 == valor2
console.log("10 == 11?", saoIguais)

const eMenoOuIgual = valor1 <= valor2
console.log("10 <= 11?", eMenoOuIgual)

const eMaior = valor1 > valor2
console.log("10 > 11?", eMaior)

const eMenor = valor1 < valor2
console.log("10 < 11?", eMenor)
console.log("--------------------------")


console.log("- Atividade de fixação -")
const idade1 = Number(prompt("Qual sua idade?"))
const idade2 = Number(prompt("Qual a idade do seu amigo?"))
console.log("A sua idade é maior que a do seu amigo?", idade1 > idade2)
console.log("A diferença entre a idade de vocês é de:", idade1 - idade2)
console.log("--------------------------")


console.log("--------------------------")
console.log("- Atividade de fixação 2-")
let a = "vou para a praia"
let b = "sou maior de idade"
let c = "posso tomar uma cervejinha"
let d = "quero passear de carro"

!b && d //false
(b && a) && !d //false
a || d //true
c && !d //false

console.log("--------------------------")