import React from "react";
import InfoUser from "../InfoUser/InfoUser";
import {Videos, ImagemVideo, SobreVideo} from "./style"

export default function CardVideo(props) {
  console.log(props.link)
  return (
    <Videos onClick={props.reproduzVideo}>
      <ImagemVideo src={props.link} alt="" />
      <SobreVideo className="about-video">
        <InfoUser infoUser={props.infoUser} />
        <h4>{props.titulo2}</h4>
      </SobreVideo >
    </Videos>
  );
}
