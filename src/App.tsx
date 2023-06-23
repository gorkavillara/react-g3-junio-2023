import { useEffect } from "react"
import "./App.css"
import ImagePlaceholder from "./components/ImagePlaceholder"

function App() {
    // useEffect(() => {
    //     window.addEventListener("dblclick", () => {
    //         console.log("Se ha hecho doble click")
    //     })
    //     return () => {
    //         window.removeEventListener("dblclick", () => null)
    //     }
    // }, [])
    return (
        <div className="img-container">
            <ImagePlaceholder
                src="https://woguclimbing.com/wp-content/uploads/2017/11/Dan-Osman.jpg"
                alt="dan"
            />
            <ImagePlaceholder
                src="https://encrypdted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuHUnSYntFRn8-dNVXrJZQZnegp2l9WwbcECUY6fdBoGlWcIa0-dFGNN7CggAFPhOR58&usqp=CAU"
                alt="rpi"
            />
            <ImagePlaceholder
                src="https://assets-prd.ignimgs.com/2021/08/05/final-fantasy-xvi-button-1628180674117.jpg"
                alt="ffxvi"
            />
        </div>
    )
}

export default App
