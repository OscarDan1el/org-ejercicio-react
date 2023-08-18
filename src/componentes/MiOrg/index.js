
import { useState } from "react"; 
import "./MiOrg.css";

const MiOrg = (props) => {
     /* Estado -- hooks  */
    /* useState */

    /* significa el valor inicial del estado  
    le damos un nombre.
    es myu imortante estio debidoa que react reacciona a los cambios del estado*/
    /* Const [nombreVariable,fucnion que actualize] */
    
    /* const [mostrar,actuzalizarMostrar] = useState(true);

    const manejarClick = () => {
        console.log("mostrar/ocultar elemento", !mostrar);
        actuzalizarMostrar(!mostrar); 
    }
 */
    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;