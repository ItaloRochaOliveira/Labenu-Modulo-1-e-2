import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProdutoPage from "../pages/Produto";
import ProfilePage from "../pages/ProfilePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/profile" element={<ProfilePage />}/>
                <Route path="/product/:id" element={<ProdutoPage />} />
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}