import React, { Component } from 'react';
import FormularioPlanta from './FormularioPlanta';
import Card from './Card'

export default class Plantas extends Component{
    constructor(){
        super(); 

    }

    render(){
        return(
            <section>
                <FormularioPlanta/>
                
            </section>
        ) 
    }

}