import React from "react";

export default function Cereal(promps) {
  console.log(promps);
  return (
    <div className="Cereal">
      <strong>nome: {promps.nome}</strong>
      <strong>sabor: {promps.sabor}</strong>
    </div>
  );
}
