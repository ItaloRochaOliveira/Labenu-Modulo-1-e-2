import { useNavigate } from "react-router-dom";

export const irParaPaginaInicial = (navigate) => {
    navigate("/")
}

export const irParaPerfil = (navigate, name) => {
    navigate(`/profile/${name}`)
}

export const irParaLoginPage = (navigator) => {
    navigator(`/login page`)
}