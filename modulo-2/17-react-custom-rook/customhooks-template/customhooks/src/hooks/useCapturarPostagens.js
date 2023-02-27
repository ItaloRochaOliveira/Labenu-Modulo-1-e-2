import axios from "axios";
import { useEffect, useState } from "react";

export function useCapturarPostagens(BASE_URL) {
    const [postagens, setPostagens] = useState([]);

    useEffect(() => {
    axios
        .get(`${BASE_URL}comments`)
        .then((response) => {
        setPostagens(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }, []);

    return postagens

}