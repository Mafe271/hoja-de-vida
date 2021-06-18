import React from 'react'
import '../utils/css/Todo.estilos.css'
import image2 from  '../utils/images/fotomia.jpg'
function Todo() {
    return (
        <div className="Container_Cabecera">
            
            <div className="ContainerText">
                <h1> PORTAFOLIO </h1>
                <p>
                    Mi nombre es Maria Fernanda Caro Carvajal tengo 18 años, termine el bachillerato en el año 2020 en el Liceo De Ciencia Y Cultura Harvard, Vivo en Bogotá D.C  con mis dos padres y mi mascota, acabe mi ultimo año de forma virtual lo cual fue dificil pero no imposible debido a lo que hoy en día estamos viviendo todos que es la pandemia. Actualmente estudio programacion front-end que dura aproximadamente entre 6 a 8 meses con sus respectivas pasantias ademas en mis tiempos libres estudio ingles y toda mi vida he vivido en Bogotá. Mi proyección en la vida es lograr todos los objetivos que me proponga y aca resaltare algunos de ellos:<p></p>1.Terminar una carrera la cual se en el tema de informatica o medicina veterinaria.<p></p>2.Cuando ya trabaje empezar mi independencia consiguiendo ya mis propias cosas.<p></p>3.Ya trabajando pagarme yo misma otra carrera.<p></p>
                    Me puedes contactar por:<p></p>Mi numero que es 3013754839 y en mi facebook con mi nombre completo.
            
                </p>
            </div>
            <div className="ContainerImage">
                <img  id="image1" src={image2} alt="hola este es Mafe"  />
            </div>
            

        </div>
    )
}

export default Todo
