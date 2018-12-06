import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Nav from './commons/nav/Nav';



class App extends Component {
  render() {
    return (

      <section >
        <Nav />
        <h4>
          A EMPRESA
        </h4>
        <div className="container" style={{ position: 'relative', top: '50px', maxWidth: '400px', maxHeight: '400px' }}>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner w-50 h-50" style={{ maxWidth: '400px', maxHeight: '400px', height: '400px', width: '400px' }}>
              <div className="carousel-item active">

                <img className="d-block w-100 h-100" src={require('../src/images/Plantas/flor.jpeg')} alt="First slide" style={{ height: '400px !important', width: '400px !important' }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 h-100" src={require('../src/images/Plantas/flor03.jpeg')} alt="Second slide" style={{ height: '400px !important', width: '400px !important' }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 h-100" src={require('../src/images/Plantas/flor02.jpeg')} alt="Third slide" style={{ height: '400px !important', width: '400px !important' }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 h-100" src={require('../src/images/Plantas/flor05.jpeg')} alt="Third slide" style={{ height: '400px !important', width: '400px !important' }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 h-100" src={require('../src/images/Plantas/flor04.jpeg')} alt="Third slide" style={{ height: '400px !important', width: '400px !important' }} />
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

        </div>
        <div className="container" style={{position:'relative', top:'200px'}}>
          <div className="row">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec feugiat leo, non pretium nibh. Nullam quis tortor a lacus pharetra aliquet a a libero. Duis mattis ex ipsum, sollicitudin lacinia lectus tempor vitae. Vivamus aliquet maximus neque sed feugiat. Vivamus molestie molestie risus eu ultrices. Proin in magna commodo, facilisis mauris id, accumsan orci. Nunc sed sem metus. Pellentesque vehicula velit non nulla congue interdum ac at mauris. Aenean blandit neque mi, in vulputate lectus vulputate vitae. Etiam elit ligula, finibus sit amet odio vel, mattis sodales dolor. Cras vestibulum tellus tortor, vitae tincidunt enim imperdiet ut. Proin ex sem, molestie vel aliquet a, facilisis aliquam augue. Sed sollicitudin mi quis mi imperdiet hendrerit. Vivamus id suscipit felis.
            </p>
            <p>
            Suspendisse potenti. Cras nec arcu pulvinar, blandit tellus vitae, consectetur risus. Etiam volutpat nisl vel ornare elementum. Sed et scelerisque erat, quis semper mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget est at ligula bibendum hendrerit. Quisque metus libero, facilisis sit amet posuere id, faucibus vitae orci. Aliquam erat volutpat. Integer aliquam euismod consequat. Integer scelerisque ligula sem, et auctor nibh lacinia nec. Nullam interdum, sapien in semper mollis, arcu nulla rhoncus dui, nec faucibus orci tortor et velit. Praesent suscipit orci nec ante vulputate, ac cursus lectus commodo. Praesent massa odio, egestas vel tellus in, volutpat tincidunt purus. Fusce ac odio ultricies, elementum magna quis, mattis lorem.
            </p>
            <p>
            Proin et leo non sapien bibendum dictum nec in erat. Duis luctus nec ligula et mattis. Maecenas nec tincidunt nunc. Aliquam euismod sagittis nisi sed luctus. Duis pharetra, justo vitae lacinia pretium, enim arcu convallis mi, sit amet vestibulum odio nunc sed tortor. In dui diam, blandit sed efficitur id, feugiat iaculis ex. Donec ligula lectus, tristique ut vestibulum in, scelerisque nec sem. Mauris volutpat dignissim velit. In euismod, neque in condimentum pharetra, mauris lorem condimentum eros, vel egestas massa lorem ut turpis. Maecenas viverra et elit non rutrum. Phasellus eget finibus sapien. Vestibulum ornare dictum egestas. Aenean non ante ullamcorper, sodales turpis sed, fermentum felis. Aliquam quis metus gravida, ultrices enim at, posuere lorem
            </p>
            </div>
        </div>

      </section>
    )
  }
}

export default App;
