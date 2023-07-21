import { render, screen } from "@testing-library/react"
import RickMorty from "./RickMorty"
import axios from "axios"

// it("Creates a character", async () => {
//     render(<RickMorty />)

//     const characterName = await screen.findByTitle("character-name")

//     expect(characterName.innerHTML).toBe("Morty Smith")
// })

describe("Testing mocked values", () => {
    beforeAll(() => {
        axios.get = vi.fn().mockResolvedValue({
            data: {
                name: "Gorka Villar"
            } 
        })
    })
    afterAll(() => {
        vi.clearAllMocks()
    })

    it("Creates a character", async () => {
        render(<RickMorty />)

        const characterName = await screen.findByTitle("character-name")

        expect(characterName.innerHTML).toBe("Gorka Villar")
    })
})
