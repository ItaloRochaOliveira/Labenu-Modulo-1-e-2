import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = ({
  urlImage,
  descriptionImage,
  title,
}) => {
  return (
    <ContainerPostagem>
            <Image src={urlImage === "" ? "https://camo.githubusercontent.com/437d1b427ece827075bed5e8f1915e002d8ca1a5698f1117e907b9b1b018c4f5/68747470733a2f2f692e696d67666c69702e636f6d2f3237657575322e6a7067" : urlImage} alt={descriptionImage}/>
            <h3>{title === "" ? "Seu titulo vai aqui!!!" : title}</h3>
            <Description>{descriptionImage === "" ? "Sua descrição vai aqui!!!" : descriptionImage}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem