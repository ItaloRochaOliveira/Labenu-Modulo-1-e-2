import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyle } from "./Componentes/GlobalStyled";
import carro from "./img/carro.png"

export default function App() {
  const nome = "adicionar";

  function apresentaGaragem(nomeDaGaragem) {
    alert(`Boas vindas à garagem de ${nomeDaGaragem}`);
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} imgCarro = {carro}/>
    </div>
  );
}