import React from 'react';
import {Fundal} from './Home components/Fundal'
import {Portofoliu} from './Home components/Portofoliu';
import { Form } from "./Home components/form";


export function Home() {

    return (

        <>
            <Fundal />
            <Portofoliu />
            <Form />

        </>

    )
}