import React from 'react'
import '../utils/css/Cuerpo.estilos.css'
import Juan from '../utils/images/Juan.jpg'
function Cuerpo() {
    return (
        <div className="Container_Cuerpo">
            <h1>
                Hola este es el componente Cuerpo
            </h1>
            <img  id="image1" src={Juan} alt="hola este es Juan"  />
        </div>
    )
}

export default Cuerpo