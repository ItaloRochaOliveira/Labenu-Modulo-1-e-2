//EXERCICIO 1
// let usuario = prompt(`Escolha seu login:
// A para ADM
// B para Comum
// C para Uauário assinante`).toUpperCase();

// const verificador = "A";
// while (usuario != verificador) {
//   alert("Acesso negado");

//   usuario = prompt(`Escolha de novo o seu login:
// A para ADM
// B para Comum
// C para Uauário assinante`).toUpperCase();
// }

// alert("Boas-Vindas, ADM!");

//EXERCICIO 2
// let number = +prompt("Insira um número para saber a tabuada dele:");
// let limite = +prompt("Insira até onde você quer que ele seja multiplicado: ");

// for (let i = 0; i <= limite; i++) {
//   let resultador = number * i;
//   console.log(`${i} x ${number} = ${resultador}`);
// }

//EXERCICIO 3
const animais = ["cachorro", "gato", "cavalo", "baleia"];
for (let i = 0; i <= animais.length - 1; i++) {
  console.log(
    `No indice ${i} tem a valor da array: ${animais[i].toUpperCase()}`
  );
}
