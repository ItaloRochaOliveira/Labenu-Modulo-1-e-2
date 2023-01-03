const objeto = {
  chave1: 2,
  chave2: "string",
  chave3: true,
  chave4: [],
  chave5: {},
};

const estudante = {
  nome: "Italo", //O melhor é string
  sobrenome: "Rocha", //O melhor é string
  matricula: 321432545, //O melhor é number
  notas: [10, 9, 8], //O melhor porque preciso de valores independente da ordem e é mais de um valor
};

estudante.modulo = "Novo modulo";

console.log(estudante);
console.log("Nome:", estudante.nome);
console.log("Segunda nota:", estudante["notas"][1]);
console.log("Módulo:", estudante.modulo);

//copiando objeto espalhando ele:
const novoEstudante = {
  ...estudante,
  nome: "Astrodev",
  notas: [...estudante.notas, 9],
  modulo: "proximo modulo",
};

console.log(novoEstudante);
console.log(estudante.nome);

//Novo array com objetos
const estudantesLabenu = [estudante];
estudantesLabenu.push(novoEstudante);

console.log(estudantesLabenu);
