
import React, {Component} from  'react'
import './../assets/css/menu.css'
import icon from './icon.png'

export default ({actualSection}) => {
    return(
    <nav className="mainMenu">
      <div className="menuContent ">
        <ul>

          <li id="porPertoBtn" className="menuListItem textbutton"> 
            <a className="colorTxtWhite" href="#"> 
                <img className="menuIcon" src={icon} alt="" />  
                <p>Por perto</p>
            </a>
          </li>
          
         <li id="satalogBtn" className="menuListItem textbutton">
            <a className="colorTxtWhite" href="#"> 
                <img className="menuIcon" src={icon} alt="" /> 
                <p>Catálogo</p>
            </a>
         </li>
          
         <li id="sobreBtn" className="menuListItem textbutton">  
            <a className="colorTxtWhite" href="#"> 
                <img className="menuIcon" src={icon} alt="" /> 
                <p>Sobre</p>
            </a>
         </li>

        </ul>

      </div>
    </nav>

    )
} 