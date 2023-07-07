import { useState, createContext, PropsWithChildren } from "react"

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
    const [tareas, setTareas] = useState<Tarea[]>([
        { id: 0, texto: "Bajar la basura", completado: false },
        { id: 1, texto: "Comprar la comida", completado: false },
        { id: 2, texto: "Llamar a mi hermana", completado: false },
        { id: 3, texto: "Sacar al perro", completado: false },
        { id: 4, texto: "Aprender React", completado: false },
    ])

    const completaTarea = (id: number) =>
        setTareas((prevTareas) =>
            prevTareas.map((tarea) =>
                tarea.id === id ? { ...tarea, completado: true } : tarea
            )
        )

    return <TareasContext.Provider value={{ tareas, completaTarea }} children={children} />
}

export default TareasContextProvider
