import { Component } from "react"

type Props = {
    nombre: string
    edad: number
}

export default class SaludoClase extends Component<Props> {
    render() {
        // const nombre = this.props.nombre
        // const edad = this.props.edad
        const { nombre, edad } = this.props
        console.log({ nombre })
        return <div>Hola {nombre}, tienes {edad} años</div>
    }
}
