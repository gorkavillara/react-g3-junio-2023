import { test, expect, describe, it } from "vitest"

const sum = (numA: number, numB: number) => numA + numB

test("My first test", () => {
    console.log("This is my first test")
    expect(5).toBeGreaterThan(4)
})

describe.runIf(false)("Sum function", () => {
    test("Adds integers correctly", () => {
        expect(sum(1, 2)).toBe(3)
    })
    
    test("Adds negative numbers correctly", () => {
        expect(sum(-1,-5)).toBeLessThan(0)
    })
})

describe("Testing objects", () => {
    it("Copies the object by reference", () => {
        const myCar = { brand: "VolksWagen", model: "Golf GTI" }
        const myOtherCar = myCar

        expect(myCar).toBe(myOtherCar)
    })
    it("Does not copy the object by reference", () => {
        const myCar = { brand: "VolksWagen", model: "Golf GTI" }
        const myOtherCar = { ...myCar }

        expect(myCar).toEqual(myOtherCar)
        expect(myCar).not.toBe(myOtherCar)
    })
})

const throwsIfNegative = (num: number) => {
    if (num < 0) throw new SyntaxError()
    return
}

describe("Testing error function", () => {
    it("Throws when negative", () => {
        const throwFunction = () => throwsIfNegative(-10)
        expect(throwFunction).toThrowError(SyntaxError)

        const myError = new SyntaxError()
        expect(myError instanceof Error).toBeTruthy()
    })
    it("Dose not throw when positive", () => {
        expect(() => throwsIfNegative(10)).not.toThrowError()
    })
})