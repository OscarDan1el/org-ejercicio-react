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

  const equipos = [
    {titulo : "Programacion",
    colorPrimario : "#57C278",
    colorSecundario : "#D9F7E9"
    }
    ,
    {titulo : "Frontend",
    colorPrimario : "#82CFFA",
    colorSecundario : "#E8F8FF"
    }
    ,
    {titulo : "Data Science",
    colorPrimario : "#A6D157",
    colorSecundario : "#F0F8E2"
    }
    ,
    {titulo : "Devops",
    colorPrimario : "#E06B69",
    colorSecundario : "#FDE7E8"
    }
    ,
    {titulo : "UX y Diseño",
    colorPrimario : "#DB6EBF",
    colorSecundario : "#FAE9F5"
    }
    ,
    {titulo : "Movil",
    colorPrimario : "#FFBA05",
    colorSecundario : "#FFF5D9"
    }
    ,
    {titulo : "Innovacion y Gestion",
    colorPrimario : "#FF8A29",
    colorSecundario : "#FFEEDF"
    }
    ,
    ]

  return (
    <div>
      {/* 2 maneras de llamar los componentes */}
       <Header></Header>
       {mostrarFormulario && <Formulario equipos={equipos.map((equipo)=>equipo.titulo)}/>}
       <MiOrg cambiarMostrar={cambiarMostrar}/>
       
       {/* 
       1 nombre de la funcion 
       2-un metodo y siempre en un arreglo se usa map (recibira datos y nos regresara 
         un nuevo arreglo y recibira un arrow fuctions)
       3-
        */}
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo}/> )
      } 

    </div> 
  );
}

export default App;
