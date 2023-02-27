import axios from "axios";
import { useEffect, useState } from "react";

export function useRequestDataHarry(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [erro, setErro] = useState(false)

    useEffect(() =>{
        setIsLoading(true)
        axios.get(url)
        .then((response) => {
            setTimeout(()=>{
                console.log(response.data)
                setData(response.data)
                setIsLoading(false)
            }, 2000)
        })
        .catch((erro) => {
            console.log(erro.response)
            setIsLoading(false)
            setErro(true)
        })
    },[url])

    console.log(data)
    return [data, isLoading, erro]
}