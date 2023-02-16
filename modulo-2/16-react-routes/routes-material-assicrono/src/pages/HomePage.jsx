import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate()

    const goToAboutPage = (language) => {
        navigate(`/about/${language}`)
    }
    return(
        <>
            <p>Home Pages...</p> 
            
            <button onClick={() => goToAboutPage("PT-BR")}>Página sobre - PT-BR</button>
            <button onClick={() => goToAboutPage("EN")}>Página sobre - EN</button>
            <br />
        </>
    )
}