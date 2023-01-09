const frutas = ["laranja", "limão", "uva"];

function listaDeFrutas() {
  for (let i in frutas) {
    let fruta = document.getElementById("fruta-" + (Number(i) + 1));
    fruta.innerHTML = frutas[i];
  }
}
listaDeFrutas();

const novaLi = () => {
  let ul = document.getElementById("lista-de-frutas");
  let newLi = document.createElement("li");
  newLi.setAttribute("id", "fruta-" + (frutas.length + 1));
  ul.appendChild(newLi);
};

const InsertNewFruit = () => {
  frutas.push(document.getElementById("fruit").value);
  listaDeFrutas();
  novaLi();
};
