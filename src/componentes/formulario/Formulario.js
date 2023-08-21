import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState(""); 

    const manejarEnvio = (evento) =>{
        evento.preventDefault()
        console.log("Manejar el envio", evento);
        let datosEnviar = {
            nombre,
            puesto,
            foto

        }
        console.log(datosEnviar); 
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>

            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresa Nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresa Puesto" 
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de Foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario;