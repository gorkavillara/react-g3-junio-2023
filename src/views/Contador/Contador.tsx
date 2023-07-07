import useContador from "../../hooks/useContador"
import Monitor from "./Monitor"

const Contador = () => {
    const { contador, incrementaContador, incrementaCinco } = useContador()
    return (
        <div>
            <Monitor valor={contador} />
            <button onClick={incrementaContador}>Incrementa</button>
            <button onClick={incrementaCinco}>Incrementa 5</button>
        </div>
    )
}

export default Contador
