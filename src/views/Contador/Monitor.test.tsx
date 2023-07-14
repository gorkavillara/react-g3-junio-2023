import { render, screen } from "@testing-library/react"
import { default as Monitor } from "./Monitor"

it("Renders correctly", () => {
    render(<Monitor contador={5} />)
})

it("Shows the correct value", () => {
    render(<Monitor contador={5} />)
    screen.getByText("El valor del contador es 5")
    // screen.getByText(/.*El valor del contador.*/)
})