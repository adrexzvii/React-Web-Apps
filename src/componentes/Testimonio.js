import React from "react";
import "../hojas-de-estilo/Testimonio.css" //los .. es para que busque en src, si fuera . buscaria en componentes
//definimos componente funcional
//esta es una forma de importar imagenes, luego veremos otra con "import"
//ponemos comillas entre el props "{}" para que este en el parrafo escritas las comillas
//<strong> hace que este en negrillas
function Testimonio(props) {
    return(
<div className="contenedor-testimonio">
<img className="imagen-testimonio" alt="Es un 737MAX" src={require(`../imagenes/737max-${props.imagen}.jpg`)} />
<div className="contenedor-texto-testimonio">
    <p className="nombre-testimonio"><strong>737 MAX "{props.numAvion}"</strong></p>
    <p className="descripcion-testimonio">Es un avion de nueva generacion en {props.pais}</p>
    <p className="cargo-testimonio">Es el avion 737 MAX "{props.numAvion}", el mas reconocido de Boeing por sus accidentes</p>
</div>
</div>
    );
}

export default Testimonio;