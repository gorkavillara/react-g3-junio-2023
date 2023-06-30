export type Route = "home" | "contact" | "support" | "styles"

enum ERoute {
    home = "home", contact = "contact", support = "support"
}

ERoute.home

export interface Alumno {
    id: number
    nombre: string
    email: string
    nota: number
}

export interface PersonajeRM {
    id: number
    name: string
    species: string
    image: string
}