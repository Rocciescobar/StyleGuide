import React from 'react';

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand " href="#"><i className="fas fa-chevron-left"></i><strong>Laboratoria</strong><i className="fas fa-chevron-right"></i></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
        </ul>
        <span className="navbar-text">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Brand</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Color</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Comunicación interna</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link color-yellow" href="#">Web</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Ayuda</a>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  </div>
)

export default Header
