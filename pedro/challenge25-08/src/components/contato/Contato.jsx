import React from "react"

export default function Contato(){

    const contato = {
        backgroundColor: '#ffb',
        height: '85vh',
        textAlign: 'center',
        color: 'orange'
    }

    return(
        <div style={contato}>
            <h1>Página para Contato</h1>
            <p>Página para caso o usuário deseje entrar em contato conosco.</p>
        </div>
    )
}