import React from 'react';
const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            
        
  <a className="navbar-brand" href="#">
    User Registration
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">
          Home 
        </a>
      </li>
      
      
      
    </ul>
    
  </div>

</div>
        
        </nav>
    );
}

export default Header;