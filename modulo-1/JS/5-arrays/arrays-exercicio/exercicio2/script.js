// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const arrayNumbers = [8, 19, 12, 9, 1, 8];
const arrayStrings = ["cachorro", "gato", "periquito"];
const arrayVariados = [8, 19, "cachorro", "gato", 3 === 3, false];

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log("--------------tamanho--------------");
console.log("-----numbers-----");
console.log("lenght:", arrayNumbers.length);
console.log("-----String-----");
console.log("lenght:", arrayStrings.length);
console.log("-----variado-----");
console.log("lenght:", arrayVariados.length);

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("----primeiro, segundo, tercerio item das arrays----");
console.log("-----numbers-----");
console.log(arrayNumbers[0]);
console.log("-----String-----");
console.log(arrayStrings[1]);
console.log("-----variado-----");
console.log(arrayVariados[2]);

// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.
console.log("--------includes-----------");
console.log("-----numbers-----");
console.log(arrayNumbers.includes(1));
console.log("-----variado-----");
console.log(arrayVariados.includes("Carlos"));
