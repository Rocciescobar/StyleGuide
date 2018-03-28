import React from 'react';

const Links = () => (
  <div>
    <h3 className="mg">Links</h3>
    <hr/>
      <div class="flex">
        <div class="mr-5">
          <h3 className="">Leer más</h3>
          <p className="">Leer más enlaces aparecen en la línea con párrafos de texto truncado.Al hacer clic en ellos puede revelar texto oculto en la línea o cargar una nueva página</p>
        </div>
        <div class="">
          <p className="">Ejemplo</p>
          <p className="">Si quieres leer más sobre el examen, ingresa aquí. Ingresa aquí</p>
        </div>
      </div>
      <div class="flex">
        <div class="mr-5">
          <h3 className="">Más links</h3>
          <p className="">Se usan más enlaces para vincular contenido adicional en otra página.Por lo general, aparecen debajo de una lista de cosas como "negocios relacionados"</p>
        </div>
        <div class="">
          <p className="">Ejemplo</p>
          <p className="">Sigue nuestro blog</p>
        </div>
      </div>
      <div class="flex">
        <div class="mr-5">
          <h3 className="">Pseudo link</h3>
          <p className="">Forzar cualquier elemento para que parezca un enlace</p>
        </div>
        <div class="">
          <p className="">Ejemplo</p>
          <p className="">La start-up peruana que conquisto a Obama y a Zuckerberg</p>
        </div>
      </div>
  </div>
)

export default Links
