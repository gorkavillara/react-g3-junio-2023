import "./App.css"
import SaludoClase from "./components/SaludoClase"
import SaludoFuncional from "./components/SaludoFuncional"

function App() {
    return (
        <div>
            {/* <Saludo nombre="Diego" /> */}
            <img src="" alt="" />
            <SaludoClase nombre="Raúl" edad={28} />
            <SaludoFuncional nombre="Toni" edad={32} />
        </div>
    )
}

export default App
