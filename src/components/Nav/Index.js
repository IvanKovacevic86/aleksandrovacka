import React from 'react';
import './index.css';
import { Link } from "@reach/router";
import Lov from '../../pages/Lov';
import Linkovi from '../../pages/Linkovi';
import Kontakt from '../../pages/Kontakt';
import Breton from '../../pages/Breton';
import Nlt from '../../pages/Nlt';
import Nop from '../../pages/Nop';
import Poenter from '../../pages/Poenter';




class Nav extends React.Component {
  render() {
    return (
      <div className="links2">
         <div style={{ background: "#fff"}}>
            <div>
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              
                <Link to="/" className="nav-link active links">Naslovna</Link>
                
                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Standardi
                  </button>
                  <div className="dropdown-menu">
                    <Link to="Poenter">Poenter</Link> <br />
                    <Link to="Breton">Epanjel Breton</Link> <br/>
                    <Link to="Nop">Nemacki ostrodlaki pas <br/> Deutsch Drahthaar</Link> <br/>
                    <Link to="Nlt">Nemacki lovni terijer <br/> Deutsher jagdterrier</Link>
                    
                  </div>
                </div>

                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Odgajivacnica
                  </button>
                  <div className="dropdown-menu">
                  <Link to="Poenter">Poenter</Link> <br />
                    <Link to="Breton">Epanjel Breton</Link> <br/>
                    <Link to="Nop">Nemacki ostrodlaki pas <br/> Deutsch Drahthaar</Link> <br/>
                    <Link to="Nlt">Nemacki lovni terijer <br/> Deutsher jagdterrier</Link>
                  </div>
                </div>

                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Psi iz odgajivacnice
                  </button>
                  <div className="dropdown-menu">
                    <Link to="Poenter">Poenter</Link> <br />
                    <Link to="Breton">Epanjel Breton</Link> <br/>
                    <Link to="Nop">Nemacki ostrodlaki pas <br/> Deutsch Drahthaar</Link> <br/>
                    <Link to="Nlt">Nemacki lovni terijer <br/> Deutsher jagdterrier</Link>
                  </div>
                </div>

                <Link to="Lov" className="nav-link links">Lov</Link>
                <Link to="Novosti" className="nav-link links">Novosti</Link>

                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ponuda
                  </button>
                  <div className="dropdown-menu">
                    <Link to="Poenter">Poenter</Link> <br />
                    <Link to="Breton">Epanjel Breton</Link> <br/>
                    <Link to="Nop">Nemacki ostrodlaki pas <br/> Deutsch Drahthaar</Link> <br/>
                    <Link to="Nlt">Nemacki lovni terijer <br/> Deutsher jagdterrier</Link>
                  </div>
                </div>

                <Link to="Linkovi" className="nav-link links">Linkovi</Link>
                <Link to="Kontakt" className="nav-link links">Kontakt</Link>
                
              </div>
            </div>

          
        </div>
      </div>
                );
  }
};

export default Nav;



