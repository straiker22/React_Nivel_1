import { FormularioControlado } from "./FormularioControlado"
import { FormularioNoControlado } from "./FormularioNoControlado"

export const Formulario = () => {
    return (
        <div>
            <h1>Formulario</h1>
            <FormularioNoControlado />
            <br />
            <FormularioControlado />
        </div>
    )
}
