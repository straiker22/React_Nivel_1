import { Contador } from "./components/Contador";
import { Formulario } from "./components/Formulario";

import { Frutas } from "./components/Frutas";

//componente 1
export const App = () => {

    const variable_1 = "Hyde";

    const  clasesObjeto = {
        primary : "text-primary",
        danger :"text-danger"
    };
    
    const user = false;

    const frutas = ["🍎","🍌","🍓"];
    
    const name = "Hyde";

    //componente 1.1
    const MensajeBienvenida = () => { return (  
        <h2 className="text-success">Bienvenido Usuaria 1</h2>
    )};
    //componente 1.2
    const MensajeDespedida = () => { return (  
        <h2 className="text-success">Bye Usuaria 1</h2>
    )};

    const alerta = (name) => {return (
        console.log(`Hola -- ${name}`)
    )};

    return (
        <div className={clasesObjeto.primary}>
            <h1>Mi primer componente {variable_1} </h1>
            {user ? <MensajeBienvenida /> : <MensajeDespedida />}

            <Frutas frutaApp = {frutas} name ={name} />
            <Contador/>
            <button 
                className="btn btn-primary m-2"
                onClick = {() => alerta("Hyde")}
            >
                Enviar
            </button>
            <Formulario />

        </div>
         


    )
}
export default App;
