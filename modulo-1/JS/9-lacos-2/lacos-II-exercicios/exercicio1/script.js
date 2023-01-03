// # Exercício 1

// Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

const array = [
  [27, 4, 20, 13, 14],
  [11, 15, 12, 8, 9],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];

//for comum
/*
for (let i = 0; i < array.length; i++) {
  let golsNaTemp = 0;
  for (let j = 0; j < array[i].length; j++) {
    golsNaTemp += array[i][j];
  }
  console.log(
    `Temporada ${Number(i) + 1} com o total de gols de: ${golsNaTemp}`
  );
}
*/

//for in e for in
/*
for (let i in array) {
  let golsNaTemp = 0;
  for (let j in array[i]) {
    golsNaTemp += array[i][j];
  }
  console.log(
    `Temporada ${Number(i) + 1} com o total de gols de: ${golsNaTemp}`
  );
}
*/

//for in e for of
for (let i in array) {
  let golsNaTemp = 0;
  for (let j of array[i]) {
    golsNaTemp += j;
  }
  console.log(
    `Temporada ${Number(i) + 1} com o total de gols de: ${golsNaTemp}`
  );
}
