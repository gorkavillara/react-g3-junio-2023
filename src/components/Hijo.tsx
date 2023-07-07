import Nieto from "./Nieto"

const Hijo = ({ ajustes }: any) => {
    return (
        <div>
            <h2>Hijo</h2>
            <Nieto ajustes={ajustes} />
        </div>
    )
}

export default Hijo
