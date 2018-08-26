import React, { Component } from 'react';
import defaultPic from './../assets/img/defaultPic.png'
import "./../assets/css/boxes.css"
import "./../assets/css/modal.css"
import "./../assets/css/colors.css"
import "./../assets/css/fontFace.css"
import "./../assets/css/text.css"

export default ({assombracao}) => {

    return(
        <div className="infoModal colorBgLigthGrey">
                
                <header className="colorBgRed">
                  <h1 className="texttitle colorTxtWhite" >{"Assombração"}</h1>
                  <input type="button" className="button colorBgLigthGrey textbutton colorTxtRed" value="X" name="close"/>
                </header>

                <div className="modalContainer">
                  
                  <section className="picSec">
                    <img src={ assombracao.img == null ? defaultPic : assombracao.img}  />
                  </section>

                  <section className="infoSec colorBgRed colorTxtBlack">
                    <ul className="textbody2">
                      <li>Local: <strong className="colorTxtWhite">{assombracao.local}</strong></li>
                      <li>Época: <strong className="colorTxtWhite">{assombracao.epoca}</strong></li>
                      <li>ASSOMBRAÇÃO </li>
                    </ul>
                  </section>

                  <section className="textSec">
                        <p className="textbody1"></p>
                    </section>

                    <button type="button" className="button colorTxtWhite colorBgRed textbutton" name="goMap">Ver no Mapa</button>
                    </div>
                  </div>
                  
    )
}