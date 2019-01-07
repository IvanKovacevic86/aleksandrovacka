import React from 'react';
import './index.css';


class Nav extends React.Component {
  render() {
    return (
      <div className="links2">
         <div style={{ background: "#fff"}}>
            <div>
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              
                <a className="nav-link active links" id="v-pills-naslovna-tab" data-toggle="pill" href="#v-pills-naslovna" role="tab" aria-controls="v-pills-naslovna" aria-selected="true">Naslovna</a>
                
                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Standardi
                  </button>
                  <div className="dropdown-menu">
                    <a href="#">Poenter</a> <br />
                    <a href="#">Epanjel Breton</a> <br/>
                    <a href="#">Nemacki ostrodlaki pas <br/> Deutsch Drahthaar</a> <br/>
                    <a href="#">Nemacki lovni terijer <br/> Deutsher jagdterrier</a>
                    
                  </div>
                </div>

                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Odgajivacnica
                  </button>
                  <div className="dropdown-menu">
                  <a href="#">Poenter</a> <br />
                    <a href="#">Epanjel Breton</a> <br/>
                    <a href="#">Nemacki ostrodlaki pas <br/> Deutsch Drahthaar</a> <br/>
                    <a href="#">Nemacki lovni terijer <br/> Deutsher jagdterrier</a>
                  </div>
                </div>

                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Psi iz odgajivacnice
                  </button>
                  <div className="dropdown-menu">
                    <a href="#">Poenter</a> <br />
                    <a href="#">Epanjel Breton</a> <br/>
                    <a href="#">Nemacki ostrodlaki pas <br/> Deutsch Drahthaar</a> <br/>
                    <a href="#">Nemacki lovni terijer <br/> Deutsher jagdterrier</a>
                  </div>
                </div>

                <a className="nav-link links" id="v-pills-lov-tab" data-toggle="pill" href="#v-pills-lov" role="tab" aria-controls="v-pills-lov" aria-selected="false">Lov</a>
                <a className="nav-link links" id="v-pills-novosti-tab" data-toggle="pill" href="#v-pills-novosti" role="tab" aria-controls="v-pills-novosti" aria-selected="false">Novosti</a>

                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ponuda
                  </button>
                  <div className="dropdown-menu">
                    <a href="#">Poenter</a> <br />
                    <a href="#">Epanjel Breton</a> <br/>
                    <a href="#">Nemacki ostrodlaki pas <br/> Deutsch Drahthaar</a> <br/>
                    <a href="#">Nemacki lovni terijer <br/> Deutsher jagdterrier</a>
                  </div>
                </div>

                <a className="nav-link links" id="v-pills-linkovi-tab" data-toggle="pill" href="#v-pills-linkovi" role="tab" aria-controls="v-pills-linkovi" aria-selected="false">Linkovi</a>
                <a className="nav-link links" id="v-pills-kontakt-tab" data-toggle="pill" href="#v-pills-kontakt" role="tab" aria-controls="v-pills-kontakt" aria-selected="false">Kontakt</a>
              </div>
            </div>

          
        </div>
      </div>
                );
  }
};

export default Nav;



