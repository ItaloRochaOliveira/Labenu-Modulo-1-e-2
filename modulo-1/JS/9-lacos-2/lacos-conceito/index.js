// Em uma escola são aplicadas 4 provas por bimestre, tendo como base o array de cada bimestre, crie um programa que mostre a média e soma das notas de cada bimestre.

// Para esse programa, considere o seguinte formato:
const bimestre1 = [10, 5, 7, 9];
const bimestre2 = [5, 4, 6, 7];
const bimestre3 = [2, 4, 8, 2];
const bimestre4 = [10, 9, 8, 10];

const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4];

// Dica: Para percorrer array dentro de array, utilize dois laços
// Como saída o programa deve exibir uma mensagem parecida com essa:

// A soma das notas do bimestre 1 é: 40
// A média do bimestre 1 é: 10

// Exiba a mensagem para cada um dos bimestres

/* Forma "comum"

for (let i = 0; i < notasDoAno.length; i++){
    let somaDasNotas = 0;
    let mediaDosBimmestres = 0;

    let (let j = 0; j < notasDoAno[i].length; j++){
        somaDasNotas += notasDoAno[i][j];
    }

    console.log(
    `\nA soma das notas do bimestre ${Number(i) + 1} é: ${somaDasNotas}`
    );

    mediaDosBimmestres = somaDasNotas / notasDoAno[i].length;

    console.log(`A média do bimestre ${Number(i) + 1} é: ${mediaDosBimmestres}`);
}

*/

for (let i in notasDoAno) {
  let somaDasNotas = 0;
  let mediaDosBimmestres = 0;

  //   for (let j in notasDoAno[i]) {
  //     somaDasNotas += notasDoAno[i][j];
  //   }

  //    com for of
  for (let j of notasDoAno[i]) {
    somaDasNotas += j;
  }
  console.log(
    `\nA soma das notas do bimestre ${Number(i) + 1} é: ${somaDasNotas}`
  );

  mediaDosBimmestres = somaDasNotas / notasDoAno[i].length;

  console.log(`A média do bimestre ${Number(i) + 1} é: ${mediaDosBimmestres}`);
}
