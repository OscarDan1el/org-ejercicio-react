import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa Puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de Foto"/>
            <ListaOpciones />
        </form>
    </section>
}

export default Formulario;