import React from 'react';
import "../CSS components/Footer.scss"


export function Footer(){
    return(
        <div className={"footer"}>
           <div className={"footerContinut"}>
               <h2>Contact</h2>

               <div className={"footerDate"}>
                    <a href="tel:1234567">Apelati la 123-4567</a>
                    <br/>
                    <a href="mailto:webmaster@example.com">Carmen Diana Rob</a>
               </div>

               <span>Elite Image Copyright © 2021. </span>
           </div>
        </div>
    )
}