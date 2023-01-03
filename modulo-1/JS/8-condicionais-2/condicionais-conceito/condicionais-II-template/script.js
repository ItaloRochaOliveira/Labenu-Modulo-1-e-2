const idadeDependente = 18;

if (idadeDependente >= 13) {
  if (idadeDependente <= 17) {
    console.log("Pode ter o cartão dependente");
  } else {
    console.log("O limire de idade é 17 anos.");
  }
} else {
  console.log(
    "Para ter o cartão dependente você precisa ter entre 13 e 17 anos. Consulte outras possibilidade do Labank"
  );
}

//usando operadores lógicos

if (idadeDependente >= 13 && idadeDependente <= 17) {
  console.log("Pode ter o cartão dependente");
} else {
  console.log(
    "Para ter o cartão dependente você precisa ter entre 13 e 17 anos. Consulte outras possibilidade do Labank"
  );
}

//Trenário

let chuva = true;

chuva ? console.log("leve sombrinha") : console.log("Não levar");

idadeDependente === 13
  ? console.log("Pode ter o cartão dependente")
  : console.log("Consulte outras possibilidade do Labank");

//Swich-case

let escolhaUsuario = Number(
  prompt(`Escolha uma das quatro opções:
Escolha 
1 - Fácil
2 - Black
3 - Platinum
4 - Master Gold`)
);
let cartao;

switch (escolhaUsuario) {
  case 1:
    cartao = "Fácil";
    break;
  case 2:
    cartao = "Black";
    break;
  case 3:
    cartao = "Platinum";
    break;
  case 4:
    cartao = "Master gold";
    break;

  default:
    cartao = "Escolha uma das quatro opções escolhidas";
    break;
}

console.log(cartao);
