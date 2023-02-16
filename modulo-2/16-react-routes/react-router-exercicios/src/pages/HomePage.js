import {irParaHome, irParaPaginaProfile, irParaProduto} from "../routes/coordinato"
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()
  return (
    <section>
      <h1>Página inicial</h1>
      <button onClick={() => irParaHome(navigate)}>voltar a home</button>
      <button onClick={() => irParaPaginaProfile(navigate)}>ir para tela de profile</button>
      <button onClick={() => irParaProduto(navigate, "1")}>ver produto</button>
    </section>
  );
}

export default HomePage;
