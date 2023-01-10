const lista = document.getElementById("lista");

const firstItem = document.createElement("li");
firstItem.innerHTML = "item 0";

lista.insertAdjacentElement("afterbegin", firstItem);

const lastItem = document.createElement("li");
const texto = document.createTextNode("item 5");
lastItem.appendChild(texto);

lista.appendChild(lastItem);
