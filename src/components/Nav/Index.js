import React from 'react';
import './index.css';
import { Link }  from "@reach/router";
import Nop from '../../pages/Nop';
import Nlt from '../../pages/Nlt';
import Breton from '../../pages/Breton';
import Poenter from '../../pages/Poenter';
import Lov from '../../pages/Lov';
import Linkovi from '../../pages/Linkovi';
import Novosti from '../../pages/Novosti';
import Kontakt from '../../pages/Kontakt';
import Bretonm from '../../pages/Bretonm';
import Nltm from '../../pages/Nltm';
import Nopm from '../../pages/Nopm';
import Poenterm from '../../pages/Poenterm';
import Bretonz from '../../pages/Bretonz';
import Nltz from '../../pages/Nltz';
import Nopz from '../../pages/Nopz';
import Poenterz from '../../pages/Poenterz';
import Naslovna from '../../pages/Naslovna';





class Nav extends React.Component {
  render() {
    return (
      <div className="links2">
         <div style={{ background: "#fff"}}>
            <div>
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              
                <Link to="/" className="nav-link active links" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Naslovna</Link>
                
                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >
                    Standardi
                  </button>
                  <div className="dropdown-menu">

                    <Link to="Nop">Nemacki ostrodlaki pas <br/> Deutsch Drahthaar</Link> <br/>
                    <Link to="Nlt">Nemacki lovni terijer <br/> Deutsher jagdterrier</Link> <br />
                    <Link to="Breton">Epanjel Breton</Link> <br/>
                    <Link to="Poenter">Poenter</Link> 
                    
                  </div>
                </div>

                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown"  >
                    Odgajivacnica
                  </button>
                  <div className="dropdown-menu dropright">
                    
                    <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Nemacki ostrodlaki pas <br/> Deutsch DrahthaarPoenter</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Nopm">Muzjak</Link> <br />
                    <Link to="Nopz">Zenka</Link> <br />
                    </div>

                    <button type="button" className="btn links butt butt2 dropdown-toggle" data-toggle="dropdown" >Nemacki lovni terijer <br/> Deutsher jagdterrier</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Nltm">Muzjak</Link> <br />
                    <Link to="Nltz">Zenka</Link> <br />
                    </div>
                    
                    <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Epanjel Breton</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Bretonm">Muzjak</Link> <br />
                    <Link to="Bretonz">Zenka</Link> <br />
                    </div>

                    <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Poenter</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Poenterm">Muzjak</Link> <br />
                    <Link to="Poenterz">Zenka</Link> <br />
                    </div>
                    </div>
                </div>

                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >
                    Psi iz odgajivacnice
                  </button>
                  <div className="dropdown-menu dropright">
                    
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Nemacki ostrodlaki pas <br/> Deutsch DrahthaarPoenter</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Nopm">Muzjak</Link> <br />
                    <Link to="Nopz">Zenka</Link> <br />
                    </div>

                    <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Nemacki lovni terijer <br/> Deutsher jagdterrier</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Nltm">Muzjak</Link> <br />
                    <Link to="Nltz">Zenka</Link> <br />
                    </div>
                    
                    <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Epanjel Breton</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Bretonm">Muzjak</Link> <br />
                    <Link to="Bretonz">Zenka</Link> <br />
                    </div>

                    <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Poenter</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Poenterm">Muzjak</Link> <br />
                    <Link to="Poenterz">Zenka</Link> <br />
                    </div>

                  

                  </div>
                </div>

                <Link to="Lov" className="nav-link links" href="#v-pills-home" role="tab" aria-controls="v-pills-go" aria-selected="false">Lov</Link>
                <Link to="Novosti" className="nav-link links" href="#v-pills-home" role="tab" aria-controls="v-pills-pp" aria-selected="false">Novosti</Link>

                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >
                    Ponuda
                  </button>
                  <div className="dropdown-menu dropright">
                    
                  <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Nemacki ostrodlaki pas <br/> Deutsch DrahthaarPoenter</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Nopm">Muzjak</Link> <br />
                    <Link to="Nopz">Zenka</Link> <br />
                    </div>

                    <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Nemacki lovni terijer <br/> Deutsher jagdterrier</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Nltm">Muzjak</Link> <br />
                    <Link to="Nltz">Zenka</Link> <br />
                    </div>
                    
                    <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Epanjel Breton</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Bretonm">Muzjak</Link> <br />
                    <Link to="Bretonz">Zenka</Link> <br />
                    </div>

                    <button type="button" className="btn links butt dropdown-toggle" data-toggle="dropdown" >Poenter</button> <br />
                    <div className="dropdown-menu">
                    <Link to="Poenterm">Muzjak</Link> <br />
                    <Link to="Poenterz">Zenka</Link> <br />
                    
                    </div>
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



