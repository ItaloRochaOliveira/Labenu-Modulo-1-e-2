import { ListaDeCarro, TituloCarro, OrganizarBlocos, BotaoAdicionar, EspacoEntreLi } from "./style";

export function Carro(props) {
  console.log(props)
    return (
      <div>
        <TituloCarro>Meu carro</TituloCarro>
        <ListaDeCarro>
          <li><img src={props.imgCarro}></img></li>
          <OrganizarBlocos>
            <EspacoEntreLi>
            <li>Cor: {props.cor}</li>
            <li>Ano: {props.ano}</li>
            </EspacoEntreLi>
            <EspacoEntreLi>
            <li>Flex: {props.flex}</li>
            <BotaoAdicionar>{props.adicionadoPor}</BotaoAdicionar>
            </EspacoEntreLi>
          </OrganizarBlocos>
        </ListaDeCarro>
      </div>
    );
  }
  
