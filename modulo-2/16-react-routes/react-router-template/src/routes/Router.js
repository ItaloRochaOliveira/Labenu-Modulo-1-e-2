import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErroPage } from "../pages/ErroPage";
import HomePage from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/profile/:name" element={<ProfilePage />}/>
                <Route path="/login page" element={<LoginPage />}/>
                <Route path="*" element={<ErroPage />}/>
            </Routes>
        </BrowserRouter>
    )
}