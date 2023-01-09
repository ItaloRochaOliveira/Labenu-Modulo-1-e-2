const cadastro = {};

const nome = document.getElementById("nome");
cadastro.nome = nome.value;

const endereco = document.getElementById("endereco");
cadastro.endereco = endereco.value;

const email = document.getElementById("email");
cadastro.email = email.value;

console.log(cadastro);

const cleanValue = () => {
  nome.value = "";
  endereco.value = "";
  email.value = "";
};
