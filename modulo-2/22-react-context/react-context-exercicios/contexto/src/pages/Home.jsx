import { Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import  CardUser  from "../component/Card";
import { GlobalContext } from "../context/GlobalContext";

export default function Home() {
    const {users} = useContext(GlobalContext)
    
    const [select, setSelect] = useState(null)
    return(
        <Flex>
            {users.map((user) => {
                return <CardUser user={user} select={user.id === select} setSelect={setSelect}/>
            })}
        </Flex>
    )
}