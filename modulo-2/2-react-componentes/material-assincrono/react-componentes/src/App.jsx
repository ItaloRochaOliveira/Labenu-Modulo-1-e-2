import { useState } from "react";
import Header from "./componentes/Header";
import { Main } from "./componentes/Main";
import Footer from "./componentes/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
