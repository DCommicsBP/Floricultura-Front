import React, { Component } from 'react';
import FormularioPlanta from './FormularioPlanta';
import Card from './Card'
import Nav from '../commons/nav/Nav';

export default class Plantas extends Component{
    constructor(){
        super(); 

    }
    
    state = {
        "nome":"", 
        "valor":0, 
        "id":0, 
        "quantidade":0
    }

    render(){
        return(
            <section >
                <Nav /> 

                <Card></Card>
            </section>
        ) 
    }

}