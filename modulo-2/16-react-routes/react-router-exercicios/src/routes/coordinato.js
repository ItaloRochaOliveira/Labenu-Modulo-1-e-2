const irParaPaginaProfile = (navigate) => {
    navigate("/profile")
}

const irParaHome = (navigate) => {
    navigate("/")
}

const irParaProduto = (navigate, id) => {
    navigate(`/product/${id}`)
}

export {irParaPaginaProfile, irParaHome, irParaProduto}