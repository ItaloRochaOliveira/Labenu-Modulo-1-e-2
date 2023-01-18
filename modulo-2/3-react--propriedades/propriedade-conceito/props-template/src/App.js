import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Conway"
  const nome2 = "Nova garagem"

  const apresentarGaragem = (nomeNaGaragem)=>{
    alert(`boas vindas a garagem ${nomeNaGaragem}`)
  }

  const carro1 = {
    nome: "gol",
    cor: "branco",
    ano: 2015,
    flex: true
  }
  const carro2 = {
    nome: "fusca",
    cor: "azul",
    ano: 1999,
    flex: false
  }
  const carro3 = {
    nome: "Celta",
    cor: "preto",
    ano: 2001,
    flex: false
  };
  const carro4 = {
    nome: "Uninho",
    cor: "azul bebê",
    ano: 1993,
    flex: false
  };

  return (
    <>
    <div>
      <Garagem nome={nome} 
      apresentarGaragem={apresentarGaragem}
      carro1={carro1}
      carro2={carro2}
      carro3={carro3}
      carro4={carro4}/>
    </div>
    <div>
      <Garagem nome={nome2} 
      apresentarGaragem={apresentarGaragem}
      carro1={carro2}
      carro2={carro4}
      carro3={carro1}
      carro4={carro3}/>
    </div>
    </>
  );
}
