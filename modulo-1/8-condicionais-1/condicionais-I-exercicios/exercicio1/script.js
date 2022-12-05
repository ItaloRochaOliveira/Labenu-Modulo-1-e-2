// # Exercício 1

// Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.

function verificador(num) {
  if (num % 2 === 0) {
    alert(`${num} é par!`);
  } else {
    alert(`${num} é impar!`);
  }
}

verificador(prompt("Insira seu número para verficar se é par: "));
