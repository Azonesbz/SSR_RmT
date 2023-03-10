import React, { useState } from 'react'

export function App(){
    const [n, setN] = useState(0)

    const increment = () => {
        setN(n => n + 1)
    }
    return (
        <div>
            <h1>Incrementr</h1>
            <span>{n}</span>
            <button onClick={increment}>Ajouter 1</button>
        </div>
    )
}