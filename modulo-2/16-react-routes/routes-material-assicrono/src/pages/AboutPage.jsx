import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AboutPage() {
    const navigate = useNavigate()
    const params = useParams()

    console.log(params)
    const goToHomePage = () => {
        navigate("/")
    }
    const goBack = () => {
        navigate(-1)
    }
    return(
        <>
            <p>about Pages...</p>

            {params.language === "PT-BR" ? "Texto em português" : "Text in inglesh"}

            <button onClick={goToHomePage}>Página home</button>
            <button onClick={goBack}>Voltar</button>
        </>
    )
}