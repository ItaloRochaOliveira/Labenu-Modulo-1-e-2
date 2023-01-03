/*Declare uma função que:
Receba um nome, um ano de nascimento e o ano  Atual 
Retorne uma string com um boleano true para se o usuário 
for maior de idade e false para se for menor de idade. 
A string retornada deve ter a seguinte mensagem:
“Fulano é maior de idade? true”
Chame a função duas vezes, passando como argumento 
nomes e anos de nascimento diferentes.
*/

const anoAtual = 2022

const nome = "Italo"
const anoNascimento = 2001

const nome2 = "Pessoa2"
const anoNascimento2 = 2010

function maioridade (anoAtual, anoNascimento){
    return anoAtual - anoNascimento >= 18
}

console.log(nome, "já pode ser preso?", maioridade(anoAtual, anoNascimento))
console.log(nome2, "já pode ser preso?", maioridade(anoAtual, anoNascimento2))

//segundo exemplo

function maioridade2(nome, anoAtual, anoNascimento){
    const idade = anoAtual - anoNascimento >= 18
    console.log(nome, "já pode ser preso?", idade)
}

maioridade2(nome, anoAtual, anoNascimento)
maioridade2(nome2, anoAtual, anoNascimento2)