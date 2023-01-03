// Escreva uma função que recebe um ano de início e um ano de fim e imprime no console todas as sextas-feiras 13 entre o período. Exemplo: a entrada 2021, 2022 gera dois console.logs, 13 de agosto 2021 e 13 de maio de 2022.

function sextaTreze(dataInicio, dataFim) {
  let anos = dataInicio - 1970;
  let data = new Date(1000);
  data.setFullYear(data.getFullYear() + anos);
  data.setDate(data.getDate() + 1);
  console.log(data);
  data = data.toString();
  console.log(data);

  for (
    data;
    data.substring(11, 16) <= dataFim;
    data.setFullYear(data.getFullYear() + anos)
  ) {
    console.log(data.substring(11, 16));
    if (dataInicio % 4 === 0) {
      console.log("é bissexto");
      sextaTrezeBissextos(data, dataInicio);
    } else if (dataInicio % 100 === 0) {
      if (dataInicio % 400 === 0) {
        console.log("é bissexto");
        sextaTrezeBissextos(data, dataInicio);
      }
      console.log("Não é bissexto");
      sextaTrezeSemBissextos(data, dataInicio);
    } else {
      sextaTrezeSemBissextos(data, dataInicio);
    }
  }
}

function sextaTrezeBissextos(dia, data) {
  if (dia.substring(0, 3) == "Mon") {
    console.log(
      `O ano de ${data} Tem sexta-feira 13 nos meses de Setembro e Dezembro`
    );
  } else if (dia.substring(0, 3) == "Tue") {
    console.log(`O ano de ${data} Tem sexta-feira 13 no mes de Junho`);
  } else if (dia.substring(0, 3) == "Wed") {
    console.log(
      `O ano de ${data} Tem sexta-feira 13 nos meses de Março e Novembro`
    );
  } else if (dia.substring(0, 3) == "Thu") {
    console.log(
      `O ano de ${data} Tem sexta-feira 13 nos meses de Fevereiro e Agosto`
    );
  } else if (dia.substring(0, 3) == "Fri") {
    console.log(`O ano de ${data} Tem sexta-feira 13 no mes de Maio`);
  } else if (dia.substring(0, 3) == "Sat") {
    console.log(`O ano de ${data} Tem sexta-feira 13 no mes de Outubro`);
  } else if (dia.substring(0, 3) == "Sun") {
    console.log(
      `O ano de ${data} Tem sexta-feira 13 nos meses de Janeiro, Abril e Julho`
    );
  }
}

function sextaTrezeSemBissextos(dia, data) {
  if (dia.substring(0, 3) == "Mon") {
    console.log(
      `O ano de ${data} Tem sexta-feira 13 nos meses de Abril e Julho`
    );
  } else if (dia.substring(0, 3) == "Tue") {
    console.log(
      `O ano de ${data} Tem sexta-feira 13 nos meses Setembro e Dezembro`
    );
  } else if (dia.substring(0, 3) == "Wed") {
    console.log(`O ano de ${data} Tem sexta-feira 13 nos meses de Junho`);
  } else if (dia.substring(0, 3) == "Thu") {
    console.log(
      `O ano de ${data} Tem sexta-feira 13 nos meses de Fevereiro, Março e Novembro`
    );
  } else if (dia.substring(0, 3) == "Fri") {
    console.log(`O ano de ${data} Tem sexta-feira 13 no mes de Agosto`);
  } else if (dia.substring(0, 3) == "Sat") {
    console.log(`O ano de ${data} Tem sexta-feira 13 no mes de Maio`);
  } else if (dia.substring(0, 3) == "Sun") {
    console.log(
      `O ano de ${data} Tem sexta-feira 13 nos meses de Janeiro e Outubro`
    );
  }
}

sextaTreze(2000, 2020);
