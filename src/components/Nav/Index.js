import React from 'react';
import './index.css';
import Lov from '../../pages/Lov';
import { Link } from "@reach/router";


class Nav extends React.Component {
  render() {
    return (
      <div className="links2">
         <div style={{ background: "#fff"}}>
            <div>
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              
                <Link to="Naslovna" className="nav-link active links">Naslovna</Link>
                
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

                <Link to="Lov" className="nav-link links">Lov</Link>
                <Link to="Novosti" className="nav-link links">Novosti</Link>

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



