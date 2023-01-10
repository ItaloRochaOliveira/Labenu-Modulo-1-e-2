const list = document.getElementById("container");

const adicionaItem = () => {
  const article = document.createElement("article");
  article.setAttribute("class", "item");
  article.setAttribute("onclick", "removeItem(event)");
  list.appendChild(article);
};

const removeItem = (e) => {
  list.removeChild(e.target);
};
