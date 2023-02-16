import HomePage from "../pages/HomePage"
import AboutPage from '../pages/AboutPage'
import ErroPage from '../pages/ErroPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />}/>
                    <Route path='about/:language' element={<AboutPage />}/>
                    <Route path='*' element={<ErroPage />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}