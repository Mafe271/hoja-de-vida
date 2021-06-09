import React from 'react'
import '../utils/css/Todo.estilos.css'
import image2 from  '../utils/images/image2.jpg'
function Todo() {
    return (
        <div className="Container_Cabecera">
            
            <div className="ContainerText">
                <h1>Hola este es el componente de la cabecera</h1>
                <p>

                </p>
            </div>
            <div className="ContainerImage">
                <img  id="image1" src={image2} alt="hola este es Juan"  />
            </div>
            

        </div>
    )
}

export default Todo
