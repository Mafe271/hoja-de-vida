import React from 'react'
import '../utils/css/Cuerpo.estilos.css'
import Juan from '../utils/images/lindura.jpg'
function Cuerpo() {
    return (
        <div className="Container_Cuerpo">
            
            <div className="ContainerText">
                <h1> DATOS SOBRE MI VIDA </h1>
                <p>
                    Comenzare hablando de mi familia ya que es muy numerosa tanto por el costado de mi mamá como el de mi papá,lo mas importante para mi es mi perrita que se llama Kiara.<h1></h1>

                     El la familia por parte de mi mamá solo tengo primas y por el de mi papá solo primos, no tengo hermanos , siempre viajo mucho, amo los animales, salir con mis amigos y escuchar musica me gusta de todo los géneros,mi artista favorito es 2Pac Shakur este cantante ya falleció es del género hip-hop, cuando pequeña estuve en un reinado de belleza y gane, también estuve en clase de natacion y de karate.<h1></h1>
                     Amo con mi vida los animales me transmiten mucha paz y felicad, me gusta la politica y siempre estoy informada de lo que este pasando en mi país o con mi pueblo.
                     Siempre quise lanzarme como personera en el colegio pero como todo fue virtual pues no se pudo no era necesario ocupar este puesto asi que no tuve la oportunidad de participar es esto , esta pandemia nos ha enseñado mucho y uno de las mas importantes es el valor que tiene la familia o las personas que queremos y nos importan ya que todos sabemos que en un momento estamos arriba pero uno no sabe en que momento va estar abajo al igual que uno no sabe que dia se va ir de este mundo,asi que siempre vivo a la expectativa de todo lo que puede pasarme , es para colocarse a reflexionar por eso siento que ocurrio esta pandemia.
                </p>
            </div>
            <div className="ContainerImage">
                <img  id="image1" src={Juan} alt="hola este es Mafe"  />
            </div>
            

        </div>
    )
}

export default Cuerpo