export const Frutas = ({frutaApp,name}) => {

    return (
            <>
                <ul>
                {
                    frutaApp.map( (fruta,index) =>{ return (
                        <li key={index}>{index + 1 } -- {fruta}</li>
                    )})
                }
                </ul>
                <p>{name}</p>
                <h3>Welcome</h3>
            </>
    )
}
