import { Link } from 'react-router-dom'

import React, { Component } from 'react';
export default class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section>
          <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/clientes">Clientes</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/usuarios">Usuários</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/plantas">Plantas</Link>
                </li>

                <li className="nav-item active">
                  <Link className="nav-link" to="#">Plantas</Link>
                </li>

              </ul>
            </div>
            <img src={require('../../images/nav/evergreen.jpg')} style={{width: '200px', height: '100px'}} />

          </nav>
        </section>

        )
    }
}