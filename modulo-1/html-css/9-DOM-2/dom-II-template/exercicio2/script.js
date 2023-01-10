const escondeSenha = (e) => {
  e.preventDefault();
  const inputText = document.getElementById("password");
  inputText.setAttribute("type", "password");
};

const light = document.getElementById("light");

// light.setAttribute("class", "dark");

light.classList.remove("light", "dark");
light.classList.add("dark");
