import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => (
  <div className="col-5 col-md-3 pd">
    <div className="list">
      <div className="">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
      <h5 className=""><Link to='/'>Inicio</Link></h5>
      <h5 className=""><Link to='/typografia'>Tipografía</Link></h5>
      <h5 className=""><Link to='/colors'>Colores</Link></h5>
      <h5 className=""><Link to='/buttons'>Botones</Link></h5>
      <h5 className=""><Link to='/links'>Links</Link></h5>
      <h5 className=""><Link to='/imagenes'>Imágenes</Link></h5>
      <h5 className=""><Link to='/formuls'>Formularios</Link></h5>
      <h5 className=""><Link to='/containers'>Contenedores</Link></h5>
  </div>






  </div>
)
export default Aside
