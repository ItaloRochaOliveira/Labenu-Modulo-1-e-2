import Carro from "./Carro";

function Garagem(promps) {
  console.log(promps)
  return (
    <>
    <div>
      <h1>Garagem da {promps.nome}</h1>
      <button onClick={()=>promps.apresentarGaragem(promps.nome)}>Clicle para apresentar a garagem</button>
      <Carro carro={promps.carro1}/>
      <Carro carro={promps.carro2}/>
      <Carro carro={promps.carro3}/>
      <Carro />
    </div>
    </>
    
  );
}

export default Garagem;
