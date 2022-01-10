import { useRef } from "react"

export const FormularioNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        const datos = new FormData(formulario.current)
        
        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos)
        //una forma 1 
        const valores = Object.values(objetoDatos)
        valores.map(valores => console.log(valores))
        //una forma 2 
        const {todoName,todoDescripcion,todoEstado} = objetoDatos
        console.log(todoName,todoEstado,todoDescripcion)
    }
    return (
        <>
        <div className="container">
            <h2>No controlado</h2>
            <form ref={formulario} onSubmit={handleSubmit} >
                <input type="text"
                    placeholder="Ingrese Task"
                    name = "todoName"
                    className ="form-control mb-2"
                    defaultValue="Task - 1"
                />
                <textarea 
                    name="todoDescripcion"
                    className= "form-control mb-2" 
                    placeholder = "Ingrese descripcion Task"
                />
                    <select 
                        name="todoEstado"
                        className="form-control mb-2"
                    >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <button className="btn btn-primary" >Submit</button>
            </form>
        </div>
        </>
    )
}
