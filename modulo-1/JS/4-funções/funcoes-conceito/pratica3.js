/*Faça uma função que receba como parâmetros, login e senha. 
No corpo da função declare duas variáveis do tipo string 
e senhaArmazenada com lavores já pré estabelecidos. 
Usaremos essas variáveis para verificar se são iguais às 
que estamos recebendo como parâmetro. Retorne true se as 
duas variáveis forem verdadeiras.
*/

const pratica3 = (loginDigitado, senhaDigitado) => {
    const loginArmazenado = "admin"
    const senhaArmazenada = "bananinha"

    return loginDigitado === loginArmazenado && senhaDigitado === senhaArmazenada
}

console.log(pratica3(prompt("Digite seu login:"), prompt("Digite sua senha:")))