import React from 'react';
import './index.css';

class Nlt extends React.Component {
  render() {
   return (
     <div className="container nh3">
      
      <div className="container terry mb">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/205x200" className="d-block w-100" alt="..."/>
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
          
 <     div className="container">
        <p>LoreMs ipsum dolor amet green juice sriracha microdosing prism pour-over tattooed flannel. Small batch poutine everyday carry, direct trade tattooed tumeric man bun fashion axe jianbing chambray pinterest selvage cardigan migas put a bird on it. Sriracha crucifix activated charcoal, shaman vexillologist pug freegan deep v waistcoat venmo irony forage. Mustache mixtape enamel pin retro literally leggings. Put a bird on it hell of humblebrag, synth hella shaman narwhal portland.</p>
      </div>

     </div>
                );
  }
};


export default Nlt;