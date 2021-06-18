import  {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Hind-Light.woff'


const GlobalStyle = createGlobalStyle`
.ContainerText{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px;
    font-family: Impact;
    font-size:20px;
}
.ContainerText p{
    font-family: 'Hind';
    font-size: 18px;
    margin: 0 20px;
}

.ContainerImage{
    display: flex;
    width: 40%;
    margin-right: 10px;
    justify-content: center;
}
.ContainerImage img{
    width: 100%;
    height: auto; 
}

/* fuentes*/

@font-face {
    font-family: 'Hind';
    src: local('Hind'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}

//estilos para los botones
button{
    border-radius:5px;
    width: auto;
    height: 30px;
    justify-content: space-between;
    margin: 3px 0px; 
    font-size:15px;
    
    
}

.button a{
    color:white;
}

`;


export default GlobalStyle