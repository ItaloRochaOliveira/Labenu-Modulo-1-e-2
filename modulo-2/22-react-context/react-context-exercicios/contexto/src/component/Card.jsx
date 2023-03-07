import { Button, CardBody, CardHeader, Heading, Card, CardFooter, Text } from "@chakra-ui/react";
import { useState } from "react";


export default function CardUser ({
    user,

    select,
    setSelect
}) {

    return(
        <Card 
        onClick={() => setSelect(user.id)}
        border={select ? "1px solid black" : "1px solid transparent"}
        >
            <CardHeader>
                <Heading size='md'>{user.name}</Heading>
            </CardHeader>
            <CardBody>
                <Text>id: {user.id}</Text>
            </CardBody>
            <CardFooter>
                <Button>click here</Button>
            </CardFooter>
        </Card>
    )
}