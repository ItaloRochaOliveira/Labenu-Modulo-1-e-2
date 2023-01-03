// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function cumprimento(nome){
    console.log(`Olá ${nome}`)
}

cumprimento(prompt("Insira seu nome aqui:"))

// b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.
function tabuada(num){
    console.log(`Sua tabuada do ${num}:`)
    for(let c = 0; c <= 10; c++){
        console.log(`${c} x ${num} = ${c*num}`)
    }
}
tabuada(prompt("Insira um número para ver sua tabuada:"))

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

console.log("------------------------------------")
console.log("Com arrow function")
const cumprimentoArrow = (nome) => {
    console.log(`Olá ${nome}`)
}

cumprimentoArrow(prompt("Insira seu nome aqui:"))

const tabuadaArrow = (num) => {
    console.log(`Sua tabuada do ${num}:`)
    for(let c = 0; c <= 10; c++){
        console.log(`${c} x ${num} = ${c*num}`)
    }
}
tabuadaArrow(prompt("Insira um número para ver sua tabuada:"))
