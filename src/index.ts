const nombre = "Gorka Villar"

const miObjeto = {
    nombre: "Cubo",
    color: "verde"
}

/**
 * Devuelve la suma aritmética de los dos parámetros
 * @param a El primer sumando
 * @param b El segundo sumando
 * @returns La suma aritmética de a + b
 */
const suma = (a: number, b: number): number => a + b

console.log(
    `Hola ${nombre}, la suma de 2 más 3 es ${suma(2, 3)}, mi objeto es un ${
        miObjeto.nombre
    }`
)
