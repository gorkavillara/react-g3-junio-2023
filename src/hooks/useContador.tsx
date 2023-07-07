import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../app/store"
import { incrementa, incrementaX } from "../features/contador/contadorSlice"

const useContador = () => {
    const contador = useSelector((state: RootState) => state.contador)
    const dispatch = useDispatch()

    const incrementaContador = () => {
        dispatch(incrementa())
    }

    const incrementaCinco = () => {
        dispatch(incrementaX(5))
    }

    return { contador, incrementaContador, incrementaCinco }
}

export default useContador
