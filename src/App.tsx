import { useState } from "react"
import "./App.scss"
import Padre from "./components/Padre"
import Contador from "./views/Contador/Contador"

function App() {
    // const [ajustes, setAjustes] = useState({
    //     modoOscuro: false,
    // })
    return (
        <div>
            <h1>App</h1>
            {/* <Padre ajustes={ajustes} /> */}
            <Contador />
            <Contador />
        </div>
    )
}

export default App
