import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastre from "./cadastrese/Cadastrese"
import Contato from "./contato/Contato"
import Home from "./home/Home"
import Login from "./login/Login"
import Menu from "./menu/Menu"
import Produtos from "./produtos/Produtos"
import QuemSomos from "./quemsomos/QuemSomos"
import Servicos from "./servicos/Servicos"

export default function App() {

    return (
        <>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/quemsomos" element={<QuemSomos/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastrese" element={<Cadastre/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </>
        
    )
}