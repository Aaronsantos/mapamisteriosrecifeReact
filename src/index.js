import React from 'react';
import ReactDOM from 'react-dom';
import CatalogCard from './CatalogCard/CatalogCard'
import registerServiceWorker from './registerServiceWorker';
import NavBar from './NavBar/NavBar';
import './reset.css';
import AssombracaoInfo from './AssombracaoInfo/AssombracaoInfo'

ReactDOM.render(<div> 
    <NavBar />
    <CatalogCard nome="teste" tipo="entidade" localCurto="jaguaribe" img={null} />
    <AssombracaoInfo assombracao={{"id" : 1,
    "coords": {"lat": -8.058005, "lng": -34.871069},
    "local": "Bares e espaços de bohemia do Bairro do Recife",
    "localCurto": "Bairro do Recife",
    "descricao": "Ele aborda caminhantes solitários que vagam pelas ruas desertas e sempre pede fogo a esses desavisados – gente que sai de festa ou de barezinhos da moda do Bairro do Recife, por exemplo.\n Tendo ou não fósforo (ou isqueiro) para oferecer, a vítima toma um grande susto quando percebe que boêmio misterioso tem a cara carcomida de um cadáver apodrecido e exala um forte cheiro de enxofre.",
    "epoca": "Sec XX",
    "range": 100,
    "img": null,
    "status": false,
    "tipo": "Entidade"}}  />
    </div> , document.getElementById('root'));
registerServiceWorker();
