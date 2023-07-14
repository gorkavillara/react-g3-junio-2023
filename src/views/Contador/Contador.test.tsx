import { fireEvent, render, screen } from "@testing-library/react"
import Contador from "./Contador"

it("Increments when clicked", () => {
    render(<Contador />)

    screen.getByText("El valor del contador es 0")

    const incrementButton = screen.getByText("Incrementa")

    fireEvent.click(incrementButton)

    screen.getByText("El valor del contador es 2")
})