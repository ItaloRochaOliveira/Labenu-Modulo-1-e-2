import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider, Flex, Stack } from '@chakra-ui/react';
import Card from './components/Card';
import { data } from "./data/data"
import { useState } from 'react';

function App() {
  const [produtos, setProdutos] = useState(data)
  const confirm = () => {
    console.log("funcionou")
  }
  return (
    <ChakraProvider resetCSS>
      {produtos.map((produto) => {
        return(
        <Flex key={produto.id} direction="column">
          <Card produto={produto}/>
          <Stack align={"center"}>
          <Button color={"white"} bg="blue" onClick={confirm}>conferir se está funcionando</Button>
          </Stack>
        </Flex>
        )
      })}
    </ChakraProvider>
  );
}

export default App;
