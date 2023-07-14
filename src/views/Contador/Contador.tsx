import { useState, useMemo, useCallback, memo } from "react"
import { MonitorMemo } from "./Monitor"
import Controles from "./Controles"

const Monitor = memo(MonitorMemo)

const obtenDoble = (numero: number) => {
    let suma = 0
    for (let i = 0; i < 12345678; i++) {
        suma++
    }
    return numero * 2
}

const Contador = () => {
    const [contador, setContador] = useState(0)
    const [toggle, setToggle] = useState(true)

    const dobleContador = useMemo(() => obtenDoble(contador), [contador]) 

    const decrementa = useCallback(() => setContador((prev) => prev - 1), [])
    const incrementa = useCallback(() => setContador((prev) => prev + 1), [])

    // const decrementa = useCallback(() => setContador(contador - 1), [contador])
    // const incrementa = useCallback(() => setContador(contador + 1), [contador])

    return (
        <div>
            <h2>Contador</h2>
            <button onClick={() => setToggle((prev) => !prev)}>
                {toggle ? "On" : "Off"}
            </button>
            <Monitor contador={dobleContador} />
            <Controles
                decrementa={decrementa}
                incrementa={incrementa}
            />
        </div>
    )
}

export default Contador
