import { useState } from "react"
import { AxiosError } from "axios"
import { useQuery } from "@tanstack/react-query"
import styles from "./RickMorty.module.scss"
import { PersonajeRM } from "../../models"
import { rmInstance } from "../../assets/instances"
import NarutoLoader from "../../components/Loaders/NarutoLoader"

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

    const { data, isFetching, isError, error } = useQuery({
        queryKey: [`rm-${id}`],
        queryFn: () => rmInstance(id),
        enabled: id !== ""
    })

    console.log(data?.data)

    const personaje = data?.data

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
                    // onKeyDown={(e) => e.key === "Enter" && buscaPersonaje()}
                    onChange={(e) => setId(e.target.value)}
                />
            </label>
            {/* <button onClick={buscaPersonaje}>Buscar</button> */}
            {/* </form> */}
            {/* {isError && <h1>Error!</h1>} 
            {isLoading && <p>Cargando...</p>} */}
            {isFetching && <NarutoLoader />}
            {error && <h2>ERROR! {error.toString()}</h2>}
            <Personaje personaje={personaje} />
        </div>
    )
}

export default RickMorty
