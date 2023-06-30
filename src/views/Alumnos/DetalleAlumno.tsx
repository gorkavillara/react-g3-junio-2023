import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { alumnos } from "../../assets"
import { Alumno } from "../../models"

const DetalleAlumno = () => {
    const [alumno, setAlumno] = useState<Alumno | null>(null)
    const [msg, setMsg] = useState("Buscando...")
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) return navigate("/alumnos")

        const al = alumnos.find((it) => it.id.toString() === id)
        if (!al) {
            setMsg("Alumno no encontrado, redireccionando...")
            setTimeout(() => navigate("/alumnos"), 3000)
            return
        }

        setAlumno(al)
    }, [id, navigate])

    return alumno ? (
        <div>
            <h1>{alumno.nombre}</h1>
            <p>Email: {alumno.email}</p>
            <p>Nota: {alumno.nota}</p>
        </div>
    ) : (
        <h2>{msg}</h2>
    )
}

export default DetalleAlumno
