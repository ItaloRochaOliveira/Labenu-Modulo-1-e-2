import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useRequestData(estadoInicial, path, headers) {
  console.log(headers)
    const [dados, setDados] = useState(estadoInicial)
    const recebeDados = () => {

        const aluno = 'italo-oliveira-conway'//coloque aqui o nome que você criou no começo da aula
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}${path}`, headers)
          .then((res) => {
            setDados(res.data)
            console.log(res.data)
          })
          .catch((err) => { 
            console.log(err.response);
          })
      }
      useEffect(() => {
        recebeDados()
      }, [])
  return [dados]
}
