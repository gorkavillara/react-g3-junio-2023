import "./App.scss"
import Contador from "./views/Contador/Contador"
import RickMorty from "./views/RickMorty/RickMorty"

function App() {
    const entorno = import.meta.env.MODE
    return (
        <>
            <RickMorty />
        </>
    )
}

export default App
