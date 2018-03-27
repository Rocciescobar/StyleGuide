import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => (
  <div class="col-4 col-md-3">
    <ul className="list">
      <li> <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/></li>
      <li><Link to='/'>Tipografía</Link></li>
      <li><Link to='/colors'>colores</Link></li>
      <li>Botones</li>
      <li>Links</li>
      <li>Imagenes</li>
      <li>Formularios</li>
      <li>Contenedores</li>
    </ul>
  </div>
)
export default Aside
