import React, { Component } from 'react';
import Main from './Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Nav from './commons/nav/Nav';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <div className="container">
      <Main/>
      
      </div>
       </div>
    );
  }
}

export default App;
