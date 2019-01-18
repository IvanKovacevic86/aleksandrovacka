import React from 'react';
import './index.css';
import Mapcontainer from './Mapcontainer';
import { Map, InfoWindow,Marker, GoogleApiWrapper } from 'google-maps-react';

class Kontakti extends React.Component {
  render() {
   return (

    <div className="container nh3">

      <div className="con">
        <i className="fas fa-user-secret">{" "}Dragisa Zivadinovic Hrvatt</i><br/>
        <i className="fas fa-home">{" "}Veljka Vlahovica</i><br/>
        <i className="fas fa-mobile-alt">{" "}0645572327</i><br/>
        <i className="fas fa-envelope-square"><a href="https://mail.yahoo.com/d/folders/1?reason=norrinuser" target="_blank">{" "}kocha_po@yahoo.com</a></i>
      </div>

    

      <div className="container con">
      <div className="row">
      <div className="col">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/202x200" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>PFC</h5>
            <p>Kole zmaj</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/200x200" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/201x200" className="d-block w-100" alt="..."/>
        </div>
        </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div> 
      </div>
      </div>

      <div className="con">
      <a href="https://www.facebook.com/dragisadacha.zivadinovic" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
      <a href="#"><i className="fab fa-youtube fa-2x"></i></a>
      <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
      </div>

    </div>
                );
  }
};

export default Kontakti;
