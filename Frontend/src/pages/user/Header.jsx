import React from 'react';
import '../../assets/css/Header.css';


function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#!">CraftY</a>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Attractions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Opinions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
