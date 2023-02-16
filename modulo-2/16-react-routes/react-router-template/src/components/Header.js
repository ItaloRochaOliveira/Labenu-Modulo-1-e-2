import {StyledHeader, StyledButton} from "../style"
import { useNavigate } from "react-router-dom";
import { irParaLoginPage, irParaPaginaInicial, irParaPerfil } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate()

  // const irParaPaginaInicial = () => {
  //   navigate("/")
  // }

  // const irParaPerfil = (name) => {
  //   navigate(`/profile/${name}`)
  // }

  return (
    <StyledHeader>
      <StyledButton >
        <button onClick={() => irParaPaginaInicial(navigate)}>Ir para página inicial</button>
      </StyledButton>
      <StyledButton >
        <button onClick={() => irParaPerfil(navigate, "conway")}>Ir para página de perfil</button>
      </StyledButton>
      <StyledButton onClick={() => irParaLoginPage(navigate)}>
        ir para pagina de login
        </StyledButton>
    </StyledHeader>
  );
}

export default Header;
