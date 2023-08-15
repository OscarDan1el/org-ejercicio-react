import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa Puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de Foto"/>
        </form>
    </section>
}

export default Formulario;