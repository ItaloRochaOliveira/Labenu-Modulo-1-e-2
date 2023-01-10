const list = document.getElementById("lista");

const insereItem = (e) => {
  e.preventDefault();

  let newFruit = document.getElementById("meu-input");

  const newLi = document.createElement("li");
  newLi.innerHTML = newFruit.value;
  list.appendChild(newLi);

  newFruit.value = "";
};
