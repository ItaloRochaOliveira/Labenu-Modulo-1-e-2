const carrinho = {
  nome: "italo",
  formaDePagamento: "dinheiro",
  endereco: "Rua 01",
  //compras: { nome: "bla bla"}, {nome: "bla bla"}
};

const compras = [
  {
    nome: "fone",
    preco: 10,
    quantidade: 1,
  },
  {
    nome: "mouse",
    preco: 30,
    quantidade: 2,
  },
  {
    nome: "teclado",
    preco: 30,
    quantidade: 1,
  },
];

carrinho.compras = compras; //Dá para adicionar direto em vez de criar e adicionar

console.log(carrinho);
console.log("Quantidade de produto: ", carrinho.compras.length);
console.log(
  "Quantidade total de produto:",
  carrinho.compras[0].quantidade +
    carrinho.compras[1].quantidade +
    carrinho.compras[2].quantidade
);

//exercicio
const carrinhoDePresente = {
  ...carrinho,
  nome: "Bel",
  formaDePagamento: "Cartão presente",
};

console.log(carrinhoDePresente);
