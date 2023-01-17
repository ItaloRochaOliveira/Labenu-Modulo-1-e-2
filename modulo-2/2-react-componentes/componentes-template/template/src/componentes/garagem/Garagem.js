import React from "react";
import Carro from "./Carro";

export function Garagem() {
  return (
    <div className="garagem">
      <h1>Garagem do Italo</h1>
      <Carro />
      <Carro />
      <Carro />
    </div>
  );
}
