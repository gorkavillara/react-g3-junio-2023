import { Component } from "react"

export default class ContadorClase extends Component<unknown> {
    state = {
        contador: 22,
        nombre: "Óscar"
    }

    // constructor(props: unknown) {
    //     super(props)
    //     this.incrementaContador = this.incrementaContador.bind(this)
    // }

    incrementaContador = () => {
        this.setState({
            ...this.state,
            contador: this.state.contador + 1
        })
    }

    render() {
        const { contador } = this.state
        return (
            <>
                <h1>Contador</h1>
                <p>Valor del contador: {contador}</p>
                <button onClick={this.incrementaContador}>Incrementa</button>
            </>
        )
    }
}
