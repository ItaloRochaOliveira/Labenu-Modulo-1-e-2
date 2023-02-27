import axios from "axios";
import { useEffect, useState } from "react";

export function useRequestData(BASE_URL, path) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [erro, setErro] = useState(false)
 
    useEffect(() => {
    setIsLoading(true)
    axios
        .get(`${BASE_URL}${path}`)
        .then((response) => {
        
        

        //colocar um atraso pro loading da false
        setTimeout(()=> {
            setIsLoading(false)
            setData(response.data);}, 2000)
        })

        //não é indicado colocar...
        .catch((error) => {
        console.log(error);
        setIsLoading(false)
        setErro(true)
        });
    }, [path]);

    return [data, isLoading, erro]

}