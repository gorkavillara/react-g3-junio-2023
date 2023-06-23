import { useEffect } from "react"

interface IProps { contador: number, mostrarH2?: boolean }

const CicloVidaFuncional = ({ contador, mostrarH2 = false }: IProps) => {

    useEffect(() => { // Equiv. componentDidMount
        console.log("El componente ha sido montado")
    }, [])

    useEffect(() => { // Equiv. componentDidUpdate (contador)
        // Este efecto se va a ejecutar
        console.log("El componente se ha actualizado")
        // calcular el nuevo precio
        // setEstadoPrecio(nuevoPrecio)
        console.log(`El contador vale ${contador}`)
    }, [contador])

    useEffect(() => {
        return () => {
            // va a ejecutarse cuando se desmonte
            console.log("Me estoy desmontando")
        }
    }, [])
    console.log(mostrarH2)
    return mostrarH2 ? <h2>Ciclo vida Funcional</h2> : null
}

export default CicloVidaFuncional