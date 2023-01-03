const nome = prompt("Qual o seu nome?");
const addEmail = confirm("Deseja adicionar um email? ");

if (addEmail) {
  let email = prompt("insira um email: ");
  console.log(
    "O email",
    email,
    "foi cadastrada com secesso. E seu nome tem: ",
    nome.length,
    "de comprimento."
  );

  email = email.toUpperCase();
  email = email.replaceAll("R", "X");
  console.log("R substituido por X: ", email);
  console.log("Tem @ nesse email?", email.includes("@"));
} else {
  console.log("O seu nome é: ", nome);
}
