// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3

const number = Number(
  prompt("Digite um número para saber se é divisivel por 2 ou 3")
).trim();

// 1. Utilizando ifs aninhados
if (number % 2 === 0) {
  if (number % 3 === 0) {
    console.log("Ele é divisivel por 2 e 3");
  } else {
    console.log("Ele é divisivel apenas por 2");
  }
} else if (number % 3 === 0) {
  console.log("Ele é divisivel apenas por 3");
} else {
  console.log("Ele não é divisivel por nenhum dos dois");
}

// 2. Utilizando um operador lógico para unir duas operações relacionais
if (number % 2 === 0 && number % 3 === 0) {
  console.log("Ele é divisivel por 2 e 3");
} else if (number % 2 === 0) {
  console.log("Ele é divisivel apenas por 2");
} else if (number % 3 === 0) {
  console.log("Ele é divisivel apenas por 3");
} else {
  console.log("Ele não é divisivel por nenhum dos dois");
}
