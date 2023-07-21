import React, { useState, useEffect } from "react"
import CustomButton from "../../components/CustomButton/CustomButton"
import { tiemposInstance } from "../../assets/axiosInstances"
import { Tiempo } from "../../models"

const frases = [
    "Imagay",
    "Cojo una patata y me la como",
    "Clara mente no es como suena",
]

const frase = frases[2]

const Juego = () => {
    const [fraseEscrita, setFraseEscrita] = useState("")
    const [startTime, setStartTime] = useState(new Date())
    const [nombre, setNombre] = useState("")
    const [tiempo, setTiempo] = useState<number>(0)
    const [tiempos, setTiempos] = useState<Tiempo[]>([])

    useEffect(() => {
        if (fraseEscrita.length === 1) setStartTime(new Date())
    }, [fraseEscrita])

    useEffect(() => {
        if (fraseEscrita !== frase) return

        const endTime = new Date()
        setTiempo((endTime.getTime() - startTime.getTime()) / 1000)

        alert(
            `Bien hecho! Tu tiempo ha sido de ${
                (endTime.getTime() - startTime.getTime()) / 1000
            } segundos`
        )
    }, [fraseEscrita, startTime])

    const escribeFrase = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key)
        const siguienteLetra = frase[fraseEscrita.length]
        if (event.key !== siguienteLetra) return

        setFraseEscrita(`${fraseEscrita}${siguienteLetra}`)
    }

    const subeTiempos = () => {
        tiemposInstance
            .post("/tiempos", {
                action: "create",
                nombre,
                tiempo,
            })
            .then(console.log)
            .catch(console.error)
    }
    const obtenTiempos = () => {
        tiemposInstance
            .post("/tiempos", {
                action: "get",
            })
            .then(res => setTiempos(res.data))
            .catch(console.error)
    }

    return (
        <div>
            <h1>Let's play</h1>
            <h3>{frase}</h3>
            <input
                type="text"
                onKeyDown={escribeFrase}
                value={fraseEscrita}
                readOnly
                style={{ width: "300px" }}
            />
            {tiempo > 0 && (
                <div>
                    <p>Enhorabuena! Tu tiempo: {tiempo} segundos</p>
                    <input
                        type="text"
                        placeholder="Escribe tu nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <CustomButton onClick={subeTiempos}>Enviar</CustomButton>
                </div>
            )}
            <br />
            <CustomButton onClick={obtenTiempos}>Obten Tiempos</CustomButton>
            {tiempos.length > 0 &&
                tiempos.map((t, index) => (
                    <p key={index}>
                        {t.nombre}: {t.tiempo}s
                    </p>
                ))}
        </div>
    )
}

export default Juego
