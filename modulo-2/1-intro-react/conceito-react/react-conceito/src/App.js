import logoLabenu from "./img/logo.png";
import "./App.css";

function App() {
  //tudo de lógica vem aqui
  const nome = "Conway";

  function onClickBotao() {
    alert("Botão foi clicado!");
  }

  return (
    <div className="container">
      <h1>Aprenda React na Labenu!</h1>
      <div>
        <img className="logo" src={logoLabenu} />
      </div>
      <div>
        <a href="https://labenu.com.br" target="_blank">
          Site da Labenu
        </a>
      </div>
      <div>
        <button onClick={onClickBotao}>Clique aqui!</button>
      </div>
    </div>
  );
}

export default App;
