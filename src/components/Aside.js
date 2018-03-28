import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => (
  <div class="col-6 col-md-3 pd">
    <div class="list">
      <div class="">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
      <h5 class=""><Link to='/'>Inicio</Link></h5>
      <h5 class=""><Link to='/typografia'>Tipografía</Link></h5>
      <h5 class=""><Link to='/colors'>Colores</Link></h5>
      <h5 class=""><Link to='/buttons'>Botones</Link></h5>
      <h5 class=""><Link to='/links'>Links</Link></h5>
      <h5 class=""><Link to='/imagenes'>Imágenes</Link></h5>
      <h5 class=""><Link to='/formuls'>Formularios</Link></h5>
      <h5 class=""><Link to='/containers'>Contenedores</Link></h5>
  </div>






  </div>
)
export default Aside
