import React, {Component} from 'react'; 
import Plantas from '../plantas/Plantas';
import Usuarios from '../usuarios/Usuarios';
import Clientes from '../clientes/Clientes';
import { Login } from '../usuarios/Login';


export default class Main extends Component{
    constructor(){
        super(); 

    }
    render(){
        return(
    <section>
            <Clientes/>
    </section>
        )
    }
}