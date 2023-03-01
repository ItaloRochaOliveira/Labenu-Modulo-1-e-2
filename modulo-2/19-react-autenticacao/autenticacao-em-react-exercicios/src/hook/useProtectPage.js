import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"

export function useProtectPage() {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    
    useEffect(() => {
        if(!token){
        alert("Para continuar é necessário fazer o login")
        goToLogin(navigate)
        }
    }, [token, navigate])
}