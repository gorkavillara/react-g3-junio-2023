import { useState } from "react"
import axios, { AxiosError } from "axios"
import styles from "./RickMorty.module.scss"
import { PersonajeRM } from "../../models"
import { clientsInstance, rmInstance } from "../../assets/instances"

const Personaje = ({ personaje }: { personaje: PersonajeRM | null }) =>
    personaje ? (
        <>
            <h3>
                {personaje.id} - {personaje.name}
            </h3>
            <p>Especie: {personaje.species}</p>
            <img src={personaje.image} alt={personaje.name} />
        </>
    ) : null

const RickMorty = () => {
    const [id, setId] = useState("")
    const [personaje, setPersonaje] = useState<PersonajeRM | null>(null)

    // const buscaPersonaje = (e?: React.FormEvent) => {
    //     e?.preventDefault()
    //     console.log("Buscando el personaje...")
    //     fetch(`https://rickandmortyapi.com/api/character/${id}`)
    //         .then((res) => res.json())
    //         .then((info) => setPersonaje(info))
    //         .catch((error) => console.error(error))
    //         .finally(() => console.log("Ejecución finalizada"))
    // }
    const buscaPersonaje = async () => {
        // axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        //     .then((info) => setPersonaje(info.data))
        //     .catch((error) => console.error(error))
        //     .finally(() => console.log("Ejecución finalizada"))
        try {
            // const { data } = await axios.get(
            //     `https://rickandmortyapi.com/api/character/${id}`
            // )
            const { data } = await rmInstance.get(`https://rickandmortyapi.com/api/character/${id}`)
            console.log("Satisfactorio", data)
            setPersonaje(data)
        } catch (e) {
            const error = e as AxiosError
            console.error(error.message)
        }
    }

    const llamadaProtegida = () => {
        // const url = "https://miservicio.com/api"
        // const token = "jidfjfajj-i2afq-4f2jfi2fj98wefj4-fw8fjñ8f"

        // axios.post(
        //     url,
        //     {},
        //     {
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${token}`,
        //         },
        //     }
        // )

        clientsInstance.post("/nuevo", { nombre: "Gorka", email: "gorka@gorka.com" })
    }

    return (
        <div className={styles.RickMorty}>
            <h2>Rick y Morty</h2>
            {/* <form onSubmit={buscaPersonaje}> */}
            <label htmlFor="character-id">
                <span>Id del personaje</span>
                <input
                    type="number"
                    value={id}
                    id="character-id"
                    placeholder="El id que deseas buscar"
                    onKeyDown={(e) => e.key === "Enter" && buscaPersonaje()}
                    onChange={(e) => setId(e.target.value)}
                />
            </label>
            <button onClick={buscaPersonaje}>Buscar</button>
            {/* </form> */}
            {/* {isError && <h1>Error!</h1>}
            {isLoading && <p>Cargando...</p>} */}
            <Personaje personaje={personaje} />
        </div>
    )
}

export default RickMorty
