import React from "react";
import CardVideo from "./componentes/CardVideo";
import ines from "./img/ines.jfif"
import "./styles.css";


export default function App() {
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
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo 
            link={link1.link} 
            titulo={link1.titulo} 
            infoUser={link1.infoUser}/>

            <CardVideo
             link={link2.link}
             titulo={link2.titulo}
             infoUser={link2.infoUser}/>

            <CardVideo
             link={link3.link} 
             titulo={link3.titulo}
             infoUser={link3.infoUser}/>

            <CardVideo
             link={link4.link} 
             titulo={link4.titulo}
             infoUser={link4.infoUser}/>

            <CardVideo 
            link={link5.link} 
            titulo={link5.titulo}
            infoUser={link5.infoUser}/>

            <CardVideo 
            link={link6.link} 
            titulo={link6.titulo}
            infoUser={link6.infoUser}/>

            <CardVideo 
            link={link7.link}
             titulo={link7.titulo}
             infoUser={link7.infoUser}/>

            <CardVideo
             link={link8.link}
              titulo={link8.titulo}
              infoUser={link8.infoUser}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
