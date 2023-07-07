import { useState } from "react"

const useContador = (initialValue = 0) => {
    const [contador, setContador] = useState(initialValue)

    const incrementaContador = () => setContador(prev => prev + 1)

    const incrementaCinco = () => setContador(prev => prev + 5)

    return { contador, incrementaContador, incrementaCinco }
}

export default useContador
