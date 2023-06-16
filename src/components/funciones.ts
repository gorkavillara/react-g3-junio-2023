/* eslint-disable */
function suma(a: number, b: number): number {
    if (a + b > 5) return 18
    return a + b
}

const sumaFlecha = (a: number, b: number) => {
    if (a + b > 5) return "hola"
    return a + b
}

const sumaFn = function(a: number, b: number): number {
    return a + b
}

let nombre: string | boolean = "Toni"

nombre = true

const miFuncion = () => "hola mundo"

function miFuncion2(miVariable: unknown) {
    // if (typeof miVariable === "string") {
    //     miVariable.slice(0, 1)
    // }
    if (typeof miVariable === "number") {
        miVariable.toFixed(2)
    }
}

