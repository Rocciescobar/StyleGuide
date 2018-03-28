
import React from 'react';
const Typography = () => (
  <div className="my-3">
    <h3 className="mt-4 font-weight-bold">Tipografía</h3>
    <p>Documentación y ejemplos de textos y tipografías usadas en la web.</p>
    <div>
      <h1 className="ff-bitter">Header-Level 1</h1>
      <div class="card">
        <div class="card-body">
          <pre className="m-0">
            <code class="language-css" data-lang="css">
              &lt;Typography h1 bitter&gt; Título 1 &lt;/Typography&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className="my-3">
      <h2 className="color-fucsia font-weight-bold">Header-Level 2</h2>
      <div class="card">
        <div class="card-body">
          <pre className="m-0">
            <code class="language-css" data-lang="css">
              &lt;Typography h2 bold colorSA&gt; Título 2 &lt;/Typography&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className="my-3">
      <h3 className="color-green font-weight-bold">Header-Level 3</h3>
      <div class="card">
        <div class="card-body">
          <pre className="m-0">
            <code class="language-css" data-lang="css">
              &lt;Typography h3 bold colorSB&gt; Título 3 &lt;/Typography&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className="my-3">
      <h4 className="font-weight-bold">Header-Level 4</h4>
      <div class="card">
        <div class="card-body">
          <pre className="m-0">
            <code class="language-css" data-lang="css">
              &lt;Typography h4 bold&gt; Título 4 &lt;/Typography&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className="my-3">
      <p className="font-weight-bold">This is a paragraph</p>
      <div class="card">
        <div class="card-body">
          <pre className="m-0">
            <code class="language-css" data-lang="css">
              &lt;Typography paragraph&gt; Párrafo &lt;/Typography&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
)

export default Typography
/*
import { connect } from 'react-redux';

const Typography = ({ cambio, text }) => {
  return (
    <div>
      <button onClick={cambio}> {text} </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    text: state.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cambio(text) {
      dispatch({
        type: "CAMBIAR",
        text:"se cambio"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Typography);
*/
