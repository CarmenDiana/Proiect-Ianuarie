import React from 'react';
import "../CSS components/Fundal.scss";
import { NavLink } from "react-router-dom";


export function Fundal(){
    return(
        <div className={"imagineFundal"}>
            <div className={"intro"}>
                <h1>Transpunem in imagini povestea business-ului tau</h1>
                <button>
                    <NavLink to="/">Contacteaza-ne</NavLink>
                </button>
            </div>
            

        </div>
    )
}