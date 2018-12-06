import React, {Component} from 'react'; 
import Lista from './Lista';
import Formulario from './Formulario';
import Nav from '../commons/nav/Nav';
export default class Usuarios extends Component{
    constructor(){
        super(); 
    }

    render(){
        return(
       <section >
          <Nav /> 

            <div className="container">


           <Lista/>
           <br/><br/>
           <button className="btn btn-primary">
                Adicionar novo Usuario
           </button>
           <Formulario/>
           </div>


       </section>
        
        )  
    }
}