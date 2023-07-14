import { memo } from "react"

interface IProps {
    decrementa: () => void
    incrementa: () => void
}

const Controles = memo(({ decrementa, incrementa }: IProps) => {
    return (
        <div style={{ display: "flex", gap: "1rem" }}>
            <button onClick={decrementa}>Decrementa</button>
            <button onClick={incrementa}>Incrementa</button>
        </div>
    )
})

export default Controles
