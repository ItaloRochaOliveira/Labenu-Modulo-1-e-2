import axios from "axios";
import React, {  useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";

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



function Playlists() {
    const [playlists, setPlaylists] = useState([])

    const headers = {headers: {
        Authorization: "italo-oliveira-conway"
    }}
    
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
    
    useEffect(() => {
        chamarPlaylist()
    }, [])
  
    return (
        <div>
            {playlists.map((playlist) => {
                return <Musicas key={playlist.id} playlist={playlist} headers={headers} chamarPlaylist={chamarPlaylist}/>
            })}

        </div>
    );
}

export default Playlists;
