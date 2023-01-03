function pratica2(num){
    const verifica = num % 2 === 0
    const soma = num + 10
    const multiplica = num * num

    console.log(`O número ${num} é ${verifica}. Somando com
10 é igual a ${soma} e multiplicado por ele mesmo é igual a ${multiplica}.`)
}

pratica2(Number(prompt("Digite um número: ")))