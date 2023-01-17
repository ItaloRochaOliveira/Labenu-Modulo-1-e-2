import React from "react";
import "./App.css";
import { Garagem } from "./componentes/garagem/Garagem";
import Header from "./componentes/loyout/header/Header";
import Footer from "./componentes/loyout/footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Garagem />
      <Footer />
    </div>
  );
}
