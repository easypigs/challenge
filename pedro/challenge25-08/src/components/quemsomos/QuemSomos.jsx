import React from "react"

export default function QuemSomos(){

    const quemsomos = {
        backgroundColor: '#ffb',
        height: '85vh',
        textAlign: 'center',
        color: 'orange'
    }

    return(
        <div style={quemsomos}>
            <h1>Página Quem Somos</h1>
            <p>Página para dizer quem somos.</p>
        </div>
    )
}