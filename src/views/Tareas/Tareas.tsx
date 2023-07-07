import { useContext } from "react"
import { TareasContext } from "../../contexts/TareasContextProvider"

const Tareas = () => {
    const { tareas, completaTarea } = useContext(TareasContext)
    return (
        <div>
            {tareas.length > 0 && (
                <ul>
                    {tareas.map((tarea) => (
                        <li
                            key={tarea.id}
                            style={{ opacity: tarea.completado ? 0.25 : 1 }}
                        >
                            <span style={{ marginRight: 8 }}>
                                {tarea.texto}
                            </span>
                            <button
                                onClick={() => completaTarea(tarea.id)}
                                disabled={tarea.completado}
                            >
                                Completar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Tareas
