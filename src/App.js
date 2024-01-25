import "./App.css";
import Testimonio from "./componentes/Testimonio.js";

function App() {
  return (
    <div className="App">
       <div className="contenedor-principal">
      <div className="titulo">
        <h1>Estos son los aviones de Boeing</h1>
      </div>
      <div>
      <Testimonio 
      numAvion= "1"
      pais="Bolivia"
      imagen="1"
      />
      </div>
      <div>
      <Testimonio 
      numAvion= "2"
      pais="USA"
      imagen="2"
      />
      </div>
      </div>
    </div>
  );
}

export default App;
