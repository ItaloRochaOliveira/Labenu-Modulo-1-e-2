const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

// escreva seu código abaixo 👇🏻

// Use o array de filmes que esta no template

// Crie um laço for para exibir o título, o ano e o diretor dos filmes como uma String
// Crie um laço for dentro do primeiro, para concatenar o elenco numa String
// A saída deve se parecer com:

// “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// “Ator 1: Lázaro Ramos"
// "Ator 2: Leandra Leal"
// "Ator 3: Pedro Cardoso”
// 2. Altere o laço externo do programa anterior para que ele seja um for… in

// 3. Altere o laço interno do programa anterior para que ele seja um for… of

for (let i = 0; i < filmes.length; i++) {
  console.log(
    `\n${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`
  );
  for (let j = 0; j < filmes[i].elenco.length; j++) {
    console.log(`Ator ${j + 1}: ${filmes[i].elenco[j]}`);
  }
}

// for (let i in filmes) {
//   for (let j in filmes[i]) {
//     console.log(filmes[i][j]);
//   }
// }

for (let i in filmes) {
  console.log(
    `\n${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`
  );
  for (let j of filmes[i].elenco) {
    console.log(`Ator ${filmes[i].elenco.indexOf(j) + 1}: ${j}`);
  }
}

// for (let i in filmes) {
//   console.log(
//     `\n${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`
//   );
//   for ([index, value] of filmes[i].elenco.entries()) {
//     console.log(`Ator ${index + 1}: ${value}`);
//   }
// }
