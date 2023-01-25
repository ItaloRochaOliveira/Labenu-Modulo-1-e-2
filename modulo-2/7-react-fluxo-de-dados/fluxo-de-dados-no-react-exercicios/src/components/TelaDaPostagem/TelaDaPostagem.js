import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({
  post
}) => {

  return (
    <>
    <ContainerPostagem>
      <TitleHeader>{post.title === "" ? "Um titulo" : post.title}</TitleHeader>
      <Image src={post.image === "" ? "https://picsum.photos/536/354" : post.image} />
      <Description>{post.description === "" ? "Uma descrição": post.description}</Description>
    </ContainerPostagem>
    </>
  );
};

export default TelaDaPostagem;
