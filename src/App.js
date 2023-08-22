import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() { 
  /* con true o false puedo determinar e estado de muestra de mi formulario  */
  const [mostrarFormulario,actualizarMostar] = useState(false);

  const cambiarMostrar = () => {
    actualizarMostar(!mostrarFormulario)
  }

  return (
    <div>
      {/* 2 maneras de llamar los componentes */}
       <Header></Header>
       {mostrarFormulario && <Formulario/>}
       <MiOrg cambiarMostrar={cambiarMostrar}/>
       <Equipo equipo="Programacion"/>
       <Equipo equipo="Front End"/>
       <Equipo equipo="Data Science"/>
       <Equipo equipo="Devops"/>
       <Equipo equipo="Ux y Diseño"/>
    </div> 
  );
}

export default App;
