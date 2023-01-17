import { useState } from "react";
import "./App.css";
import Cereal from "./componentes/Cereal";

function App() {
  const objeto = [
    { nome: "cereal", sabor: "tradicional" },
    { nome: "cereal", sabor: "chocolate" },
  ];
  return (
    <div className="App">
      <h1>Cerais da Labenu</h1>
      <Cereal nome="Cereal" sabor="tradicional" />
      <Cereal nome="Cereal de chocolate" sabor="chocolate" />
      <Cereal nome="Cereal de snow" sabor="snow flake" />
    </div>
  );
}

export default App;
