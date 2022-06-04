import React, { useState } from 'react'
import './App.css'

function App() {
    
    const [contador, setContador] = useState(0)

    function handleClick(operacao) {
        if (operacao == 'incrementar')
            setContador(contador + 1)
        else if (operacao == 'decrementar')
            setContador(contador - 1)
        else
            console.error('Um erro ocorreu na função handleClick(): Operação não suportada');
    }

    // function handleDecrementar() {
    //     setContador(contador - 1)
    // }

    return (
        <div id="App">
            <h1 className="font-xxx-large">Countador</h1>
            <span className="font-xxx-large" id="placeholder">{contador}</span>
            <div>
                <button  className="font-large" id="incrementar" onClick={() => handleClick('incrementar')}>Incrementar</button>
                <button  className="font-large" id="decrementar" onClick={() => handleClick('decrementar')}>Decrementar</button>
            </div>
        </div>
    )   
}

export default App