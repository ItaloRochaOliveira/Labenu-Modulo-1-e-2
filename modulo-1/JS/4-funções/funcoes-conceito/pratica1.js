//Declarando function para pedir nome

//expressao é um argumento
//testar expressao no console.log()


//---------- Sem retorno-------------------------------
function functionNormal(nome){
    console.log(`Olá ${nome}`)
}

const functionArrow = (nome) => {
    console.log(`Olá ${nome}`)
}

const functionArrowAbreviada = (nome) => console.log(nome)

functionNormal("Luiza")
functionArrow("Tales")
functionNormal("Fulano")
functionArrow("Ciclano")

//---------Com retorno----------------------------------

function functionNormalRetorno (nome){
    return `Olá ${nome}`
}

const functionArrowRetorno = (nome) => {
    return `Óla ${nome}`
}

console.log(functionNormalRetorno(prompt("Qual seu nome?")))
console.log(functionArrowRetorno(prompt("Qual seu nome?")))

//------------Exercício----------------------------
function functionNaoNomeada (){

}
