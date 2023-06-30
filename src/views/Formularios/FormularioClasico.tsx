import { useState } from "react"
import styles from "./FormularioClasico.module.scss"

const FormularioClasico = () => {
    const [formData, setFormData] = useState({
        username: "gorka",
        password: "",
    })

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(event)
        // Aquí enviaríamos el formulario a una API
        if (formData.username.length > 3) {
            //
        }
    }
    return (
        <div className={styles.FormularioClasico}>
            <h2>Trabajando con Formularios clásicos</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tu nombre de usuario"
                    value={formData.username}
                    onChange={(event) =>
                        setFormData({
                            ...formData,
                            username: event.target.value,
                        })
                    }
                />
                <input
                    type="password"
                    placeholder="Tu contraseña"
                    value={formData.password}
                    onChange={(event) =>
                        setFormData({
                            ...formData,
                            password: event.target.value,
                        })
                    }
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default FormularioClasico
