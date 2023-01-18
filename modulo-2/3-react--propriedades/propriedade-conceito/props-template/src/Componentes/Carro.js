function Carro(promps) {
  return (
    <div>
      <h2>{promps.carro?.nome}</h2>
      <ul>
        <li>Cor: {promps.carro?.cor}</li>
        <li>Ano: {promps.carro?.ano}</li>
        <li>Flex: {promps.carro?.flex ? "sim" : "não"}</li>
      </ul>
    </div>
  );
}

export default Carro;
