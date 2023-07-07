import Hijo from "./Hijo"

const Padre = ({ ajustes }: any) => {
    return (
        <div>
            <h1>Padre</h1>
            <Hijo ajustes={ajustes} />
        </div>
    )
}

export default Padre
