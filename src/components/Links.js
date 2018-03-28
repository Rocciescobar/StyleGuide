import React from 'react';

const Links = () => (
  <div>
    <h3 className="mg">Links</h3>
    <hr/>
    <div className="flex text-justify">
      <div >
        <h3 className="">Leer más</h3>
        <p>Leer más enlaces aparecen en la línea con párrafos de texto truncado.Al hacer clic en ellos puede revelar texto oculto en la línea o cargar una nueva página</p>
      </div>
      <div>
        <h3 className="">Ejemplo</h3>
        <p>si quiere leer más sobre el examen, ingresa aquí.<span className="color-fucsia">Ingresa aqui</span></p>
      </div>
      <div >
        <h3 className="">Más links</h3>
        <p>Se usan más enlaces para vincular contenido adicional en otra página</p>
      </div>
      <div>
        <h3 className="">Ejemplo</h3>
        <p>Nuestro blog</p>
      </div>
    </div>
  </div>
)

export default Links
