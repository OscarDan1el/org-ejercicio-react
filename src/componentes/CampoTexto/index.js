import { useState } from "react";
import "./CampoTexto.css"

const CampoTexto = (props) => {

    /* cambie el nombre de la variable de actaulizar valor a set valor  */
    const [valor,setValor] = useState(""); 

    const placeholderModificado =`${props.placeholder}...`;

    const manejarCambio = (e) => {
        console.log("cambio",e.target.value);
        setValor(e.target.value);
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={valor}
        onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto;