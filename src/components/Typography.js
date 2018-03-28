
import React from 'react';
const Typography = () => (
  <div>
    <h3 className="mg">Tipografía</h3>
    <h1 className="mg">Header-Level 1</h1>
    <div class="card">
      <div class="card-body">
        <pre>
          <code class="language-css" data-lang="css"><span class="k">@-moz-document </span>
          <span class="nt">&#123; <p>font-size:</p>&#125;</span>
        </code>
      </pre>
    </div>
  </div>
  <h2 className="color-yellow mg">Header-Level 2-Opción 1</h2>
    <div class="card">
      <div class="card-body">
        <pre>
          <code class="language-css" data-lang="css"><span class="k">@-moz-document </span>
          <span class="nt">&#123; <p>font-size:</p>&#125;</span>
        </code>
      </pre>
    </div>
  </div>
  <h2 className="mg">Header-Level 2-Opción 2</h2>
    <div class="card">
      <div class="card-body">
        <pre>
          <code class="language-css" data-lang="css"><span class="k">@-moz-document </span>
          <span class="nt">&#123; <p>font-size:</p>&#125;</span>
        </code>
      </pre>
    </div>
  </div>
  <h3 className="color-yellow mg">Header-Level 3-Opción 1</h3>
    <div class="card">
      <div class="card-body">
        <pre>
          <code class="language-css" data-lang="css"><span class="k">@-moz-document </span>
          <span class="nt">&#123; <p>font-size:</p>&#125;</span>
        </code>
      </pre>
    </div>
  </div>
  <h3 className="mg">Header-Level 3-Opción 1</h3>
    <div class="card">
      <div class="card-body">
        <pre>
          <code class="language-css" data-lang="css"><span class="k">@-moz-document </span>
          <span class="nt">&#123; <p>font-size:</p>&#125;</span>
        </code>
      </pre>
    </div>
  </div>
  <h4 className="color-yellow mg">Header-Level 4-Opción 1</h4>
    <div class="card">
      <div class="card-body">
        <pre>
          <code class="language-css" data-lang="css"><span class="k">@-moz-document </span>
          <span class="nt">&#123; <p>font-size:</p>&#125;</span>
        </code>
      </pre>
    </div>
  </div>
  <h4 className="mg">Header-Level 4-Opción 2</h4>
    <div class="card">
      <div class="card-body">
        <pre>
          <code class="language-css" data-lang="css"><span class="k">@-moz-document </span>
          <span class="nt">&#123; <p>font-size:</p>&#125;</span>
        </code>
      </pre>
    </div>
  </div>
  <p className="mg">This is paragraph</p>
    <div class="card">
      <div class="card-body">
        <pre>
          <code class="language-css" data-lang="css"><span class="k">@-moz-document </span>
          <span class="nt">&#123; <p>font-size:</p>&#125;</span>
        </code>
      </pre>
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
