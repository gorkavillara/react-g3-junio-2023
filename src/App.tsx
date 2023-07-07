import "./App.scss"
import Tareas from "./views/Tareas/Tareas"
import TareasContextProvider from "./contexts/TareasContextProvider"

function App() {
    return (
        <div>
            <h3>Lista de tareas</h3>
            <TareasContextProvider>
                <Tareas />
            </TareasContextProvider>
        </div>
    )
}

export default App
