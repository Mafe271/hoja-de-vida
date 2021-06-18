import React from 'react' //importar siempre en react
import  '../utils/css/Title.estilos.css'
import {Link} from "react-router-dom"

function Title() {
    return (
       <div className="Container_title">
         <h1 id="principalTitle"> HOJA DE VIDA </h1>
         <Link to="/contact">
           <button type="button"> PORTFOLIO </button>
         </Link>
           <Link to="/">
           <button type="button"> HOME </button>
         </Link>
         <Link to="/data">
           <button type="button"> VARIETIES </button>
         </Link>
       </div>
    )
}

export default Title
