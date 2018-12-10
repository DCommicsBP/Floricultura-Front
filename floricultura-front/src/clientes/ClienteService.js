import {Service} from 'react-services-injector';
import axios from 'axios'; 

export default class ClienteService extends Service{

    contructor(){

    }
    get load(){
        let clientes; 
        axios.get(`http://localhost:3000/cliente`)
        .then(res => {
             clientes = res.data;
            
        })
        return clientes
    }

}