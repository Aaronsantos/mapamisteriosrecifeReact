import React, { Component } from 'react';
import './CatalogCard.css'
import '../assets/css/text.css'
import '../assets/css/colors.css'
import defaultPic from './../assets/img/defaultPic.png'

export default ({nome,tipo,localCurto,img}) => {
    return (
  
            <div className="card colorBgRed">
                <img src={ img == null ? defaultPic : img} className="card-pic" />
                 <div className="card-info"> <ul> 
                     <li className="textbody1">{localCurto}</li>
                     <li className="textbody1">{tipo}</li>
                     </ul> </div>
                <h2 className="textdisplay1 ">{nome}</h2>
            </div>
    );
}