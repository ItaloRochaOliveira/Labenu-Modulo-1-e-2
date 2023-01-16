const list = document.getElementById("container");

const botao = document.getElementById("botao");

const adicionaItem = () => {
  const article = document.createElement("article");
  article.setAttribute("class", "item");
  article.setAttribute("onclick", "removeItem(event)");
  list.appendChild(article);
};

const removeItem = (e) => {
  console.log(e.target);
  // e.target.remove();
  // e.target.style.background = "blue";
  list.removeChild(e.target);
};
