import axios from "axios";
import React, {  useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";
import styled from "styled-components";

const playlistsLocal = [
    {
        id: 1,
        name: "Playlist 1"
    },
    {
        id: 2,
        name: "Playlist 2"
    },
    {
        id: 3,
        name: "Playlist 3"
    },
    {
        id: 4,
        name: "Playlist 4"
    },
]

const EspacoEntreItens = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
`

function Playlists() {
    const [playlists, setPlaylists] = useState([])
    const [pesquisa, setPesquisa] = useState("")
    const [nomePlaylist, setNomePlaylist] = useState("")

    const headers = {headers: {
        Authorization: "italo-oliveira-conway"
    }}

    const criarPlaylist = async() => {
        try{
            await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
            name: nomePlaylist
        },
        headers)

        chamarPlaylist()
        } catch(erro){
            console.log(erro.response)
        }
    }
    
    const chamarPlaylist = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", headers)
        .then((resposta) => {
            console.log(resposta.data.result.list)
            setPlaylists(resposta.data.result.list)
        })
        .catch((erro) => {
            console.log(erro.response)
        })
    }

    const pesquisarPlaylist = async(e) => {
        setPesquisa(e)
        try {
            if(e){
                const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${e}`, headers)
                setPlaylists(response.data.result.playlist)
            } else {
                chamarPlaylist()
            }
        } catch(erro){
            console.log(erro.response)
        }
    }

    
    
    useEffect(() => {
        chamarPlaylist()
    }, [])
  
    return (
        <>
            <EspacoEntreItens>
                <input value={nomePlaylist} onChange={(e) => setNomePlaylist(e.target.value)}/>
                <button onClick={criarPlaylist}>criar playlist</button>
            </EspacoEntreItens>
            <br />
            <EspacoEntreItens>
                <label>
                    Pesquisar:
                    <input value={pesquisa} onChange={(e) => pesquisarPlaylist(e.target.value)}/>
                </label>
            
            </EspacoEntreItens>
            <div>
                {playlists.map((playlist) => {
                    return <Musicas key={playlist.id} playlist={playlist} headers={headers} chamarPlaylist={chamarPlaylist}/>
                })}

            </div>
        </>
    );
}

export default Playlists;
