import { useState } from "react"

const ContadorFuncional = () => {
    const [contador, setContador] = useState(1)
    // console.log(estado)

    // const valorEstado = estado[0]
    // const funcionCambiarEstado = estado[1]

    // let contador = 0
    const incrementaContador = () => {
        // setContador(contador + 1)
        // setContador(contador + 1)
        // setContador(contador + 1)
        
        setContador((valorAnterior) => valorAnterior + 1)
        setContador((valorAnterior) => valorAnterior + 1)
        setContador((valorAnterior) => valorAnterior + 1)


        // funcionCambiarEstado(valorEstado + 1)
        // console.log("He hecho click")
        // contador++
        // console.log(contador)
    }
    return (
        <>
            <h1>Contador</h1>
            <p>Valor del contador: {contador}</p>
            <button onClick={incrementaContador}>Incrementa</button>
        </>
    )
}

export default ContadorFuncional
