import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Botao, ContainerInputs, ContainerMusicas, InputMusica, Musica } from './styled'

const musicasLocal = [{
    artist: "Artista 1",
    id: "1",
    name: "Musica1",
    url: "http://spoti4.future4.com.br/1.mp3"
},
{
    artist: "Artista 2",
    id: "2",
    name: "Musica2",
    url: "http://spoti4.future4.com.br/2.mp3"
},
{
    artist: "Artista 3",
    id: "3",
    name: "Musica3",
    url: "http://spoti4.future4.com.br/3.mp3"
}]

export default function Musicas(props) {
    const [musicas, setMusicas] = useState([])

    const [artista, setArtista] = useState("")
    const [nomeDaMusica, setNomeDaMusica] = useState("")
    const [url, setUrl] = useState("")

    const chamarMusicas = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`, props.headers)
        .then((resposta) => {
            console.log(resposta.data.result.tracks)
            setMusicas(resposta.data.result.tracks)
        })
        .catch((erro) => {
            console.log(erro.response)
        })
    }

    const adicionaMusica = (novaMusica) => {
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`, novaMusica, props.headers)
        .then(() => {
            chamarMusicas()
        })
        .catch((erro) => {
            alert(erro.response.data.message)
        })
    }

    const excluirMusica = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks/${id}`, props.headers)
        .then(() => {
            chamarMusicas()
        })
        .catch((erro) => {
            console.log(erro.response)
        })
    }

    const excluirPlaylist = async() => {
        try{
            await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}`, props.headers)
            props.chamarPlaylist()
        } catch(erro){
            console.log(erro.response)
        }
    }

    useEffect(()=> {
        chamarMusicas()
    },
    [])

    return (
        <ContainerMusicas>
            <h2>{props.playlist.name}</h2>
            {musicas.map((musica) => {
                return (
                    <Musica key={musica.id}>
                        <h3>{musica.name} - {musica.artist}</h3>
                        <audio src={musica.url} controls />
                        <button onClick={() => excluirMusica(musica.id)}>X</button>
                    </Musica>)
            })}
            <ContainerInputs>
                <InputMusica placeholder="artista" value={artista} onChange={(e) => setArtista(e.target.value)}/>
                <InputMusica placeholder="musica" value={nomeDaMusica} onChange={(e) => setNomeDaMusica(e.target.value)}/>
                <InputMusica placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
                <Botao onClick={() => adicionaMusica({
                    name: nomeDaMusica,
                    artist: artista,
                    url: url
                })}>Adicionar musica</Botao>
            </ContainerInputs>
            <div><button onClick={() => excluirPlaylist()}>excluir</button></div>
        </ContainerMusicas>
    )
}

