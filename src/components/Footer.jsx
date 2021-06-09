import React from 'react'
import '../utils/css/Footer.estilos.css'
import image1 from '../utils/images/image1.jpg'
const Footer = () => {
    return (
        <div className="Container_Footer">
            <h1>
                Hola este es el componente Footer
            </h1>
            <img  id="image1" src={image1} alt="hola este es Juan"  />
        </div>
    )
}

export default Footer
