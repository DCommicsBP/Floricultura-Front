import React, { Component } from 'react';
export class Login extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section>
                <center>
                    <br /><br />
                    <form style={{ backgroundColor: '#28a745 ' }} class="col-md-6">
                        <br />
                        <div class="form-group">
                            <label for="exampleInputEmail1" style={{ color: 'whitesmoke' }}>Login</label>
                            <input type="email" class="form-control col-md-6" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" width={{}} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" style={{ color: 'whitesmoke' }}>Password</label>
                            <input type="password" class="form-control col-md-6" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                            <button  class="btn btn-info" style={{borderColor:'white', margin:'10px'}}>Enviar</button>
                            <button  class="btn btn-secondary" style={{borderColor:'white', margin:'10px'}}>Retornar</button>
                        <br />
                    </form>
                </center>

            </section>
        );
    }
}