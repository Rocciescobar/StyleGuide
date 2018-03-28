import React from 'react';

const Buttons = () => (
  <div>
    <h3 className="mg">Botones</h3>
    <h4 >Botones básicos</h4>
    <div className="flex ">
      <div className="mr-5">
        <p className="">Botón primario</p>
      </div>
      <div className="mr-5 ">
        <p className="">Pequeño</p>
        <button type="button" name="button" className="back-yellow  pl-3 pr-3 pt-2 pb-2"><span className=""><strong>CONOCE MÁS</strong></span></button>
        <div className="card mt-3">
          <div className="card-body">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="k">@-moz-document </span>
                <span className="nt">&#123; <p>font-size:</p>&#125;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="mr-5">
        <p className="">Mediano</p>
        <button type="button" name="button" className="back-yellow pl-3 pr-3 pt-2 pb-1"><h4 className=""><strong>CONOCE MÁS</strong></h4></button>
          <div className="card mt-3">
            <div className="card-body">
              <pre>
                <code className="language-css" data-lang="css">
                  <span className="k">@-moz-document </span>
                  <span className="nt">&#123; <p>font-size:</p>&#125;</span>
                </code>
              </pre>
            </div>
          </div>
      </div>
      <div className="mr-5">
        <p className="">Grande</p>
        <button type="button" name="button" className="back-yellow pl-3 pr-3 pt-2 pb-1"><h2 className="">  <strong>CONOCE MÁS</strong></h2></button>
          <div className="card mt-3">
            <div className="card-body">
              <pre>
                <code className="language-css" data-lang="css">
                  <span className="k">@-moz-document </span>
                  <span className="nt">&#123; <p>font-size:</p>&#125;</span>
                </code>
              </pre>
            </div>
          </div>
      </div>
    </div>
    <div className="flex mt-3">
      <div className="mr-4">
        <p className="">Botón secundario</p>
      </div>
      <div className="mr-5">
        <button type="button" name="button" className="back-fucsia pl-3 pr-3 pt-2 pb-3"><span className=""><strong>CONOCE MÁS</strong></span></button>
          <div className="card mt-3">
            <div className="card-body">
              <pre>
                <code className="language-css" data-lang="css">
                  <span className="k">@-moz-document </span>
                  <span className="nt">&#123; <p>font-size:</p>&#125;</span>
                </code>
              </pre>
            </div>
          </div>
          <button type="button" name="button" className="back-green1 pl-3 pr-3 pt-2 pb-2 mt-4"><span className=""><strong>CONOCE MÁS</strong></span></button>
        </div>
        <div className="mr-5">
          <button type="button" name="button" className="back-fucsia pl-3 pr-3 pt-2 pb-2"><h4 className=""><strong>CONOCE MÁS</strong></h4></button>
            <div className="card mt-3">
              <div className="card-body">
                <pre>
                  <code className="language-css" data-lang="css">
                    <span className="k">@-moz-document </span>
                    <span className="nt">&#123; <p>font-size:</p>&#125;</span>
                  </code>
                </pre>
              </div>
            </div>
            <button type="button" name="button" className="back-green1 pl-3 pr-3 pt-2 pb-2 mt-4"><h4 className=""><strong>CONOCE MÁS</strong></h4></button>
          </div>
          <div className="mr-5">
            <button type="button" name="button" className="back-fucsia pl-3 pr-3 pt-2 pb-2"><h2 className="">  <strong>CONOCE MÁS</strong></h2></button>
              <div className="card mt-3">
                <div className="card-body">
                  <pre>
                    <code className="language-css" data-lang="css">
                      <span className="k">@-moz-document </span>
                      <span className="nt">&#123; <p>font-size:</p>&#125;</span>
                    </code>
                  </pre>
                </div>
              </div>
              <button type="button" name="button" className="back-green1 pl-3 pr-3 pt-2 pb-2 mt-4"><h2 className="">  <strong>CONOCE MÁS</strong></h2></button>
            </div>
          </div>
           <img className=" img-style" src="../../assets/icon.png" alt="mountains"/>
        </div>
)

export default  Buttons
