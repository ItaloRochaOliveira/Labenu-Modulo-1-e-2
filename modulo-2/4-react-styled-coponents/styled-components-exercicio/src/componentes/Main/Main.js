import React from "react";
import CardVideo from "./CardVideo/CardVideo";
import {MenuPrincipal, MenuVertical, BotoesVerticais, PainelVideos} from "./style"

export default function Main(props){
    return (
        <MenuPrincipal>
          <MenuVertical>
            <ul>
              <BotoesVerticais>Início</BotoesVerticais>
              <BotoesVerticais>Em alta</BotoesVerticais>
              <BotoesVerticais>Inscrições</BotoesVerticais>
              <hr />
              <BotoesVerticais>Originais</BotoesVerticais>
              <BotoesVerticais>Histórico</BotoesVerticais>
            </ul>
          </MenuVertical>

          <PainelVideos>
            <CardVideo 
            link={props.link1.link} 
            titulo={props.link1.titulo} 
            infoUser={props.link1.infoUser}
            
            titulo2 = {props.titulo}
            reproduzVideo = {props.reproduzVideo}
            />

            <CardVideo
             link={props.link2.link}
             titulo={props.link2.titulo}
             infoUser={props.link2.infoUser}
             
             titulo2 = {props.titulo}
            reproduzVideo = {props.reproduzVideo} 
             />

            <CardVideo
             link={props.link3.link} 
             titulo={props.link3.titulo}
             infoUser={props.link3.infoUser}
             
             titulo2 = {props.titulo}
            reproduzVideo = {props.reproduzVideo}
             />

            <CardVideo
             link={props.link4.link} 
             titulo={props.link4.titulo}
             infoUser={props.link4.infoUser}
             
             titulo2 = {props.titulo}
            reproduzVideo = {props.reproduzVideo}
            />

            <CardVideo 
            link={props.link5.link} 
            titulo={props.link5.titulo}
            infoUser={props.link5.infoUser}
            
            titulo2 = {props.titulo}
            reproduzVideo = {props.reproduzVideo}
            />

            <CardVideo 
            link={props.link6.link} 
            titulo={props.link6.titulo}
            infoUser={props.link6.infoUser}
            
            titulo2 = {props.titulo}
            reproduzVideo = {props.reproduzVideo}
            />

            <CardVideo 
            link={props.link7.link}
             titulo={props.link7.titulo}
             infoUser={props.link7.infoUser}
             
             titulo2 = {props.titulo}
            reproduzVideo = {props.reproduzVideo}
            />

            <CardVideo
             link={props.link8.link}
              titulo={props.link8.titulo}
              infoUser={props.link8.infoUser}
              
              titulo2 = {props.titulo}
            reproduzVideo = {props.reproduzVideo}
            />
          </PainelVideos>
        </MenuPrincipal>
    )
}