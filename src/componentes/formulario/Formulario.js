import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {

    const manejarEnvio = (evento) =>{
        evento.preventDefault()
        console.log("Manejar el envio", evento);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa Nombre" required={true}/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa Puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de Foto" required/>
            <ListaOpciones />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario;