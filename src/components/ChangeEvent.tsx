import { useRef } from "react"

const ChangeEvent = () => {
    const nombreRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // console.log(event.target[0])
        console.log("Enviando formulario...")
        // Enviar los datos introducidos a un posible endpoint
        // console.log(
        //     ((event.target as HTMLFormElement)[0] as HTMLInputElement).value
        // )

        // if (!nombreRef.current) return
        console.log(nombreRef.current?.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre de usuario" />
            <input ref={nombreRef} type="text" placeholder="Tu nombre" />
            <br />
            <button>Enviar</button>
        </form>
    )
}

export default ChangeEvent
