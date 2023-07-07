import {
    useReducer,
    createContext,
    PropsWithChildren,
    ReducerAction,
} from "react"
import tareasReducer, { tareasIniciales } from "../features/tareasReducer"

interface Tarea {
    id: number
    texto: string
    completado: boolean
}

interface ProviderValues {
    tareas: Tarea[]
    completaTarea: (id: number) => void
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const TareasContext = createContext<ProviderValues>(null!)

function TareasContextProvider({ children }: PropsWithChildren) {
    const [tareas, dispatchTareas] = useReducer(tareasReducer, tareasIniciales)

    const completaTarea = (id: number) => {
        dispatchTareas({ type: "completaTarea", payload: id })
    }

    const nuevaTarea = async (tarea: Tarea[]) => {
        // Llamada a una api -> nueva tarea
        // const respuesta = await axios.post(......)
        dispatchTareas({ type: "nuevaTarea", payload: tarea })
    }

    return (
        <TareasContext.Provider
            value={{ tareas, completaTarea }}
            children={children}
        />
    )
}

export default TareasContextProvider
