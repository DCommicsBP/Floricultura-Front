import React, {Component} from 'react'; 
import Lista from './Lista';
import Formulario from './Formulario';
export default class Usuarios extends Component{
    constructor(){
        super(); 
    }

    render(){
        return(
       <section>
           <Lista/>
           <br/><br/    >
           <button className="btn btn-primary">
                Adicionar novo Usuario
           </button>
           <Formulario/>


       </section>
        
        )  
    }
}