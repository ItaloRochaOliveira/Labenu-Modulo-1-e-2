import { Center, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };
  console.log(users)

  return (
    <ChakraProvider resetCSS>
      <Flex gap={"30px"} wrap="wrap" align={"center"}>
        {users.map((user) => {
          return <Card key={user.name} user={user}/>
        })}
      </Flex>
      
    </ChakraProvider>
  );
}
