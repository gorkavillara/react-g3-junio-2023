import "./App.scss"
import Contador from "./views/Contador/Contador"

function App() {
    const entorno = import.meta.env.MODE
    return (
        <>
            <h3>{import.meta.env.VITE_APP_NAME}</h3>
            <Contador />
            <p>Entorno: {entorno}</p>
            <p>API Url: {import.meta.env.VITE_API_URL}</p>
        </>
    )
}

export default App
