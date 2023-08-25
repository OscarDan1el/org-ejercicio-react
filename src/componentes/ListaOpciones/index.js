import "./ListaOpciones.css"
const ListaOpciones = (props) => {
    /* Metodo map -> arreglo.map((equipo,index)) => {} */
    /* return <option/>
    -toma un arglo de informacion y los transforma y nos rgresa un nuevo arreglo 
    -
    -
    */
  

    const manejarCambio = (evento) =>{
        props.actualizarEquipo(evento.target.value);
    }

    

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => {
                    return<option key={index} value={equipo}> {equipo} </option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones;