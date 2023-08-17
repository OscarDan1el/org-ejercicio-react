import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() { 
  return (
    <div>
      {/* 2 maneras de llamar los componentes */}
       <Header></Header>
       <Formulario/>
       <MiOrg/>
    </div>
  );
}

export default App;
