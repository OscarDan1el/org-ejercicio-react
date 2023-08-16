import "./ListaOpciones.css"
const ListaOpciones = () => {
    /* Metodo map -> arreglo.map((equipo,index)) => {} */
    /* return <option/>
    -toma un arglo de informacion y los transforma y nos rgresa un nuevo arreglo 
    -
    -
    */
    const equipos = [
        "Programacion",
        "Fronten",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]

    

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select>
            {equipos.map( (equipo, index) => {
                    return<option key={index}> {equipo} </option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones;