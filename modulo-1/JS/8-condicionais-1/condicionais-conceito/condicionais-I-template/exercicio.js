const media = prompt("Insira sua média:");

if (media >= 5 && media <= 10) {
  alert("Aprovado");
} else if (media >= 3) {
  alert("Recuperação");
} else if (media < 3) {
  alert("Reprovado");
} else {
  alert("Dado invalido");
}
