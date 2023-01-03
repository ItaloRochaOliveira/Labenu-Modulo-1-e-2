// # Exercício 3


// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
function somar(num1, num2){
    return num1 + num2
}

function subtrair(num1, num2){
    return num1 - num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
    return num1 / num2
}


// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
const numero1 = Number(prompt("Informe um número:"))
const numero2 = Number(prompt("Informe outro número:"))

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
console.log(somar(numero1, numero2))

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
const somado = somar(numero1, numero2)
const subtraindo = subtrair(numero1, numero2)
const multiplicando = multiplicar(numero1, numero2)
const dividindo = dividir(numero1, numero2)

console.log(`A soma dos seus dois número é de: ${somado}
A subtração dos seus dois número é de: ${subtraindo}
A multiplicação dos seus dois número é de ${multiplicando}
A divisão dos seus dois número é de ${dividindo}`)