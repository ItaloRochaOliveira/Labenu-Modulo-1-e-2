alert("Complete o questionário para se cadastrar na platadorma:")

let nome = prompt("Qual o seu nome?")
console.log("Tipo da variável nome:", typeof nome)

const dataDeNascimento = prompt(`Olá ${nome} qual a data do seu nascimento? (não esqueça de usar /, como 12/12/2022`)
console.log("Tipo da variável dataDeNascimento:", typeof dataDeNascimento)

let endereço = prompt("Qual seu atual endereço?")
console.log("Tipo da variável endereço:", typeof endereço)

let cpf = Number(prompt("Qual o seu cpf?"))
console.log("Tipo da variável cpf:", typeof cpf)

const escolaridade = prompt("Sua escolaridade:")
console.log("Tipo da variável escolaridade:", typeof escolaridade)

let cnh = prompt("Possui CNH?")
console.log("Tipo da variável cnh:", typeof cnh)

let filhos = Number(prompt("Possui quantos filhos?"))
console.log("Tipo da variável filhos:", typeof filhos)

let cargoAtual = prompt("Qual o seu cargo atual?")
console.log("Tipo da variável cargoAtual:", typeof cargoAtual)

let salario = Number(prompt("Qual o seu salario atual?"))
console.log("Tipo da variável salario:", typeof salario)

let comissao = prompt("Recebe comissão?").toLowerCase()
console.log("Tipo da variável comissao:", typeof comissao)

if(comissao == "sim"){
    porcentagemDaComissao = Number(prompt("Qual a porcentagem?"))
    console.log("Tipo da variável porcentagemDaComissao", typeof porcentagemDaComissao)
}

let anoDeAdmissao = Number(prompt("Qual o seu ano de admissão?"))
console.log("Tipo da variável anoDeAdmissao", typeof anoDeAdmissao)

console.log("Nome:", nome)
console.log("Data de Nascimento:", dataDeNascimento)
console.log("Endereço:", endereço)
console.log("CPF", cpf)
console.log("Escolaridade:", escolaridade)
console.log("CNH:", cnh)
console.log("Tem", filhos, "filhos.")
console.log("Cargo atual:", cargoAtual)
console.log("Salário atual:", salario)
console.log("Tem comissão:", comissao) 
if(comissao == "sim"){
    console.log("Recebe",porcentagemDaComissao,"% de comissão")
}
console.log("Ano que recebeu a admissão:", anoDeAdmissao)