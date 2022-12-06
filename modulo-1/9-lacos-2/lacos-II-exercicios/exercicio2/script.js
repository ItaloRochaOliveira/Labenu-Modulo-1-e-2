const numero = [Number(prompt("Insira o número para saber sua tabuada"))];

//Com for normal
// let multiplicado = [];

// for (let i = 0; i <= 10; i++) {
//   multiplicado.push(numero * i);
// }

// for (let i in multiplicado) {
//   console.log(`${i}x${10}=${multiplicado[i]}`);
// }

numero.push(10, 10, 10, 10, 10, 10, 10, 10, 10, 10);
for (let j in numero) {
  console.log(`${j}x${numero[j]}=${j * numero[j]}`);
}
