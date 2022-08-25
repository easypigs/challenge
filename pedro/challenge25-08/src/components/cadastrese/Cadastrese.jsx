import React from "react"

export default function Cadastrese(){

    const cadastrese = {
        backgroundColor: '#ffb',
        height: '85vh',
        textAlign: 'center',
        color: 'orange'
    }

    return(
        <div style={cadastrese}>
            <h1>Página de Cadastro</h1>
            <p>Página para o usuário se cadastrar.</p>
        </div>
    )
}