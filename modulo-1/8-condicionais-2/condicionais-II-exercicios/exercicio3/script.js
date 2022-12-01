// # Exercício 3

// Reescreva os códigos do arquivo script.js utilizando o if ternário.

//código a ser reescrito

const nome = prompt("Escreva José para da um olá zé ou olá e o nome")
  .toLowerCase()
  .trim();
//nome if
if (nome === "José") {
  console.log("Oi, Zé!");
} else {
  console.log("Olá, " + nome);
}
//nome ternario
console.log(nome === "José" ? "Oi, Zé!" : `"Olá, " + ${nome}`);

idade = Number(
  prompt("Diga sua idade para saber se pode tirar a carteira de motorista")
);
//idade if
if (idade >= 18) {
  console.log("pode tirar carteira de motorista!");
} else {
  console.log("Ainda não pode tirar carteira de motorista");
}

console.log(
  idade >= 18
    ? "pode tirar carteira de motorista!"
    : "Ainda não pode tirar carteira de motorista"
);
