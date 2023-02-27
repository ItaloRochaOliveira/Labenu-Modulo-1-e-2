import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useRequestData } from "./hooks/useRequestData";
import { useRequestDataHarry } from "./hooks/useRequestDataHarry";
function App() {

 const [nomeUsuarios, isLoadingUser, erroUser] = useRequestData(BASE_URL, "users")
  const [postagens, isLoadingPost, erroPost] = useRequestData(BASE_URL, "comments")

  const [nomePersonagem, isLoadingNomePersonagem, erroNomePersonagem] = useRequestDataHarry(`https://hp-api.onrender.com/api/characters`)

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoadingUser && <p>carregando usuarios...</p>}
        {!isLoadingUser && erroUser && <p>erro ao carregar lista</p>}
        {!isLoadingUser && nomeUsuarios.length > 0 && nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
      {
      erroPost ? (
        <p>erro de requisição</p>
      ) :
      
      !isLoadingPost ? (
        postagens.map((post) => {
          //console.log(post);
          return(
            <Card 
            key={post.id} 
            text={post.body} 
            backgroudColor={'#1dc690'}
            textColor={'#ffffff'}
            />)
        })
      ): <p>carregando posts...</p>}
      {}
      </PostContainer>

      <hr />
        <Title></Title>
        <NameContainer>
          {isLoadingNomePersonagem && <p>Carregando personagem...</p>}
          {!isLoadingNomePersonagem && erroNomePersonagem && <p>erro...</p>}
          {!isLoadingNomePersonagem && nomePersonagem.length > 0 && nomePersonagem.map((personagem) => <Card text={personagem.name} />)}
        </NameContainer>

    </div>
  );
}

export default App;



