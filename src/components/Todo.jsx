import React from 'react'
import '../utils/css/Todo.estilos.css'
import image2 from  '../utils/images/fotomia.jpg'
function Todo() {
    return (
        <div className="Container_Cabecera">
            
            <div className="ContainerText">
                <h1> PORTAFOLIO </h1>
                <p>
                    Mi nombre es Maria Fernanda Caro Carvajal tengo 18 años, termine el bachillerato en el año 2020 en el Liceo De Ciencia Y Cultura Harvard,  Vivo en Bogota D.C con mis dos padres y mi mascota.<p></p> 
                    Actualmente estudio programacion front-end que dura aproximadamente entre 6 a 8 meses con sus respectivas pasantias ademas en mis tiempos libres estudio ingles, toda mi vida he vivido en Bogota. Velit sunt illo minima adipisci nulla odit quas, voluptate, quibusdam fugit id neque ab minus veniam. Numquam odio amet neque maxime obcaecati.
                    Culpa eveniet repellat praesentium corporis debitis aliquid nesciunt ad fugiat, excepturi quibusdam quidem sapiente voluptas cupiditate pariatur labore explicabo reprehenderit non ex minus esse commodi quod. Veritatis nihil iure reprehenderit.
                    Iusto quaerat, nam sequi delectus fugit fuga corporis. Reprehenderit ratione perferendis exercitationem fuga voluptatum ducimus quo explicabo nemo optio tempora! Soluta animi nemo voluptates, accusamus illo tenetur laboriosam sapiente doloribus?
                </p>
            </div>
            <div className="ContainerImage">
                <img  id="image1" src={image2} alt="hola este es Mafe"  />
            </div>
            

        </div>
    )
}

export default Todo
