import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
    const [users, setUsers] = useState([])
    console.log("aaa",users)
    const getUsers = async() => {
        try{
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, {
                headers: {
                    Authorization: "italo-oliveira-conway"
                }
            })
            setUsers(response.data)
            console.log(users)
        } catch{(erro) => {
            console.log(erro.response)
        }}
    }

    useEffect(()=> {
        getUsers()
    }, [])

    return(
        <GlobalContext.Provider value={{users}}>
            {children}
        </GlobalContext.Provider>
    )
}