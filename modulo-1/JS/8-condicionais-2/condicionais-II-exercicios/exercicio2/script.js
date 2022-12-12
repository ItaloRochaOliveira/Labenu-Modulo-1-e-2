let receber;
const nacionalidades = [
  "brasileira",
  "argentina",
  "uruguaia",
  "chilena",
  "colombiana",
];

const recebendoNacionalidade = Number(
  prompt(`Qual a sua nacionalidade dentre essas opções?
1-brasileira
2-argentina
3-uruguaia
4-chilena
5-colombiana
6-outros`)
);

function verificandoNacionalidade(nacionalidade) {
  switch (nacionalidade) {
    case nacionalidades.indexOf("brasileira") + 1:
      return "a pessoa é do Brasil!";
    case nacionalidades.indexOf("argentina") + 1:
      return "a pessoa é da Argentina!";
    case nacionalidades.indexOf("uruguaia") + 1:
      return "a pessoa é do Uruguai!";
    case nacionalidades.indexOf("chilena") + 1:
      return "a pessoa é do Chile!";
    case nacionalidades.indexOf("colombiana") + 1:
      return "a pessoa é da Colômbia!";
    case nacionalidades.indexOf(nacionalidades[nacionalidades.length - 1]) + 1:
      return `A pessoa é ${nacionalidades[nacionalidades.length - 1]}`;

    default:
      adcionarNacionalidade(
        confirm("Você deseja adicionar uma nova nacionalidade")
      );
      return "fim do programa";
  }
}

function adcionarNacionalidade(booleano) {
  if (booleano) {
    nacionalidades.push(prompt("Qual a sua nacionalidade?"));
    alert(
      `${nacionalidades[nacionalidades.length - 1]} adicionado com sucesso!`
    );
    receber = verificandoNacionalidade(
      Number(
        prompt(`Qual a sua nacionalidade dentre essas opções?
      1-brasileira
      2-argentina
      3-uruguaia
      4-chilena
      5-colombiana
      6-${nacionalidades[nacionalidades.length - 1]}
      7-outros`)
      )
    );
    alert(receber);
  } else {
    alert(
      "Que triste, espero que na proxima tenha sua nacionalidade já adicionada ^^"
    );
  }
}

receber = verificandoNacionalidade(recebendoNacionalidade);
alert(receber);
