import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
  return (

    <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quemsomos">Quem Somos</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cadastrese">Cadastre-se</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    </header>
  )
}