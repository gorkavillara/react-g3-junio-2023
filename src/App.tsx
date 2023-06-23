import { useState } from "react"
import "./App.css"
import CicloVidaClase from "./components/CicloVidaClase"
import CicloVidaFuncional from "./components/CicloVidaFuncional"

function App() {
    const [contador, setContador] = useState(0)
    const mostrar = contador <= 5 || contador > 10

    const elementoMostrar = mostrar ? <CicloVidaClase contador={contador} /> : null

    const variableMostrar = Math.random() > 0.5
    return (
        <div>
            {/* {elementoMostrar} */}
            {/* <button onClick={() => setContador(contador + 1)}>Incrementa</button> */}
            <button
                onClick={() =>
                    setContador((valorAnterior) => valorAnterior + 1)
                }
            >
                Incrementa
            </button>
            <h1 onClick={() => null}>prueba</h1>
            {mostrar && <CicloVidaFuncional contador={contador} />}
        </div>
    )
}

export default App
