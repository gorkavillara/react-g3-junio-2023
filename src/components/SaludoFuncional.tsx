interface Props {
    nombre: string
    edad: number
}

const SaludoFuncional = ({ nombre, edad }: Props) => (
    <div>
        Hola {nombre}, tienes {edad} años
    </div>
)

export default SaludoFuncional
