import React from 'react';

const Start = () => (
  <div>
    <h3 className="mt-4 font-weight-bold">Introducción</h3>
    <p className="text-justify">Esta guía de estilos fue diseñada con el uso de componentes React que pueden combinarse para ayudar a los desarrolladores a crear los diferentes productos digitales de Laboratoria.</p>
    <h3 className="mt-4 font-weight-bold">Instalación</h3>
    <p>Ejecute el siguiente comando usando npm:</p>
    <div class="card">
      <div className="card-body">
        <pre className="m-0">
          <code className="language-css" data-lang="css">
            <span className="k">npm install laboratoria-style-guide</span>
          </code>
        </pre>
      </div>
    </div>
    <div className="mt-4 mb-5">
      <a href="https://www.npmjs.com/package/laboratoria-style-guide" className="btn back-green1 font-weight-bold" role="button" aria-pressed="true">Más información</a>
    </div>
    <h3 className="mt-4 font-weight-bold">Uso</h3>
    <p>Cada componente incluye información para ayudarlo a implementarlos.</p>
  </div>
)

export default Start
