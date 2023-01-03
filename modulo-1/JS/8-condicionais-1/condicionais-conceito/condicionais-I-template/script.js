//Pratica guiada 1
const booleano1 = false;
const booleano2 = true;

// if (booleano1) {
//   alert("booleano1 é true");
// } else {
//   alert("booleano1 é false");
// }

//Pratica guiada 2
// const booleano3 = true;
// if (booleano1 === booleano2) {
//   alert("1 e 2 são iguais");
// } else if (booleano2 === booleano3) {
//   alert("2 e 3 são iguais");
// } else if (booleano1 === booleano3) {
//   alert("1 e 3 são iguais");
// } else {
//   alert("todos os valores são diferentes");
// }

//Pratica guiada 3
const idade = Number(prompt("Insira uma idade"));

if (idade > 0 && idade < 16) {
  alert("Titulo não obrigatório");
} else if (idade < 18 || (idade >= 60 && idade < 120)) {
  alert("Facultativo");
} else if (idade >= 18 && idade < 60) {
  alert("Titulo obrigatório");
} else {
  alert("Valor errado");
}
