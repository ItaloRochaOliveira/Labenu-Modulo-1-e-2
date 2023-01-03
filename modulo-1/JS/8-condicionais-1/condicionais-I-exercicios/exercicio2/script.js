// # Exercício 2

// Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

function verficador(num, booleanoEM, booleanoFacul) {
  if (num >= 18) {
    alert(`Você é maior de idade`);
    if (booleanoEM) {
      alert(`Você Terminou o Ensino Médio`);
    } else {
      alert(`Você não Terminou o Ensino Médio`);
    }
    if (!booleanoFacul) {
      alert(`Você não está cursando uma faculdade`);
    } else {
      alert(`Você está cursando uma faculdade`);
    }
  } else {
    alert(`Você é menor de idade`);
    if (booleanoEM) {
      alert(`Você Terminou o Ensino Médio`);
    } else {
      alert(`Você não Terminou o Ensino Médio`);
    }
  }
}

verficador(
  prompt("Qual a sua idade"),
  confirm("Você terminou o Ensino Médio?"),
  confirm("Você não está cursando uma faculdade?")
);
