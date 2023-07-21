import { useState } from "react"
import { clientsInstance } from "../../assets/axiosInstances"
import { default as Button } from "../../components/CustomButton/CustomButton"
import { Cliente } from "../../models"
import TablaClientes from "./components/TablaClientes"
import FormularioAlta from "./components/FormularioAlta"

const Clientes = () => {
    const [clientes, setClientes] = useState<Cliente[]>([])
    const obtenClientes = () => {
        clientsInstance
            .post("/clients", { action: "get" })
            .then((res) => setClientes(res.data))
            .catch(console.error)
    }
    return (
        <div>
            <h1>Clientes</h1>
            <FormularioAlta />
            <Button onClick={obtenClientes}>Obtén clientes</Button>
            {/* <div>{JSON.stringify(clientes)}</div> */}
            {clientes && clientes.length > 0 && (
                <TablaClientes clientes={clientes} />
            )}
        </div>
    )
}

export default Clientes
