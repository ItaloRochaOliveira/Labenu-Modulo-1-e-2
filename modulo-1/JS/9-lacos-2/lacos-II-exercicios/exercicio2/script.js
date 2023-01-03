const numero = [Number(prompt("Insira o número para saber sua tabuada"))];

//primeiro
// let multiplicado = [];

// for (let i = 0; i <= 10; i++) {
//   multiplicado.push(numero * i);
// }

// for (let i in multiplicado) {
//   console.log(`${i}x${10}=${multiplicado[i]}`);
// }

//segundo
numero.push(
  numero[0],
  numero[0],
  numero[0],
  numero[0],
  numero[0],
  numero[0],
  numero[0],
  numero[0],
  numero[0],
  numero[0]
);
for (let j in numero) {
  console.log(`${j}x${numero[j]}=${j * numero[j]}`);
}

//terceiro
// let deZeroaDez = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i in deZeroaDez) {
//   console.log(`${i}x${numero}=${i * numero}`);
// }
