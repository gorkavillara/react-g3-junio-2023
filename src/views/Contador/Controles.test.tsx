import { render, screen, fireEvent } from "@testing-library/react"
import Controles from "./Controles"

describe("Buttons work correctly", () => {
    it("Decrement button works as expected", () => {
        const decrementaMock = vi.fn()
        const incrementaMock = vi.fn()

        render(
            <Controles
                decrementa={decrementaMock}
                incrementa={incrementaMock}
            />
        )

        const decrementButton = screen.getByText("Decrementa")

        // console.log(decrementButton)

        fireEvent.click(decrementButton)

        expect(decrementaMock).toBeCalled()
        expect(incrementaMock).not.toBeCalled()
    })
})
