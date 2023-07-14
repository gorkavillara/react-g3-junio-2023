import { memo } from "react"

const calculoMuyGrande = () => {
    const suma = 0
    // for (let i = 0; i < 123456789; i++) {
    //     suma++
    // }
    return suma
}

const MonitorBase = ({ contador }: { contador: number }) => {
    calculoMuyGrande()
    return <p>El valor del contador es {contador}</p>
}

const MonitorMemo = memo(MonitorBase)

export default MonitorBase
export { MonitorMemo }
