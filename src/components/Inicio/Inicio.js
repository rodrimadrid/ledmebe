import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.jpg'
import './inicio.css'

const Inicio = () => {
    return (
        <>
          <div className ="inicio-container">
            <NavLink  to= '/productos'>
              <img className = 'inicio-logo ' src={Logo} alt='logo'/>
            </NavLink>       
            <h2 className= 'inicio-titulo' >Diseños novedosos de lámparas led e iluminarias💡 </h2>
          </div>  
        </>
    )
}

export default Inicio
