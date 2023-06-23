import { Component } from "react"

export default class CicloVidaClase extends Component<{ contador: number }> {
    componentDidMount(): void {
        console.log("El componente ha sido montado")
        // Utilizar este método para hacer llamadas a APIs y cambiar el estado en consecuencia
    }
    shouldComponentUpdate(nextProps: Readonly<{ contador: number }>): boolean {
        const { contador: nextContador } = nextProps

        // if (nextContador % 2 === 0) return true
        // return false

        return nextContador % 2 === 0
    }
    componentDidUpdate() {
        console.log("El componente ha sido actualizado")
        // Suele utilizarse para realizar efectos secundarios
    }
    componentWillUnmount() {
        console.log("El componente va a desmontarse")
        // Suele utilizarse para eliminar listeners y efectos permanentes
    }
    render() {
        const { contador } = this.props
        return <div>Contador: {contador}</div>
    }
}
