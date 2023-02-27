import axios from "axios";
import { useEffect, useState } from "react";

export function useCapturarNomes(BASE_URL){
    const [nomeUsuarios, setNomeUsuarios] = useState([]);

    useEffect(() => {
        axios
        .get(`${BASE_URL}users`)
        .then((response) => {
            setNomeUsuarios(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return nomeUsuarios
}