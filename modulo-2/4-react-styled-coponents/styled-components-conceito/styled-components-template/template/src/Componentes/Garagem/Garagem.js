import { Carro } from "../Carro/Carro";
import {Button, GaragemContainer, Estacionamento} from "./style"

export function Garagem(props) {
  console.log(props.carro)
  return (
    <GaragemContainer>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={()=>props.mensagemAprentacao(props.nome)}>Mensagem</Button>

      <Estacionamento>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} imgCarro = {props.imgCarro}/>
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"} imgCarro = {props.imgCarro} />
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} imgCarro = {props.imgCarro}/>
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} imgCarro = {props.imgCarro}/>
      </Estacionamento>
    </GaragemContainer>
  );
}
