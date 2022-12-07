const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).

// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.
// saída esperada:
const funcao1 = (obj) => {
  return {
    ...obj,
    nome: obj.nome.toUpperCase(),
    profissao: obj.profissao.toUpperCase(),
    username: obj.username.toUpperCase(),
    senha: obj.senha.toUpperCase(),
  };
};
const maiusculo = funcao1(objeto);

// `{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`

// 2. A segunda deve retornar os valores do objeto como texto corrido.
const funcao2 = (obj) => {
  return `${obj.nome}  ${obj.profissao} ${obj.username.substring(
    0,
    8
  )} ${obj.username.substring(9, 16)} ${obj.senha.substring(
    0,
    6
  )} ${obj.senha.substring(6, 8)} ${obj.senha.substring(8, 13)}`;
};

// 3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
const funcao3 = (obj, callback) => {
  return callback(obj);
};

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

console.log(funcao3(maiusculo, funcao2));
