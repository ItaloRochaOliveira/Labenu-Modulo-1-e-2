import React, {useState} from 'react'
import Cadastro from './Paginas/Cadastro/Cadastro'
import Home from './Paginas/Home/Home'

function App() {
  // lógica
  const [trocaTela, setTrocaTela] = useState("home")
  function eventoTrocaTela(){
    if(trocaTela === "home"){
      setTrocaTela("cadastro")
    } else {
      setTrocaTela("home")
    }
  }

  const [turma, setTurma] = useState("Conway")
  const [usuario, setUsuario] = useState({})
  function trocaNome () {
    console.log(turma)
    setTurma("Senway")
  }

  console.log(usuario)

  return (
    <>
    {/* o que aparece ao usuario */}

    {trocaTela === "home" ? <Home turma={turma} trocaNome={trocaNome}/> : <Cadastro turma={turma} setUsuario={setUsuario}/>}
    
    <hr />

    <button onClick={eventoTrocaTela}>Trocar as telas</button>
    
    </>
  )
}

export default App
