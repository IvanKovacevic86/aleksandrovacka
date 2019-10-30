import React from 'react';
import './index.css';
import video from "../../assets/video/test.mp4";

class Poenter1 extends React.Component {

  state = {
    slideIndex: 1
  }

  componentDidMount() {
    this.showSlides(this.state.slideIndex)
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {this.state.slideIndex = 1}
    if (n < 1) {this.state.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active1", "");
    }
    slides[this.state.slideIndex-1].style.display = "block";
    dots[this.state.slideIndex-1].className += "active1";
    captionText.innerHTML = dots[this.state.slideIndex-1].alt;
  }

  // Next/previous controls
plusSlides = (n) => () => {
  this.setState(state=> ({
    slideIndex: state.slideIndex + n
  }), () => {
    this.showSlides(this.state.slideIndex);
  } )
  
}

// Thumbnail image controls
currentSlide = (n) => () => {
  this.setState(state=> ({
    slideIndex: n
  }), () => {
    this.showSlides(this.state.slideIndex);
  } )
 }

  render() {
   return (
   
<div className="container nh3">

<div className="row cccc" >
          <div className="col-8">
            <div className="container1">

            <div className="mySlides">
              <div className="numbertext1">1 / 6</div>
                <img src="https://source.unsplash.com/random/202x200" style={{width: '100%'}} />
            </div>

            <div className="mySlides">
              <div className="numbertext1">2 / 6</div>
                <img className="" src="https://source.unsplash.com/random/201x200" style={{width: '100%'}} />
            </div>

            <div className="mySlides">
              <div className="numbertext1">3 / 6</div>
                <img className="" src="https://source.unsplash.com/random/203x200" style={{width: '100%'}} />
            </div>

            <div className="mySlides">
              <div className="numbertext1">4 / 6</div>
                <img className="" src="https://source.unsplash.com/random/205x200" style={{width: '100%'}} />
            </div>

            <div className="mySlides">
              <div className="numbertext1">5 / 6</div>
                <img className="" src="https://source.unsplash.com/random/199x200" style={{width: '100%'}} />
            </div>

            <div className="mySlides">
              <div className="numbertext1">6 / 6</div>
                <img  className="" src="https://source.unsplash.com/random/204x200" style={{width: '100%'}} />
            </div>


            <a  className="prev1" onClick={this.plusSlides(-1)}><i className="fas fa-angle-left fa-2x angle"></i></a>
            <a  className="next1" onClick={this.plusSlides(1)}><i className="fas fa-angle-right fa-2x angle"></i></a>



            <div className="caption-container1">
              <p id="caption"></p>
            </div>


            <div className="row1">
              <div className="column1">
                <img className="demo cursor" src="https://source.unsplash.com/random/202x200" style={{width: '100%'}} onClick={this.currentSlide(1)} alt="The Woods" />
              </div>
              <div className="column1"> 
                <img className="demo cursor" src="https://source.unsplash.com/random/201x200" style={{width: '100%'}} onClick={this.currentSlide(2)} alt="Cinque Terre" />
              </div>
              <div className="column1">
                <img className="demo cursor" src="https://source.unsplash.com/random/203x200" style={{width: '100%'}} onClick={this.currentSlide(3)} alt="Mountains and fjords" />
              </div>
              <div className="column1">
                <img className="demo cursor" src="https://source.unsplash.com/random/205x200" style={{width: '100%'}} onClick={this.currentSlide(4)} alt="Northern Lights" />
              </div>
              <div className="column1">
                <img className="demo cursor" src="https://source.unsplash.com/random/199x200" style={{width: '100%'}} onClick={this.currentSlide(5)} alt="Nature and sunrise" />
              </div> 
              <div className="column1">
                <img className="demo cursor" src="https://source.unsplash.com/random/204x200" style={{width: '100%'}} onClick={this.currentSlide(6)} alt="Snowy Mountains" />
              </div>
            </div>
            </div>
            </div>

      <div className="col-4 med">
        <p>Loremx ipsum dolor amet copper mug organic adaptogen forage, beard selfies squid. Godard retro vinyl banjo coloring book.Loremx ipsum dolor amet copper mug organic adaptogen forage, beard selfies squid. Godard retro vinyl banjo coloring book.</p>  
      </div>
   </div>
   
   <div className="mb">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/Kim94X46rKk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
   </div>

    <div>
     <video width="560" height="315" controls >
       <source src={video} />
     </video>
     </div>

   <div className="xxxx mb"></div>

</div>
    
                );
  }
};

export default Poenter1;

