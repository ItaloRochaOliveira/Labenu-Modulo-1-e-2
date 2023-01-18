import React from "react";
import InfoUser from "./InfoUser";

export default function CardVideo(props) {
  console.log(props)
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.link} alt="" />
      <div className="about-video">
        <InfoUser infoUser={props.infoUser} />
        <h4>{props.titulo}</h4>
      </div>
    </div>
  );
}
