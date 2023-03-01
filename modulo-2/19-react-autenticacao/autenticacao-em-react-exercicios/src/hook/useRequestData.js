import axios from "axios"
import { useNavigate } from "react-router-dom"
import { goToFeed } from "../routes/coordinator"

export function useRequestData(path, body) {
    const navigate = useNavigate()
    const retornarData = () => {
        axios
    .post(`https://api-cookenu.onrender.com/user/${path}`, body)

    .then((resp) => {
      console.log(resp)
      localStorage.setItem("token", resp.data.token)
      goToFeed(navigate)
    })

    .catch((err) => {
      console.log(err)
      alert(err.response.data.message)
    })
    }
    return retornarData
}