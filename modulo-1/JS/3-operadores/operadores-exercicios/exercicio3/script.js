// # Exercício 3

// ### Parte 1
// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

// a) 5 é maior que 20 e também é menor que 2;
let a = 5 > 20 && 5 < 2
console.log(a)
// b) 5 é igual a 5 ou é igual a “5”;
let b = 5 == 5 || 5 == "5"
console.log(b)
// c) negação de (vinte é maior que cinquenta)
let c = !(20 > 50)
console.log(c)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
let d = !(20 > 50 || 50 > 60)

// Exemplo:

// ```jsx
// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,
// que devolve false*/
// ```

// ### Parte 2

// Na aula passada vocês começaram a implementar um sistema para o Rh de uma empresa. 

// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:**

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**
alert("Complete o questionário para se cadastrar na platadorma:")

let nome = prompt("Qual o seu nome?")
console.log("Tipo da variável nome:", typeof nome)

const dataDeNascimento = prompt(`Olá ${nome} qual a data do seu nascimento? (não esqueça de usar /, como 12/12/2022`)
console.log("Tipo da variável dataDeNascimento:", dataDeNascimento)

let endereço = prompt("Qual seu atual endereço?")
console.log("Tipo da variável endereço:", endereço)

let cpf = Number(prompt("Qual o seu cpf?"))
console.log("Tipo da variável cpf:", cpf)

const escolaridade = prompt("Sua escolaridade:")
console.log("Tipo da variável escolaridade:", escolaridade)

let cnh = prompt("Possui CNH?")
console.log("Tipo da variável cnh:", cnh)

let filhos = Number(prompt("Possui quantos filhos?"))
console.log("Tipo da variável filhos:", filhos)

let cargoAtual = prompt("Qual o seu cargo atual?")
console.log("Tipo da variável cargoAtual:", cargoAtual)

let salario = Number(prompt("Qual o seu salario atual?"))
console.log("Tipo da variável salario:", salario)

let comissao = prompt("Recebe comissão?").toLowerCase()
console.log("Tipo da variável comissao:", comissao)

if(comissao == "sim"){
    let porcentagemDaComissao = Number(prompt("Qual a porcentagem?"))
    console.log("Tipo da variável porcentagemDaComissao", porcentagemDaComissao)
}

let anoDeAdmissao = Number(prompt("Qual o seu ano de admissão?"))
console.log("Tipo da variável anoDeAdmissao", anoDeAdmissao)

// Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:

// a) Auxílio creche por filho:  R$45,50
let auxilioCreche = filhos * 45.50
console.log("você terá direito a auxilio creche de: ", auxilioCreche)

// b) Comissão de 10% sobre o total de vendas mensal

// c) Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00

let porcentagemPorComissao = 31650*10/100
console.log("Sua porcentagem de comissão nesses ultimos 6 meses é de:", porcentagemPorComissao)

// d)  Desconto do INSS 5% do salário
let inss = ((salario * 6) + 31650)*5/100
console.log("Seu desconto do INSS 5% do salário é de:", inss)

// Calcule:

// 1) O salário fixo mais o auxílio creche
let salarioFixoMaisCreche = salario + auxilioCreche
console.log("O seu salario fixo mais creche será de:", salarioFixoMaisCreche)

// 2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
let comissaoDeJaneiro = 5784*10/100
console.log("Sua comissão de janeiro é de:", comissaoDeJaneiro)

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)
let inssDeJaneiro = (salario + 5784)*10/100
console.log("O desconto de Janeiro é de:", inssDeJaneiro)

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
let salarioTotal = porcentagemPorComissao + salarioFixoMaisCreche + inss
console.log("O seu salario total é de:", salarioTotal)

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
salarioDeSeisMeses = salarioTotal/5
console.log("A média do seu salario em 6 mese foi de:", salarioDeSeisMeses)
