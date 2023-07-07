import axios, { AxiosInstance } from "axios"

const clientsBaseUrl = "https://miservicio.com/api/clientes"

const token = "192388141-481-89218rjf19f1jf19-f1-9fj1f1"

export const clientsInstance = axios.create({
    baseURL: clientsBaseUrl,
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
})

export const getClientsInstance = (token: string): AxiosInstance => {
    // chequear que el token sigue siendo válido
    // si no lo es obtener un nuevo token
    // con ese token retornar la nueva instancia de axios

    return axios.create({
        baseURL: clientsBaseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            TenantId: "cualquiercosa"
        },
        // transformResponse: async (res) => {
            // // si es un 401 => obtener un nuevo token
            // const nuevoToken = await nuevaLlamada()
        // }
    })
}

export const rmInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
    method: "GET",
    transformResponse: (res) => {
        return { ...JSON.parse(res), success: true, lastCall: new Date() }
    },
    transformRequest: (req) => req
})