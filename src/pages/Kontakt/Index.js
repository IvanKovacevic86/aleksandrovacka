import React from 'react';
import './index.css';
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";


class Kontakti extends React.Component {
  render() {
   return (

    <div className="container nh3">

      <div className="con">
        <i className="fas fa-user-secret">{" "}Dragiša Dača Živadinović</i><br/>
        <i className="fas fa-home">{" "}Kralja Aleksandra Obrenovića 137, 12370 Aleksandrovac(požarevački)</i><br/>
        <i className="fas fa-mobile-alt">{" "}+381 665046106</i><br/>
        <i className="fas fa-envelope-square">{" "}zivadinovicdragisa@gmail.com</i>
      </div>

        <div className="terry mb aaaa">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
         
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 imggg" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100 imggg" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/201x200" className="d-block w-100 imgg" alt="..." />
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
      

      <div className="con">
      <a href="https://www.facebook.com/dragisadacha.zivadinovic" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>{" "}
      <a href="https://www.youtube.com/channel/UCzjcccdCf56wcfiQ4sZSCIg?view_as=subscriber&fbclid=IwAR1Y7hm3PuWv2nRaoA4CuETH7EnOT_XaoDubWsZOw3_tP6YJ1yFbSKo_h6E" target="_blank"><i className="fab fa-youtube fa-2x"></i></a>{" "}
      <a href="https://www.instagram.com/monsieur_dacha/?hl=sr&fbclid=IwAR2FvHzp2wVxrh6tj6vkCCkJX-9DeadTK5mAdOI5jXsvPgs-mncokMFciMA" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
      </div>

    </div>
                );
  }
};

export default Kontakti;
