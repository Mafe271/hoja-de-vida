import React from 'react'
import '../utils/css/Footer.estilos.css'
import image1 from '../utils/images/familia.jpg'
const Footer = () => {
    return (
        <div className="Container_Footer">
            
            <div className="ContainerText">
                <h1> HOBBIES E EXPERIENCIAS </h1>
                <p>
                    Mis hobbies son el fútbol me gusta demasiado en el colegio estaba en el equipo del salon y del colegio representandolo ,me encanta pasar tiempo con mi familia
                    tambien otro hobbie es el patinaje lo practicaba antes,otro de estos es el estar en contacto con los animales asi que trato de ir siempre a las fincas a colaborar en lo que necesiten lo animales de esta misma.<h1></h1> Una de mis experiencias con esto fue que me caía demasiado y de cara era la mas frecuente. En la vida he tenido muchas experiencias buenas , malas y como en todo he aprendido de esto porque para eso uno se equivoca para volverlas a cometer,este año una de mis mas grandes experiencias es lo que cada día aprendo en lo que estoy estudiando.
                </p>
            </div>
            <div className="ContainerImage">
                <img  id="image1" src={image1} alt="hola este es Mafe"  />
            </div>
            

        </div>
    )
}

export default Footer
