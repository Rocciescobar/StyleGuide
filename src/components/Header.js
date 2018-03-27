import React from 'react';

const Header = () => (
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand " href="#"><i class="fas fa-chevron-left"></i><strong>Laboratoria</strong><i class="fas fa-chevron-right"></i></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">

        </ul>
        <span class="navbar-text">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Brand</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Color</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Comunicación interna</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Web</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Ayuda</a>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  </div>
)

export default Header
