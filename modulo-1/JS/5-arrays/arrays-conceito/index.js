console.log("-------array--------");
//array de strings
console.log("-------array de strings--------");
const arrayDeStrings = ["Ana", "Maria", "braga"];
console.table(arrayDeStrings);
// Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
console.log(arrayDeStrings.length);
console.log(arrayDeStrings[3]);

console.log("-------array de strings copia------");
// Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
const arrayDeStringsCopia = arrayDeStrings;
// Faça push() de uma nova string no array copiado
arrayDeStringsCopia.push("Cozinheira");
// Imprima os dois arrays. Há diferença? Não, ele referenciou o primeiro e tudo que faz em um, faz em outro.
console.table(arrayDeStrings);
console.table(arrayDeStringsCopia);
// Como podemos ajustar?
const arrayDeStringsCopiaComSlice = arrayDeStringsCopia.slice();
// Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
arrayDeStringsCopiaComSlice.pop();
arrayDeStringsCopiaComSlice.pop();
console.table(arrayDeStringsCopiaComSlice);

//array de números
console.log("-------array de números--------");
const arrayDeNumber = [0, 1, 2, 3];
console.table(arrayDeNumber);

//array variada
console.log("-------array variada--------");
const nome = "Italo";
const idade = 21;
const maiorIdade = 21 >= 18;

let dadoDoUsuario = [nome, idade, maiorIdade];

console.table(dadoDoUsuario);
// Verifique se o terceiro array inclui cada um dos itens;
const outroNome = "Pedro";
dadoDoUsuario = [outroNome, idade, maiorIdade];

console.log(dadoDoUsuario.includes("Italo")); //false
console.log(dadoDoUsuario.includes("Pedro")); //true
console.log(dadoDoUsuario.includes(21)); //true
console.log(dadoDoUsuario.includes(false)); //false

//array um valor
console.log("-------array um valor--------");
const apenasUmValor = [1];

// No quarto array, imprima o valor do único item. Observe qual o seu índice, e imprima seu tamanho.
console.log(`${apenasUmValor}
${apenasUmValor.indexOf(1)} 
${apenasUmValor.indexOf(5)}
${apenasUmValor.length}`);
