import React, {Component} from 'react'; 
import Plantas from '../plantas/Plantas';
import Usuarios from '../usuarios/Usuarios';
import Clientes from '../clientes/Clientes';


export default class Main extends Component{
    constructor(){
        super(); 

    }
    render(){
        return(
    <section>
       <Usuarios/>

    </section>
        )
    }
}