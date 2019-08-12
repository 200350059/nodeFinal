import React from "react";
import { Link } from "react-router-dom";

const stylesButton = {
  backgroundColor: 'purple',
    border: 'none',
    color: 'white',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '20px',
    margin: '4px 4px',
    cursor: 'pointer',
    boxShadow: '0 9px 17px 0 rgba(0, 0, 0, 0.3), 0 7px 21px 0 rgba(0, 0, 0, 0.20)',
    padding: '12px 30px',
};

function MainNav() { 
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light"><a className="navbar-brand" href="/">The Act</a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" to="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Acts</a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/acts">Acts</Link> 
            <Link className="dropdown-item" to="/acts/new">New Act</Link>
          </div>
          </li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
   }

export default MainNav;