import React, { Component } from 'react';
import FormularioPlanta from './FormularioPlanta';
import Card from './Card'
import Nav from '../commons/nav/Nav';

export default class Plantas extends Component{
    constructor(){
        super(); 

    }

    render(){
        return(
            <section >
          <Nav /> 

            <div className="container">
                <FormularioPlanta/>
                </div>
            </section>
        ) 
    }

}