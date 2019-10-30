import React from 'react';
import './index.css';
import { Link }  from "@reach/router";





class Nav extends React.Component {
  
  render() {
    return (
      <div className="links2">
      
         
      <nav role="navigation" >
         <div id="menuTogglemenu" >

         <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menumenu" >
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <Link to="/" className="nav-link links" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Naslovna</Link>
                
                <div className="btn-group dropright">
                  <button type="button" className="btn  links butt dropdown-toggle"  data-toggle="dropdown" >
                    Standardi
                  </button>
                  <div className="dropdown-menu">

                    <Link to="Nop" className="drhr">Nemacki ostrodlaki pas <br/> (Deutsch Drahthaar)</Link> <br/>
                    <Link to="Nlt" className="drhr">Nemacki lovni terijer <br/> (Deutsher jagdterrier)</Link> <br />
                    <Link to="Breton" className="drhr">Epanjel Breton</Link> <br/>
                    <Link to="Poenter" className="drhr">Poenter</Link> 
                    
                  </div>
                </div>
                 
                <Link to="Odgajivacnica" className="nav-link links">Odgajivacnica</Link>
                
                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle"  data-toggle="dropdown" >
                    Psi iz odgajivacnice
                  </button>
                  <div className="dropdown-menu">

                    <Link to="Nop1" className="drhr">Nemacki ostrodlaki pas <br/> (Deutsch Drahthaar)</Link> <br/>
                    <Link to="Nlt1" className="drhr">Nemacki lovni terijer <br/> (Deutsher jagdterrier)</Link> <br />
                    <Link to="Breton1" className="drhr">Epanjel Breton</Link> <br/>
                    <Link to="Poenter1" className="drhr">Poenter</Link> 
                    
                  </div>
                </div>

                <Link to="Lov" className="nav-link links" href="#v-pills-home" role="tab" aria-controls="v-pills-go" aria-selected="false">Lov</Link>
                <Link to="Novosti" className="nav-link links" href="#v-pills-home" role="tab" aria-controls="v-pills-pp" aria-selected="false">Novosti</Link>

                
                <div className="btn-group dropright">
                  <button type="button" className="btn links butt dropdown-toggle"  data-toggle="dropdown" >
                    Ponuda
                  </button>
                  <div className="dropdown-menu">

                    <Link to="Nop2" className="drhr">Nemacki ostrodlaki pas <br/> (Deutsch Drahthaar)</Link> <br/>
                    <Link to="Nlt2" className="drhr">Nemacki lovni terijer <br/> (Deutsher jagdterrier)</Link> <br />
                    <Link to="Breton2" className="drhr">Epanjel Breton</Link> <br/>
                    <Link to="Poenter2" className="drhr">Poenter</Link> 
                    
                  </div>
                </div>

                <Link to="Linkovi" className="nav-link links">Linkovi</Link>
                <Link to="Kontakt" className="nav-link links">Kontakt</Link>
               
                
              </div>
              </ul>
        </div>

        </nav>
      </div>
                );
  }
};

export default Nav;



