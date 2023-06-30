import { Link } from "react-router-dom"
import { alumnos } from "../../assets"

const Alumnos = () => {
    // console.table(alumnos)
    return (
        <div style={{ paddingBottom: "2rem" }}>
            <h2>Alumnos React</h2>
            <ul>
                {alumnos
                    .sort((a, b) => (a.nota > b.nota ? -1 : 1))
                    // .toSorted((a, b) => (a.nota > b.nota ? -1 : 1))
                    // .filter(alumno => alumno.nota > 5)
                    .map((alumno, index, todosAlumnos) => {
                        // aquí podríamos hacer todos los cálculos que quisiéramos
                        console.log({ alumnos })
                        console.log({ todosAlumnos })
                        return (
                            <li key={alumno.id}>
                                {alumno.nombre} - {alumno.email} - {alumno.nota}{" "}
                                -{" "}
                                <Link to={`/alumnos/${alumno.id}`} style={{ color: "#02E8AF" }}>
                                    Detalles
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default Alumnos
