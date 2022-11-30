// # Exercício 3

// Crie uma função que receba do usuário sua nacionalidade, utilize um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

const nacionalidades = [
  "brasileira",
  "argentina",
  "uruguaia",
  "chilena",
  "colombiana",
];

function verficadorDeNacionalidade(nacionalidade) {
  if (nacionalidade == nacionalidades[0]) {
    alert(`Você é ${nacionalidade}`);
  } else if (nacionalidade == nacionalidades[1]) {
    alert(`Você é ${nacionalidade}`);
  } else if (nacionalidade == nacionalidades[2]) {
    alert(`Você é ${nacionalidade}`);
  } else if (nacionalidade == nacionalidades[3]) {
    alert(`Você é ${nacionalidade}`);
  } else if (nacionalidade == nacionalidades[4]) {
    alert(`Você é ${nacionalidade}`);
  } else if (nacionalidade == nacionalidades[nacionalidades.length - 1]) {
    alert(`Você é ${nacionalidade}`);
  } else {
    alert(`Adicionando nova nacionalidade...`);
    novaNacionalidade(prompt("Qual será a nova nacionalidade?").toLowerCase());
  }
}

function novaNacionalidade(nacionalidade) {
  nacionalidades.push(nacionalidade);
  verficadorDeNacionalidade(
    prompt(`Qual a sua nacionalidade dentre essas opções?
  -brasileira
  -argentina
  -uruguaia
  -chilena
  -colombiana
  -${nacionalidade}
  -(outros) para adicionar nova nacionalidade`).toLowerCase()
  );
}

verficadorDeNacionalidade(
  prompt(`Qual a sua nacionalidade dentre essas opções?
-brasileira
-argentina
-uruguaia
-chilena
-colombiana
-(outros) para adicionar nova nacionalidade`).toLowerCase()
);
