import React from 'react';

const Buttons = () => (
  <div>
    <h3 className="mg">Botones</h3>
    <h4 >Botones básicos</h4>
    <div className="flex">
      <div className="mr-5">
        <p className="">Botón primario</p>
      </div>
      <div className="mr-5 ">
        <p className="">Pequeño</p>
        <button type="button" name="button" className="back-yellow  pl-3 pr-3 pt-2 pb-2"><span className=""><strong>CONOCE MÁS</strong></span></button>
        <div class="card mt-3">
          <div class="card-body">
            <pre className="m-0">
              <code>&lt;Button primary small&gt;</code>
                <p className="m-0">CONOCE MÁS</p>
              <code>&lt;/Button&gt;</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="mr-5">
        <p className="">Mediano</p>
        <button type="button" name="button" className="back-yellow pl-3 pr-3 pt-2 pb-1"><h4 className=""><strong>CONOCE MÁS</strong></h4></button>
        <div class="card mt-3">
          <div class="card-body">
            <pre className="m-0">
              <code>&lt;Button primary medium&gt;</code>
                <p className="m-0">CONOCE MÁS</p>
              <code>&lt;/Button&gt;</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="mr-5">
        <p className="">Grande</p>
        <button type="button" name="button" className="back-yellow pl-3 pr-3 pt-2 pb-1"><h3 className="">  <strong>CONOCE MÁS</strong></h3></button>
        <div class="card mt-3">
          <div class="card-body">
            <pre className="m-0">
              <code>&lt;Button primary large&gt;</code>
                <p className="m-0">CONOCE MÁS</p>
              <code>&lt;/Button&gt;</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-3">
      <div className="mr-5">
        <p className="">Botón secundario</p>
      </div>
      <div className="mr-5">
        <button type="button" name="button" className="back-fucsia pl-3 pr-3 pt-2 pb-3"><span className=""><strong>CONOCE MÁS</strong></span></button>
        <div class="card mt-3">
          <div class="card-body">
            <pre className="m-0">
              <code>&lt;Button secondaryA small&gt;</code>
                <p className="m-0">CONOCE MÁS</p>
              <code>&lt;/Button&gt;</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="mr-5">
        <button type="button" name="button" className="back-fucsia pl-3 pr-3 pt-2 pb-2"><h4 className=""><strong>CONOCE MÁS</strong></h4></button>
        <div class="card mt-3">
          <div class="card-body">
            <pre className="m-0">
              <code>&lt;Button secondaryA medium&gt;</code>
                <p className="m-0">CONOCE MÁS</p>
              <code>&lt;/Button&gt;</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="mr-5">
        <button type="button" name="button" className="back-fucsia pl-3 pr-3 pt-2 pb-2"><h3 className="">  <strong>CONOCE MÁS</strong></h3></button>
        <div class="card mt-3">
          <div class="card-body">
            <pre className="m-0">
              <code>&lt;Button secondaryA large&gt;</code>
                <p className="m-0">CONOCE MÁS</p>
              <code>&lt;/Button&gt;</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-3">
      <div className="mr-5">
        <p className="">Botón secundario</p>
      </div>
      <div className="mr-5">
        <button type="button" name="button" className="back-green1 pl-3 pr-3 pt-2 pb-3"><span className=""><strong>CONOCE MÁS</strong></span></button>
        <div class="card mt-3">
          <div class="card-body">
            <pre className="m-0">
              <code>&lt;Button secondaryB small&gt;</code>
                <p className="m-0">CONOCE MÁS</p>
              <code>&lt;/Button&gt;</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="mr-5">
        <button type="button" name="button" className="back-green1 pl-3 pr-3 pt-2 pb-2"><h4 className=""><strong>CONOCE MÁS</strong></h4></button>
        <div class="card mt-3">
          <div class="card-body">
            <pre className="m-0">
              <code>&lt;Button secondaryB medium&gt;</code>
                <p className="m-0">CONOCE MÁS</p>
              <code>&lt;/Button&gt;</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="mr-5">
        <button type="button" name="button" className="back-green1 pl-3 pr-3 pt-2 pb-2"><h3 className="">  <strong>CONOCE MÁS</strong></h3></button>
        <div class="card mt-3">
          <div class="card-body">
            <pre className="m-0">
              <code>&lt;Button secondaryB large&gt;</code>
                <p className="m-0">CONOCE MÁS</p>
              <code>&lt;/Button&gt;</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <h4 >Botones sociales</h4>
    <div className="flex">
        <div className="mr-5">
          <p className="mr-5">Facebook</p>
        </div>
        <div className="mr-5 ">
          <p className="">Solo icono</p>
          <div className="blue">
            <i class="fab fa-facebook-f face mt-3 ml-3"></i>
          </div>
        </div>
        <div className="mr-5 mb-4">
          <p className="">Icon con contenido</p>
          <button type="button" name="button" className="btn-face"><span><i class="fab fa-facebook-f face mt-3 mr-2"></i>Share on Facebook</span></button>
        </div>
      </div>
  </div>
)

export default  Buttons
