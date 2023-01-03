// Vamos criar um programa que peça ao usuário para inserir seu nome, e sua cor favorita. Em seguida, o programa deve imprimir a mensagem:
// A cor favorita de pessoa é cor;

// Vamos fazer o programa duas vezes. Na primeira, com concatenação, e a segunda com Template Strings.

const nome = prompt("Qual o seu nome?");
const cor = prompt("Qual a sua cor favorita?");

const fraseConcatenada = "A cor favorita de " + nome + " é " + cor;

console.log(fraseConcatenada);

// Agora, vamos alterar a forma com que o texto aparece.
// Altere a primeira string para que a pessoa também envie sua citação favorita. Essa citação deve ser impressa entre aspas.
// Altere a segunda string que criamos, para que seja impressa dessa forma (utilizando apenas um console.log):

const fraseTemplateString = `Nome: ${nome} \ncor favorita: ${cor}`;
console.log(fraseTemplateString);

// Vamos alterar a forma de nossa exibição de strings agora.
// Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
// Exiba no console quantos caracteres tem o nome da pessoa.
// Cheque se o nome da pessoa possui a letra A

const nomeMaiusculo = nome.toUpperCase();
console.log(nomeMaiusculo.length);
console.log("Tem a letra A no nome?", nomeMaiusculo.includes("A"));
