import { useSearchParams } from "react-router-dom"
import "./App.scss"

function App() {
    const [searchParams] = useSearchParams()

    console.log(searchParams.get("nombre"))
    return (
        <div>
            App
        </div>
    )
}

export default App
