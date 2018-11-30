import React, { Component } from 'react';
import './App.css';
import Plantas from '../src/plantas/Plantas';
import Bootstrap from '../node_modules/bootstrap/dist/js/bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Plantas/>


       </div>
    );
  }
}

export default App;
