import { useState } from "react"

export const FormularioControlado = () => {

    const [todo,setTodo] = useState({
        todoName:'',
        todoDescription:'',
        todoEstado:'pendiente',
        todoCheck:false
    })

    const [error,setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()

        const {todoName,todoDescription} = todo
        if(!todoDescription.trim() || !todoName.trim()){
            setError(true)
            return;
        }
        setError(false)
    };
    
    const handleChange = (e) =>{
        const { name,value,checked,type } = e.target

        setTodo({
            ...todo,
            [name]:type === "checkbox" ? checked : value,
        })

    /*  setTodo((old)=>({
            ...old,
            [e.target.name]:e.target.value
        })) */
    }
    const PintarError = () =>(
        <div className="alert alert-danger">Campos obligatorios</div>
    )


    return (
        <>
        {
            error && <PintarError/>
        }
        <div className="container">
            <h2>Controlado</h2>
            <form onSubmit={handleSubmit} >
                <input 
                    type="text"
                    placeholder="Ingrese Task"
                    name = "todoName"
                    className ="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoName}
                />
                <textarea 
                    name="todoDescription"
                    className= "form-control mb-2" 
                    placeholder = "Ingrese descripcion Task"
                    onChange={handleChange}
                    value={todo.todoDescription}
                />
                    <select 
                        name="todoEstado"
                        className="form-control mb-2"
                        onChange={handleChange}
                        value={todo.todoEstado}
                    >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <div className="form-check">
                    <input 
                        id='flexCheckDefault' 
                        className="form-check-input"
                        type="checkbox"
                        name="todoCheck"
                        checked={todo.todoCheck}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Dar Prioridad
                    </label>    
                </div>
                

                <button className="btn btn-primary" type="submit" >Submit</button>
            </form>
        </div>
        </>
    )
}
