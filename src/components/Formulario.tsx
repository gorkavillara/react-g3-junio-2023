import { useState } from "react"

interface IForm {
    username: string
    password: string
    age: number
}
const emptyForm: IForm = { username: "gorka", password: "", age: 0 }

const Formulario = () => {
    const [formData, setFormData] = useState<IForm>(emptyForm)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nuevoValor = event.target.value
        console.log(nuevoValor)
        setFormData({ ...formData, username: nuevoValor })
    }
    return (
        <form>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={(e) =>
                    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }))
                }
            />
            <input
                type="number"
                name="age"
                placeholder="age"
                value={formData.age}
                onChange={(e) =>
                    setFormData((f) => ({ ...f, [e.target.name]: Number(e.target.value) }))
                }
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={(e) =>
                    setFormData((f) => ({ ...f, password: e.target.value }))
                }
            />
            <br />
            <button>Enviar</button>
        </form>
    )
}

export default Formulario
