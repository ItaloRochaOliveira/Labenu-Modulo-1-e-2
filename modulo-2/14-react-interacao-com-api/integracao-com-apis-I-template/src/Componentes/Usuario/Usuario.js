import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const User = styled.div`
  border: black 1px solid;
  margin-top: 10px;
  width: 350px
`
function Usuario(props) {
  console.log(props)
  const [usuario, setUsuario] = useState(props.usuario);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  const headers = {headers: {
    Authorization: "italo-oliveira-conway"
  }}

  const recebeUsuariosPorId = (id) => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
  headers)
    .then((resposta) => {
      console.log(resposta.data)
      setUsuario(resposta.data)
    })
    .catch((erro) => {
      console.log(erro.response.data)
      alert(erro.response.data.message)
    })
  }

    useEffect(() => {
      recebeUsuariosPorId(usuario.id)
    }, [])

  return (
    <User>
      {editar ? (
        <div>
          <p>Nome:{usuario.name}</p>
          <p>E-mail:{usuario.email}</p>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button>Enviar alterações</button>
        </div>
      ) : (
        <>
          <p>Nome:{usuario.name}</p>
          <p>E-mail:{usuario.email}</p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button>Excluir</button>
    </User>
  );
}

export default Usuario;
