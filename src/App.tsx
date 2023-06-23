import { useState } from "react"
import { Route } from "./models"
import "./App.css"
import { Home, Contact, Support } from "./views"

const views = {
    home: <Home />,
    contact: <Contact />,
    support: <Support />
}
const componentViews = {
    home: Home,
    contact: Contact,
    support: Support
}

function App() {
    const [route, setRoute] = useState<Route>("home")
    if (route === "contact") return <Contact />
    if (route === "support") return <Support />
    if (route === "home") return <Home />
    return (
        <div>
            <h3>Esto es la pantalla principal</h3>
            {/* {route === "home" && <Home />}
            {route === "contact" && <Contact />}
            {route === "support" && <Support />} */}
            {views[route]}
            {route === "home" && <componentViews.home />}
            <div>
                <button onClick={() => setRoute("home")}>Home</button>
                <button onClick={() => setRoute("contact")}>Contact</button>
                <button onClick={() => setRoute("support")}>Support</button>
            </div>
        </div>
    )
}

export default App
