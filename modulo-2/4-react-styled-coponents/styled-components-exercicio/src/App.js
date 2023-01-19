import React from "react";
import Header from "./componentes/Header/Header"
import Main from "./componentes/Main/Main"
import Footer from "./componentes/Footer/Footer"
import ines from "./img/ines.jfif"
import "./styles.css";


export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  const link1 = {
  link:"https://picsum.photos/400/400?a=1", 
  titulo: "derik, meu deus",
  infoUser:{
    user: "user",
    img: "https://i.pravatar.cc/150?img=1"
  }}
  const link2 = {link:"https://picsum.photos/400/400?a=2",
   titulo: "hi lorena",
   infoUser:{
    user: "user",
    img: "https://i.pravatar.cc/150?img=2"
  }}
  const link3 = {link:"https://picsum.photos/400/400?a=3",
   titulo: "ta relampangejando",
   infoUser:{
    user: "user",
    img: "https://i.pravatar.cc/150?img=3"
  }}
  const link4 = {link: "https://picsum.photos/400/400?a=4",
   titulo: "e acharam que eu estava na pior...",
   infoUser:{
    user: "user",
    img: "https://i.pravatar.cc/150?img=4"
  }}
  const link5 = {
    link: ines,
   titulo: "pela criança eu dou a minha vida",
   infoUser:{
    user: "user",
    img: "https://i.pravatar.cc/150?img=5"
  }}
  const link6 = {link:"https://picsum.photos/400/400?a=6",
   titulo: "yukê",
   infoUser:{
    user: "user",
    img: "https://i.pravatar.cc/150?img=6"
  }}
  const link7 = {link:"https://picsum.photos/400/400?a=7",
   titulo: "afaba",
   infoUser:{
    user: "user",
    img: "https://i.pravatar.cc/150?img=7"
  }}
  const link8 = {link:"https://picsum.photos/400/400?a=8",
   titulo: "meu deus, jesus",
   infoUser:{
    user: "user",
    img: "https://i.pravatar.cc/150?img=8"
  }}

  return (
    <div>
      <div className="tela-inteira">
        <Header />

        <Main 
        link1={link1}
        link2={link2}
        link3={link3}
        link4={link4}
        link5={link5}
        link6={link6}
        link7={link7}
        link8={link8}

        titulo = {titulo}
        reproduzVideo = {reproduzVideo}
        />

        <Footer />
      </div>
    </div>
  );
}
