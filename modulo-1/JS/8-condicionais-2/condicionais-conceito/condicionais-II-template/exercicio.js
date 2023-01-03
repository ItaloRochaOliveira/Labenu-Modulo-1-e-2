const numb = Number(
  prompt("Escolha um número para saber se é divisivel por 2 ou 3: ")
);

//if else
if (numb % 2 === 0 && numb % 3 === 0) {
  console.log(`Seu número (${numb}) é divivel por 2 e 3`);

  //if ternario
  numb === 30
    ? console.log("UFA, acertei")
    : console.log("Não foi desse vez :(");

  //swich-case
  switch (numb) {
    case 6:
      console.log(`Ele é o número 6`);
      break;
    case 12:
      console.log(`Ele é o número 12`);
      break;
    case 18:
      console.log(`Ele é o número 18`);
      break;
    case 24:
      console.log(`Ele é o número 24`);
      break;
    case 30:
      console.log(`Ele é o número 30`);
      break;

    default:
      console.log("Esse número é menor que 6 e maior que 30");
      break;
  }
} else if (numb % 2 === 0) {
  console.log(
    `Seu número (${numb}) é divivel por 2, tente um que seja divivel tanto por 3, quanto por 2`
  );
} else if (numb % 3 === 0) {
  console.log(
    `Seu número (${numb}) é divivel por 3, tente um número que seja divisivel por tanto por 2, quanto por 3`
  );
} else {
  console.log(`O (${numb}) não é divisivel por 2 nem por 3`);
}
