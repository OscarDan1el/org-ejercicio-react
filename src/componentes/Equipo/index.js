import "./Equipo.css";
import Colaborador from "../Colaborador";



const Equipo = (props) => {
   /* Destructuracion */
   /* obtengo los valores y creo las variables */
   /* y esto hace que ya no utilice tanto coddigo de props.--- */
   const {colorPrimario, colorSecundario, titulo} = props.datos 
   const { colaboradores } = props

   const obj = {
      backgroundColor: colorSecundario
   }
   /* console.log(colaboradores.length > 0) */
   
   const estiloTitulo = {borderColor:colorPrimario};

   /* si colaboradores.length es mayor a cero entonces  */
 return <>
 { colaboradores.length > 0 &&
 <section className="equipo" style={obj}>
    <h3 style = {estiloTitulo} >{titulo}</h3>
    <div className="colaboradores">
        {
         colaboradores.map((colaborador, index) => 
         <Colaborador datos={colaborador} key={index}/>)
        }
    </div>
 </section>
      }
</>
}

export default Equipo;