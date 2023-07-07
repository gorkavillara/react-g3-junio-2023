interface Tarea {
    id: number
    texto: string
    completado: boolean
}
type TareasActionType = "completaTarea" | "eliminaTarea" | "nuevaTarea"

export const tareasIniciales = [
    { id: 0, texto: "Bajar la basura", completado: false },
    { id: 1, texto: "Comprar la comida", completado: false },
    { id: 2, texto: "Llamar a mi hermana", completado: false },
    { id: 3, texto: "Sacar al perro", completado: false },
    { id: 4, texto: "Aprender React", completado: false },
]

const tareasReducer = (
    state: Tarea[],
    action: { type: TareasActionType; payload: unknown }
) => {
    if (action.type === "completaTarea") {
        if (typeof action.payload !== "number") return
        const id = action.payload
        return state.map((tarea) =>
            tarea.id === id ? { ...tarea, completado: true } : tarea
        )
    }
    if (action.type === "nuevaTarea") {
        const nuevaTarea = action.payload as Tarea
        return { ...state, nuevaTarea }
    }
    return state
}

export default tareasReducer