import "./Equipo.css";
import Colaborador from "../Colaborador";



const Equipo = (props) => {
   /* Destructuracion */
   /* obtengo los valores y creo las variables */
   /* y esto hace que ya no utilice tanto coddigo de props.--- */
   const {colorPrimario, colorSecundario, titulo} = props.datos 


   const obj = {
      backgroundColor: colorSecundario
   }

   const estiloTitulo = {borderColor:colorPrimario};

 return <section className="equipo" style={obj}>
    <h3 style = {estiloTitulo} >{titulo}</h3>
    <div className="colaboradores">
        <Colaborador></Colaborador>
    </div>
 </section>
}

export default Equipo;