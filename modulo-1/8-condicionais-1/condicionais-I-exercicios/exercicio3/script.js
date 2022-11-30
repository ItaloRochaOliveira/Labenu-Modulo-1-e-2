// # Exercício 3

// Crie uma função que receba do usuário sua nacionalidade, utilize um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

function verficadorDeNacionalidade(nacionalidade) {
  if (nacionalidade == "brasileira") {
    alert(`Você é ${nacionalidade}`);
  } else if (nacionalidade == "argentina") {
    alert(`Você é ${nacionalidade}`);
  } else if (nacionalidade == "uruguaia") {
    alert(`Você é ${nacionalidade}`);
  } else if (nacionalidade == "chilena") {
    alert(`Você é ${nacionalidade}`);
  } else if (nacionalidade == "colombiana") {
    alert(`Você é ${nacionalidade}`);
  } else {
    alert(`Adicionando nova nacionalidade...`);
    novaNacionalidade(prompt("Qual será a nova nacionalidade?").toLowerCase());
  }
}

function novaNacionalidade(nacionalidade) {
  alert(`${nacionalidade} adicionada ^^`);
  alert(`Você é ${nacionalidade}`);
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
