import React, { useState } from "react";
import "../CSS components/form.scss";


export function Form() {
    const [name, setName] = useState("");
    const [phone, setPhone] =useState("");
    const [msg, setMsg] = useState("");

    function handleName(e) {
        setName(e.target.value)
    }

    function handlePhone(e) {
        setPhone(e.target.value)
    }
    
    function handleMsg(e) {
        setMsg(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className='form'>

            <h2>GET IN TOUCH</h2>

            <form onSubmit={handleSubmit}>

                <input type="text" value={name} onChange={handleName} placeholder="Numele tau"/>

                <input type="number" value={phone} onChange={handlePhone} placeholder="Numarul de telefon"/>

                <textarea value={msg} onChange={handleMsg} placeholder="Mesajul tau"/>

                <input type="submit" value="Trimite"/>

            </form>

        </section>
    )
}
