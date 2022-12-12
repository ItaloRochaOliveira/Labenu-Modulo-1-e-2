// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const arrayNumbers = [8, 19, 12, 9, 1, 8];
const arrayStrings = ["cachorro", "gato", "periquito"];
const arrayVariados = [8, 19, "cachorro", "gato", 3 === 3, false];

//copia
const arrayNumbersCopia = arrayNumbers.slice();
const arrayStringsCopia = arrayStrings.slice();
const arrayVariadosCopia = arrayVariados.slice();

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
console.log("--------Primeira array---------");
arrayNumbers.unshift(3);
console.log(arrayNumbersCopia);
console.log(arrayNumbers);

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
console.log("--------Segunda array---------");
arrayStrings.pop();
console.log(arrayStringsCopia);
console.log(arrayStrings);

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
console.log("--------Terceira array---------");
arrayVariados.splice(1, 1);
console.log(arrayVariados);
console.log(arrayVariadosCopia);
