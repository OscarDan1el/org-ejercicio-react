import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() { 
  const [mostrarFormulario,actualizarMostar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostar(!mostrarFormulario)
  }

  return (
    <div>
      {/* 2 maneras de llamar los componentes */}
       <Header></Header>
       { mostrarFormulario === true ? <Formulario/> : <div></div>}
       <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div> 
  );
}

export default App;
