import React from "react"

export default function Login(){

    const login = {
        backgroundColor: '#ffb',
        height: '85vh',
        textAlign: 'center',
        color: 'orange'
    }

    return(
        <div style={login}>
            <h1>Página de Login</h1>
            <p>Página para o usuário fazer Login.</p>
        </div>
    )
}