import React, {useState} from "react";
import "../CSS components/Header.scss";
import { NavLink } from "react-router-dom";


export function Header(){


    return(
        <div className={"sectiuneHeader"}>
                <nav>
                    <div className="logo">
                        <img src={require("../../Poze/logo_header.png")} />
                    </div>

                    <div className="nav-links">
                        <ul>
                            <li><NavLink to="/">Portofoliu</NavLink></li>
                            <li><NavLink to="/">Contacteaza-ne</NavLink></li>
                        </ul>
                    </div>
                </nav>

            </div>
    )
}