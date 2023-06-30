import { useState } from "react"
import { Route } from "./models"
import "./App.scss"
import { Home, Contact, Support, EstilosCondicionales, Alumnos } from "./views"

const views = {
    // home: <Home />,
    home: <Alumnos />,
    contact: <Contact />,
    support: <Support />,
    styles: <EstilosCondicionales />
}

function App() {
    const [route, setRoute] = useState<Route>("home")
    return (
        <div>
            {views[route]}
            <div>
                <button onClick={() => setRoute("home")}>Home</button>
                <button onClick={() => setRoute("contact")}>Contact</button>
                <button onClick={() => setRoute("support")}>Support</button>
                <button onClick={() => setRoute("styles")}>Styles</button>
            </div>
        </div>
    )
}

export default App
