import "./App.css"
import ComponenteClase from "./components/ComponenteClase"
import ComponenteFuncional, {
    ComponenteSecundario,
    miVariable,
} from "./components/ComponenteFuncional"

const miElemento = <p>Mi nombre es Gorka</p>

const MiComponente = () => {
    return <h2>Este es mi componente</h2>
}

function App() {
    return (
        <div>
            {miElemento}
            <MiComponente />
            <ComponenteFuncional />
            <ComponenteSecundario />
        </div>
    )
}

export default App
