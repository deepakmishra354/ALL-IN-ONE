import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
      <div className="container-fluid bar">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active nav-link-custom" to="/" id='jk'>Home</Link>
            <Link className='nav-link active nav-link-custom' to="/dynamic" id='jk' >Login</Link>
            
            <div className="nav-item dropdown nav-link-custom">
              <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Features
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/features/todolist">Todo List</Link></li>
                <li><Link className="dropdown-item" to="/features/stopwatch">StopWatch</Link></li>
                <li><Link className="dropdown-item" to="/features/bgchanger">Background Changer</Link></li>
                <li><Link className="dropdown-item" to="/features/calculater">Calculater</Link></li>
                <li><Link className="dropdown-item" to="/features/word">Word Counter</Link></li>
              </ul>
            </div>
            <Link className="nav-link active nav-link-custom" to="/about" id='jk' >About</Link>
            <Link className='nav-link active nav-link-custom' to="/api" id='jk' >API</Link>
            <Link className='nav-link active nav-link-custom' to="/contact-us" id='jk' >Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
