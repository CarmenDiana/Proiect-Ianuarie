import React from 'react';
import "../CSS components/Portofoliu.scss";


export function Portofoliu(){
    return(
        <div className={"portofoliu"}>
            <h2>Portofoliu</h2>

            <div className={"portofoliuPoze"}>
                <div className={"fotografieProdus"} style={{backgroundImage: 'url(' + require('../../Poze/produs.jpg') + ')'}}>
                    <h3>Fotografie de produs</h3>
                </div>
                <div className={"fotografieEveniment"} style={{backgroundImage: 'url(' + require('../../Poze/eveniment.jpg') + ')'}}>
                    <h3>Fotografie de eveniment</h3>
                </div>
                <div className={"fotografieAeriana"} style={{backgroundImage: 'url(' + require('../../Poze/aeriana.jpg') + ')'}}>
                    <h3>Fotografie aeriana</h3>
                </div>
            </div>
        </div>
    )
}